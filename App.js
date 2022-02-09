import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  Alert
} from "react-native";

import Snackbar from "react-native-snackbar";

const curreancyPerRupees={
  DOLLER:0.0144,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLER:0.2,
  CANDOLLER:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004
};


const App=() => {
  const [resultValue,setResultValue]=useState(0);
  const [inputValue,setInputValue]=useState(0);

  const pressEvent=(curreny)=>{
      if(!inputValue)
      {
         return Snackbar.show({
          text: "Please Enter the value",
          backgroundColor:"#6EC72D",
          textColor:"#0D0D0D",
        });
      }

        let result=parseFloat(inputValue)*curreancyPerRupees[curreny];
        setResultValue(result.toFixed(4));

  };

  return(
    <>
        <ScrollView backgroundColor="rgb(0,0,0)"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
          <SafeAreaView style={styles.continer}>
            <View style={styles.resultContiner}>
              <Text style={styles.resultText}>{resultValue}</Text>
            </View>
            <View style={styles.InputContiner} >
              <TextInput style={styles.inputTextInput}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#rgb(255,255,255)"
              value={inputValue}
              onChangeText={(inputValue)=>setInputValue(inputValue)}></TextInput>
            </View>
            <View style={styles.buttonContiner}>
              {
                Object.keys(curreancyPerRupees).map((curreny)=>(
                  <TouchableOpacity key={curreny}
                  style={styles.touchableContiner}
                  onPress={()=>pressEvent(curreny)}>
                  <Text style={styles.buttontext}>{curreny}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </SafeAreaView>
        </ScrollView>
    </>
  );
}

const styles=StyleSheet.create({
  continer:{
    flex:1,
  },
  resultContiner:{
    height:70,
    marginTop:80,
    alignContent:"center",
    alignItems:"center",
    borderBottomColor:"#FF0000",
    borderWidth:5,
    margin:20,
    padding:5,
    //backgroundColor:"#E21717",
    marginHorizontal:50,
  },
  resultText:{
    fontSize:30,
    color:"#FFFFFF",
  },
  InputContiner:{
    height:70,
    marginTop:20,
    alignContent:"center",
    alignItems:"center",
    borderBottomColor:"#FF0000",
    borderWidth:5,
    margin:20,
    //backgroundColor:"#E21717",
    marginHorizontal:50
  },
  inputTextInput:{
    fontSize:30,
    color:"#FFFFFF",
    textAlign:"center",
  },
  buttonContiner:{
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
  },
  touchableContiner:{
    height:80,
    width:"46%",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:5,
    borderColor:"#B4161B",
    margin:5,
    borderRadius:15,
    backgroundColor:"#F4BE2C",
  },
  buttontext:{
    fontSize:20,
    fontWeight:"bold"
  },
});

export default App;