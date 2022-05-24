import { Image, View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Hero () {
    return(
        <Image style={{width: '80%', height: '20%'}} 
        source={{ uri:'https://bocacode.com/assets/images/2021.7.27-BocaCode-Web-53.png'}
        }/>
    )
}
