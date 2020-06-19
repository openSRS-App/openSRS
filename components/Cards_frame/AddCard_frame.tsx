import * as React from 'react'
import { View } from 'react-native'
import { Layout, Button, Input } from '@ui-kitten/components';



export default function Cards_frame({ navigation }: any): React.ReactElement {
 
let addedCard;
const [front, setFront] = React.useState<string>('');
const [back, setBack] = React.useState<string>('');

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
      console.log("addedCard response: ", data)
    })
}
  
  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <View style={{display:'flex',flexDirection:'column',justifyContent:'center', padding:'4em'}}>
        <Input 
          label="Front of Card" 
          placeholder="Question goes here.."
          value={front}
          onChangeText={setFront}
          style={{padding:'1em'}}
          />
        <Input 
          label="Back of Card" 
          placeholder="Place answer here.." 
          value={back}
          onChangeText={setBack}
          style={{padding:'1em'}}
          />
      </View>
        <Button style={{padding:'1em'}} onPress={addCard}>Submit</Button>
    </Layout>
  )
}
