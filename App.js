/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useState } from "react";
 import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
 
 const FlexDirectionBasics = () => {
 
   return (
    <View style={{ flex:1, flexDirection: "column" }}>
      <View style={{ flex:1, flexDirection: "row" }}>
        <View style={{flex:1, backgroundColor: "#A0D7D9", flexDirection:"row",justifyContent:"flex-start"}}>
          <View style={{width: 50, height:50, backgroundColor: "#AE99BF" }}></View>
        </View>
        <View style={{flex:1, backgroundColor: "#FBE7A3", flexDirection:"row" ,justifyContent:"flex-end"}}>
          <View style={{width: 50, height:50, backgroundColor: "#AE99BF"}}></View>
        </View>
      </View>

      <View style={{ flex:1, flexDirection: "row" }}>
        <View style={{flex:1, backgroundColor: "#F4CBA1", flexDirection:"column-reverse",justifyContent:"flex-start"}}>
          <View style={{width: 50, height:50, backgroundColor: "#AE99BF"}}></View>
        </View>
        <View style={{flex:1, backgroundColor: "#F8B9C5", flexDirection:"column-reverse",justifyContent:"flex-start"}}>
          <View style={{ backgroundColor: "#F8B9C5", flexDirection:"row",justifyContent:"flex-end"}}>
            <View style={{width: 50, height:50, backgroundColor: "#AE99BF"}}></View>
          </View>
        </View>
      </View>
    </View>
   );
    
    //  <PreviewLayout
    //    label="flexDirection"
    //    values={["column", "row", "row-reverse", "column-reverse"]}
    //    selectedValue={flexDirection}
    //    setSelectedValue={setflexDirection}
    //  >
    //    <View
    //      style={[styles.box, { backgroundColor: "powderblue" }]}
    //    />
    //    <View
    //      style={[styles.box, { backgroundColor: "skyblue" }]}
    //    />
    //    <View
    //      style={[styles.box, { backgroundColor: "steelblue" }]}
    //    />
    //  </PreviewLayout>

 };
 
 const PreviewLayout = ({
   label,
   children,
   values,
   selectedValue,
   setSelectedValue,
 }) => (
   <View style={{ padding: 10, flex: 1 }}>
     <Text style={styles.label}>{label}</Text>
     <View style={styles.row}>
       {values.map((value) => (
         <TouchableOpacity
           key={value}
           onPress={() => setSelectedValue(value)}
           style={[
             styles.button,
             selectedValue === value && styles.selected,
           ]}
         >
           <Text
             style={[
               styles.buttonLabel,
               selectedValue === value && styles.selectedLabel,
             ]}
           >
             {value}
           </Text>
         </TouchableOpacity>
       ))}
     </View>
     <View style={[styles.container, { [label]: selectedValue }]}>
       {children}
     </View>
   </View>
 );
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: 8,
     backgroundColor: "aliceblue",
   },
   box: {
     width: 50,
     height: 50,
   },
   row: {
     flexDirection: "row",
     flexWrap: "wrap",
   },
   button: {
     paddingHorizontal: 8,
     paddingVertical: 6,
     borderRadius: 4,
     backgroundColor: "oldlace",
     alignSelf: "flex-start",
     marginHorizontal: "1%",
     marginBottom: 6,
     minWidth: "48%",
     textAlign: "center",
   },
   selected: {
     backgroundColor: "coral",
     borderWidth: 0,
   },
   buttonLabel: {
     fontSize: 12,
     fontWeight: "500",
     color: "coral",
   },
   selectedLabel: {
     color: "white",
   },
   label: {
     textAlign: "center",
     marginBottom: 10,
     fontSize: 24,
   },
 });
 
 export default FlexDirectionBasics;