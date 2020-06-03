import React from 'react';
import { View } from 'react-native';
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card } from '@ui-kitten/components';

interface ButtonTitle {
    title: string;
}

export default function Home_frame({ navigation }: any) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{ alignSelf: "flex-start", padding: 20 }}
            >
                <Button
                    title="This leads to the Menu Component"
                    onPress={() => navigation.navigate('Menu')}
                >Menu</Button>
            </View>
            <View
                style={{ flex: 1, alignSelf: 'center', paddingTop: 100, paddingBottom: 100 }}
            >
                <Card
                    style={{ alignSelf: "center", paddingTop: 60, paddingBottom: 50 }}
                >
                    <Text category='h1' style={{ alignSelf: "center" }}>Welcome to OpenSRS</Text>
                    <Text category='h5' style={{ alignSelf: "center" }}>The Open Source SRS</Text>
                </Card>
            </View>
            <View style={{ paddingBottom: 90 }}>
                <Button
                    title="Flash Card Component"
                    onPress={() => navigation.navigate('FlashCard')}
                >Study!</Button>
            </View>
        </Layout >
    )
}
