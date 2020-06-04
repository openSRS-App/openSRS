import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button, CheckBox } from '@ui-kitten/components';


export default function Cards_frame({ navigation }: any): React.ReactElement {
  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      
      <Button onPress={() => navigation.navigate('Menu')}>
      Menu
      </Button>

      <Text category='h1'> </Text>
      <View style={{ flexDirection: 'row' }}>
        <Button style={{ margin: '1em' }}>Add a Card</Button>
      </ View>
      <View style={{ flexDirection: 'row' }}>
        <Button style={{ margin: '1em' }}>Edit a Card</Button>
      </ View>
      <View style={{ flexDirection: 'row' }}>
        <Button style={{ margin: '1em' }}>Delete a Card</Button>
      </ View>

    </Layout>
  )
}
