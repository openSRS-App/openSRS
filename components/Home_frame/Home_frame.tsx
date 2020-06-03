import React from 'react';
import { View } from 'react-native';
import { Layout, Text, Button, Menu, MenuGroup, MenuItem, Card } from '@ui-kitten/components';

// export default function Home_frame() {
//     return (
//         <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <View style={{alignSelf:"flex-start", padding:"10px"}}>
//                 <Button >Menu</Button>
//             </View>
//             <view style={{flex: 1, alignSelf:'center', paddingTop:'300px', paddingBottom:'300px'}}>
//                 <Card >
//                 // style={{alignSelf:"center", paddingTop: '80px', paddingBottom:'80px'}}>
//                     <Text category='h1' style={{alignSelf:"center"}}>Welcome to OpenSRS</Text>
//                     <Text category='h5' style={{alignSelf:"center"}}>The Open Source SRS</Text>
//                 </Card>
//             </view>
//             <view style={{padding:'120px'}}>
//                 <Button>Study!</Button>
//             </view>
//         </Layout>
//     )
// }

export default function Home_frame() {
        return (
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View 
                style={{alignSelf:"flex-start", padding: 20}}
                >
                    <Button >Menu</Button>
                </View>
                <View 
                style={{flex: 1, alignSelf:'center', paddingTop: 100, paddingBottom: 100}}
                >
                    <Card
                    style={{alignSelf:"center", paddingTop: 60, paddingBottom: 50}}
                    >
                        <Text category='h1' style={{alignSelf:"center"}}>Welcome to OpenSRS</Text>
                        <Text category='h5' style={{alignSelf:"center"}}>The Open Source SRS</Text>
                    </Card>
                </View> 
                <View style={{paddingBottom: 90}}>
                    <Button>Study!</Button>
                </View>
            </Layout>
        )
    }
