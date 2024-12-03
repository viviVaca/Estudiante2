import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy Andres Morquecho</Text>

        <Text>Productos:</Text>
        <Text style={styles.producto1}>Salsa de tomate</Text>
        <Text style={styles.producto2}> Atún</Text>
        <Text style={styles.producto3}>Aceite</Text>

        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeAndres');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center'
    },

    producto1:{
        backgroundColor : 'lightblue'
    },

    producto2:{
        backgroundColor : 'lightgreen'
    },

    producto3:{
        backgroundColor : 'lightyellow'
    }    

  });