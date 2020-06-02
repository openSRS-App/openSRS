import React from 'react'
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card } from '@ui-kitten/components';

export default function Home_frame() {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <view style={{alignSelf:"flex-start", padding:"10px"}}>
                <Button >Menu</Button>
            </view>
            <view style={{flex: 1, alignSelf:'center', paddingTop:'300px', paddingBottom:'300px'}}>
                <Card style={{alignSelf:"center", paddingTop: '80px', paddingBottom:'80px'}}>
                    <Text category='h1' style={{alignSelf:"center"}}>Welcome to OpenSRS</Text>
                    <Text category='h5' style={{alignSelf:"center"}}>The Open Source SRS</Text>
                </Card>
            </view>
            <view style={{padding:'120px'}}>
                <Button>Study!</Button>
            </view>
        </Layout>
    )
}
