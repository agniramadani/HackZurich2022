import React, { useState, useEffect } from 'react';
import {Dimensions, RefreshControl, View, Text, ScrollView, ActivityIndicator} from "react-native";
import {LineChart, ProgressChart} from "react-native-chart-kit";
import {Button, Card, Title, Paragraph, useTheme} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function HomePage(){
const [refreshing, setRefreshing] = React.useState(false);
const [gee, setGee] = React.useState(16);
const [gas, setGas] = React.useState(300);
const [water, setWater] = React.useState(140);

const fetchData = async () => {
    axios.get('http://34.118.69.220/get_energy_expectation')
        .then(function (response) {
            setGee(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    axios.get('http://34.118.69.220/get_gas_consumption')
        .then(function (response) {
            setGas(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    axios.get('http://34.118.69.220/get_water_consumption')
        .then(function (response) {
            setWater(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const forRefreshing = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
}, []);
const onRefresh = () => {
    setRefreshing(true)
    fetchData().then(r => null)
    forRefreshing()
}

const {colors} = useTheme();
const w = '#1CD6CE';
const e = '#FEDB39';
const g = '#F36A7B';

const data = {
    data: [1-60/water, 1-5/gee, 1-172/gas],
    colors: [
        w, e, g
    ],
};

console.log("Water %: " + 1-60/water + "  " + "Ele %: " +  1-5/gee + "Gas %: " + 1-172/gas)

useEffect(() =>{
    fetchData().then(r => null)
}, []);
return <ScrollView style={{backgroundColor: '#000'}}>
    {
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
    }
    {refreshing ? <ActivityIndicator style={{marginBottom: 15}} size="large" color="#fff" /> : null}
    <ProgressChart
        hideLegend={true}
        data={data}
        width={Dimensions.get("window").width}
        height={250}
        strokeWidth={25}
        hasLegend={true}
        withCustomBarColorFromData={true}
        radius={45}
        chartConfig={{
            // backgroundGradientFromOpacity: 0.5,
            backgroundGradientToOpacity: 1,
            backgroundColor: colors.surface,
            backgroundGradientFrom: colors.surface,
            backgroundGradientTo: colors.surface,
            propsForLabels: { fill: colors.text },
            decimalPlaces: 2,
            color: (opacity = 1, _index) => `rgba(0,0,0,${opacity})`,
        }}
        style={{margin: 10, borderRadius: 10, marginTop: 17}}
    />
    <Card style={{margin: 10, borderRadius: 10}}>
        <Card.Title  title="Current Consumption" subtitle=""/>
        <Card.Content>
            <View
                style={{flex: 1, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center',
                    alignItems: 'center'}}
            >
                <View style={{margin: 5, padding: 10}}>
                    <Ionicons name="water" size={60} color={w} />
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>60/{water.toFixed(2)} L</Text>
                </View>

                <View style={{margin: 5, padding: 10}}>
                    <MaterialCommunityIcons name="lightning-bolt" size={65} color={e} />
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>5/{gee.toFixed(2)} KWh</Text>
                </View>

                <View style={{margin: 5, padding: 10}}>
                    <MaterialCommunityIcons name="diving-scuba-tank" size={65} color={g} />
                    <Text style={{textAlign: 'center', fontWeight: 'bold'}}>170/{gas.toFixed(2)} L</Text>
                </View>
            </View>
        </Card.Content>
    </Card>

    <Card style={{backgroundColor: '#FFE9A0', margin: 10, borderRadius: 10}}>
        <Card.Title  title="Savings" subtitle=""/>
        <Card.Content>
            {/*<Title>Card title</Title>*/}
            <Paragraph>Your daily resource <Text style={{fontWeight: 'bold', fontSize: 18, color: 'green'}}>
                savings </Text> are <Text style={{fontWeight: 'bold', fontSize: 18,}}> 15.45 CHF</Text> </Paragraph>
        </Card.Content>

        <Card.Actions>
            {/*<Button>Cancel</Button>*/}
            {/*<Button>Ok</Button>*/}
        </Card.Actions>
    </Card>

    <LineChart
        data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
            datasets: [
                {
                    data: [
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10
                    ]
                }
            ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={200}
        yAxisLabel="CHF"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "grey",
            backgroundGradientTo: "grey",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 0
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }}
        bezier
        style={{
            margin: 10,
            borderRadius: 10
        }}
    />

    <Card style={{margin: 10, borderRadius: 10}}>
        <Card.Title  title="Insights" subtitle=""/>
        <Card.Content>
            {/*<Title>Card title</Title>*/}
            <Paragraph>Your daily resource savings is equivalent to CO2 emissions of 50 Bananas </Paragraph>
        </Card.Content>
        {/*<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
        <Card.Actions>
            {/*<Button>Cancel</Button>*/}
            {/*<Button>Ok</Button>*/}
        </Card.Actions>
    </Card>

</ScrollView>
};
