import React from 'react';
import { View } from 'react-native';
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card } from '@ui-kitten/components';




export default function Home_frame({ navigation }: any) {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <View
                style={{ alignSelf: "flex-start", padding: 20 }}
            >
                <Button
                    // title="This leads to the Menu Component"
                    onPress={() => navigation.navigate('Menu')}
                >Menu</Button>
            </View> */}
            <View
                style={{ flex: 1, alignSelf: 'center', paddingTop: 100, paddingBottom: 100 }}
            >
                <Card
                    style={{ alignSelf: "center", paddingTop: 60, paddingBottom: 50, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
            
                    elevation: 4}} 
                >
                    <Text category='h1' style={{ alignSelf: "center" }}>Welcome to OpenSRS</Text>
                    <Text category='h5' style={{ alignSelf: "center" }}>The Open Source SRS</Text>
                </Card>
            </View>
            <View style={{ paddingBottom: 90 }}>
                <Button style={{ shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.23,
                                    shadowRadius: 2.62,
                            
                                    elevation: 4}} 
                    // title="Flash Card Component"
                    onPress={() => navigation.navigate('FlashCard')}
                >Study!</Button>
                {/* <Button
                    // title="Flash Card Component"
                    onPress={() => navigation.navigate('Login')}
                >Login!</Button> */}
            </View>
        </Layout >
    )
}
