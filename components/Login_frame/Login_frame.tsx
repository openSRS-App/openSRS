import React from 'react'
import { Image } from 'react-native'
import { Layout, Text } from '@ui-kitten/components';

export default function Login_frame(): React.ReactElement {
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1'>openSRS</Text>
            <Image style={{width: 100, height: 100}}  source={require('./welcome.png')} />
        </ Layout>
    )
}
