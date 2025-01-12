import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  LogBox, 
  ImageBackground
} from "react-native";
import { useState } from "react";
import SearchBar from "../component/SearchBar";
import SearchArea from "../component/SearchArea";

export default function SearchPage({ navigation }) {
  const [userSearch, setUserSearch] = useState("");

  return (
    <>
    <View style={styles.container}>
        {/* <Image
      style={styles.image}
      source={require("../assets/white-disgo.png")}
    /> */}
        {/* <View>
      <Text style={styles.locationHeaderText}>Where Would You Like To Search?</Text>
    </View> */}
        <View style={{ justifyContent: "flex-start", position: "absolute", zIndex:999, width: 360}}>
        <SearchArea />
          <SearchBar setUserSearch={setUserSearch} userSearch={userSearch} />
        </View>
        <View style={styles.headerWrap}>
          <Text style={styles.headerText}>What are you in the mood for?</Text>
        </View>
        <View style={{alignItems: "center"}}>
        <Image
      source={require("../assets/donut-lady.png")} style={{width: 335, height:294}} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "#3AD6A7",
    paddingBottom: 0,
  },
  image: {
    width: 70,
    height: 78,
    objectFit: "cover"
  },
  headerWrap: {
    alignItems: "center",
    paddingTop:20,
    paddingBottom: 10,
    marginTop: 170,
  },
  locationHeaderText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },  
  headerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    width: 260,
  },
  searchButton: {
    width: 139,
    height: 57,
    backgroundColor: "#4C5B61",
    borderRadius: 29,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});