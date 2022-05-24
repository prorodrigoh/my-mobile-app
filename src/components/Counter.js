import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";


export default function Counter (){
    const [count, setCount] = useState(0)
    return (
        <View style={styles.counterContainer}>
            <Text>You clicked the button {count} times</Text>
            <Button title='-' onPress={()=> count>0?setCount(count - 1):0}/>
            <Button title='Reset' onPress={()=>setCount(0)}/>
            <Button title='+' onPress={()=>setCount(count + 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        width: '80%',
        backgroundColor: 'beige',
        alignItems: 'center',
        padding: 14,
    }
})