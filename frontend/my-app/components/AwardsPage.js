import React from "react";
import {Dimensions, View, ScrollView, Image} from "react-native";

export default function AwardsPage(){

    return <ScrollView style={{flex: 1}}>
        <View>
            <Image
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: 100,
                }}
                source={require('../images/img1.png')}
            />
        </View>
        <View>
            <Image
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: 100,
                }
                }
                source={require('../images/img2.png')}
            />
        </View>
        <View>
            <Image
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: 100,
                }
                }
                source={require('../images/img3.png')}
            />
        </View>
        <View>
            <Image
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: 100,
                }
                }
                source={require('../images/img4.png')}
            />
        </View>

        <View>
            <Image
                style={{
                    flex: 1,
                    width: 400,
                    height: 600,
                    overflow: 'hidden',
                    alignItems: 'center',
                    position: 'relative',
                    }
                }
                source={require('../images/reverse.png')}
            />
        </View>
    </ScrollView>
};
