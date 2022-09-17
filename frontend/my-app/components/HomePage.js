import React from "react";
import {Dimensions, View, Text, ScrollView} from "react-native";
import {LineChart, ProgressChart} from "react-native-chart-kit";
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomePage(){
const data = {
    labels: [
        "E",
        "W",
        "G",
    ], // optional
    data: [0.2, 0.6, 0.8],
};
return <ScrollView>
    <ProgressChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        chartConfig={{
            backgroundColor: "#f5f3ed",
            backgroundGradientFrom: "#f5f3ed",
            backgroundGradientTo: "#f5f3ed",
            //decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(3, 2, 2, ${opacity})`,
            barPercentage: 0.5,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }}

        bezier
        style={{
            borderRadius: 16,
            margin: 10
        }}
    />
    <View
        style={{flex: 1, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center',
            alignItems: 'center'}}
    >
        <View style={{margin: 5}}>
            <Ionicons name="water" size={60} color="blue" />
        </View>

        <View style={{margin: 5}}>
            <MaterialCommunityIcons name="lightning-bolt" size={60} color="orange" />
        </View>

        <View style={{margin: 5}}>
            <MaterialCommunityIcons name="diving-scuba-tank" size={60} color="grey" />
        </View>
    </View>


    <LineChart
        data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }
            ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
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
            marginVertical: 8,
            borderRadius: 0
        }}
    />

    <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content>
        {/*<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />*/}
        <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
        </Card.Actions>
    </Card>

</ScrollView>
};
