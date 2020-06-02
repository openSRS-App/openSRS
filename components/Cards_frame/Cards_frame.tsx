import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button, CheckBox } from '@ui-kitten/components';


export default function Cards_frame(): React.ReactElement {
  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

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
