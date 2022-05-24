import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";


export default function Counter (){
    // const [counter, setCounter] = useState(0)
    return (
        <View style={styles.counterContainer}>
            <Text>You clicked the button 0 times</Text>
            <Button title='Click to increase counter' 
                // onPress={setCounter(counter + 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        width: '80vw',
        backgroundColor: 'beige',
        alignItems: 'center',
        padding: 14,
    }
})