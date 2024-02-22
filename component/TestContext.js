import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import NavBar from "./NavBar";

export default function TestContext() {
  const { user: user } = useContext(UserContext);
  return (
    
    <>
      <View>
        <Text>Hello!</Text>
      </View>
    </>
  );
}
