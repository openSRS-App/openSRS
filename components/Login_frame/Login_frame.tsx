import React from 'react'
import { View, Image } from 'react-native'
import { Layout, Text, Button } from '@ui-kitten/components';
import * as Google from "expo-google-app-auth"

export default class Login_frame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        clientId: `77252364543-rqn1r4h0dp5ijep0bks1o14sathu6l86.apps.googleusercontent.com`,
        androidClientId: `77252364543-rqn1r4h0dp5ijep0bks1o14sathu6l86.apps.googleusercontent.com`,
        iosClientId: `77252364543-0mfli4nm75vplnf7c6mp6fkdnfrt50mb.apps.googleusercontent.com`,
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

render(){
    return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{margin: 1}} category='h1'>openSRS</Text>

            <Image style={{width: 100, height: 100}}  source={require('./welcome.png')} />

            <View style={styles.container}>
              {this.state.signedIn ? (
                <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
              ) : (
                <LoginPage signIn={this.signIn} />
              )}
            </View>
      </ Layout>
    )
}
}
const LoginPage = props => {
  return (
    <View>
      <Button title="Sign in with Google" onPress={() => props.signIn()} >Sign in with Google</Button>
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
}
