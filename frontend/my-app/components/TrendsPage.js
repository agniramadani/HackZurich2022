import React from "react";
import {ScrollView, Dimensions, RefreshControl, ActivityIndicator} from "react-native";
import {LineChart} from "react-native-chart-kit";

export default function TrendsPage(){
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return <ScrollView style={{backgroundColor: '#000'}}>
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
        {refreshing ? <ActivityIndicator style={{marginBottom: 15}} size="large" color="#fff" /> : null}
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
                height={200}
                yAxisLabel="CHF"
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
                    margin: 10,
                    borderRadius: 10
                }}
            />

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
            height={170}
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
    </ScrollView>
};
