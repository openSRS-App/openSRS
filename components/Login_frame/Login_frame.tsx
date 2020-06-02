import React from 'react'
import { View, Image } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components';

export default function Login_frame(): React.ReactElement {
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{margin: '1em'}} category='h1'>openSRS</Text>

            <Image style={{width: 100, height: 100}}  source={require('./welcome.png')} />

            <View style={{margin: '1em'}}>
              <Button style={{margin: '1em', width:'15em'}}>Log-In</Button>
              <Button style={{margin: '1em', width:'15em'}}>Sign-Up</Button>
              <Text style={{textAlign: 'center'}}>Forgot Your Password?</Text>
            </View>
        </ Layout>
    )
}
