import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import app from "./../../assets/images/app.png";
import Colors from "../../assets/Shared/Colors";

export default function Login() {
  return (
    <View>
      <Image source={app} style={styles.appImage} />
      <View style={{ backgroundColor: Colors.white, padding: 25 }}>
        <Text></Text>
        <Text>Appointment Booking App </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appImage: {
    width: 300,
    height: 500,
    objectFit: "contain",
  },
});
