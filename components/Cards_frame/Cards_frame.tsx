import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components';



export default function Cards_frame({ navigation }: any): React.ReactElement {
  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      
      <View style={{ alignSelf: "flex-start", padding: 20 }}>
        <Button
        // title="This leads to the Menu Component"
          onPress={() => navigation.navigate('Menu')}>
          Menu
        </Button>
      </View>

      <Text category='h1'> </Text>
      <View style={{ flexDirection: 'row' }}>
        <Button 
          style={{ margin: '5%' }} 
          onPress={() => navigation.navigate('AddCard')}>
            Add a Card
        </Button>
      </ View>
      <View style={{ flexDirection: 'row' }}>
        <Button style={{ margin: '5%' }}>Edit a Card</Button>
      </ View>
      <View style={{ flexDirection: 'row' }}>
        <Button style={{ margin: '5%' }}>Delete a Card</Button>
      </ View>
    </Layout>
  )
}
