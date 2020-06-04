import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Avatar, Layout, Card, Text, Button } from '@ui-kitten/components';

const Account_frame = ({ navigation }: any) => (
  <Layout style={styles.container} level='1'>

    <Button onPress={() => navigation.navigate('Menu')}>
      Menu
    </Button>
    <Avatar 
      style={styles.avatar} 
      size='giant' 
      source={require('../../public/brain.png')}
      ImageComponent={ImageBackground}
    />

    <Card style={styles.card} status='primary'>
      <Text>Username</Text>
    </Card>

    <Card style={styles.card} status='basic'>
      <Text>Email</Text>
    </Card>

    <Button>
      Logout
    </Button>

</Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 8,
  },
  avatar: {
    margin: 8,
  },
  card: {
    margin: 2,
  },
});

export default Account_frame;