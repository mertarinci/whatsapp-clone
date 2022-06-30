import { Button, StyleSheet, Text, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';





export default function App({ navigation }) {


  const handleLogOut = () => {

    signOut(auth)
    .then(() => {
      console.log("User signed out!")
      navigation.navigate("Login")
      alert("Çıkış yapıldı. Yine bekleriz.")
    }).catch(err => console.log(err.message))


  }



  return (

        <View style={styles.container}>
        <Text >HomeScreen</Text>
        <Button onPress={() => navigation.navigate("Login")} title='Login'></Button>
        <Button onPress={() => navigation.navigate("Register")} title='Register'></Button>
        <Button onPress={handleLogOut} title='Sign Out'></Button>
        </View>
        
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
