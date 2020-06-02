import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card,  } from '@ui-kitten/components';

export default function Home_frame() {
    return (
        <Layout style={{display:"flex", justifyContent: 'center', alignItems: 'center'}}>
            <View style={{alignSelf:"flex-start"}}>
                <Button >Menu</Button>
            </View>
            <View style={{display:"flex", alignSelf:'center'}}>
                <Card style={{alignSelf:"center"}}>
                    <Text category='h1' style={{alignSelf:"center"}}>Welcome to OpenSRS</Text>
                    <Text category='h5' style={{alignSelf:"center"}}>The Open Source SRS</Text>
                </Card>
            </View>
            <View >
                <Button>Study!</Button>
            </View>
        </Layout>
    )
}
