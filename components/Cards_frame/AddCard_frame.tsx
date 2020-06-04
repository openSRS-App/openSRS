import React from 'react'
import { View } from 'react-native'
import { Layout, Text, Button, CheckBox } from '@ui-kitten/components';


let addedCard;

function addCard() {
  fetch("http://localhost:4000", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query:` 
        query {
          cards {
            front
            back
            id
          }
        }`
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log("cards data: ", data)
    })
};




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

    </Layout>
  )
}
