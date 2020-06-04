import * as React from 'react'
import { View } from 'react-native'
import { Layout, Button, Input } from '@ui-kitten/components';



export default function Cards_frame({ navigation }: any): React.ReactElement {
 
let addedCard;

function addCard() {
  fetch("http://localhost:4000", {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query:` 
        mutation {
          addCard (front: "${front}", back: "${back}") {
            front
            back
          }
        }`
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log("cards data: ", data)
    })
};

  const [front, setFront] = React.useState<string>('');
  const [back, setBack] = React.useState<string>('');
  
  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      
      <View style={{ alignSelf: "flex-start", padding: 20 }}>
        <Button
        // title="This leads to the Menu Component"
          onPress={() => navigation.navigate('Menu')}>
          Menu
        </Button>
      </View>
      <Input 
        label="Front of Card" 
        placeholder="Question goes here.."
        value={front}
        onChangeText={setFront}
        />
      <Input 
        label="Back of Card" 
        placeholder="Place answer here.." 
        value={back}
        onChangeText={setBack}
        />
      <Button onPress={addCard}>Submit</Button>
    </Layout>
  )
}
