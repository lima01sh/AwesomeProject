/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import { Text,TextInput, View, Picker, Button } from 'react-native';
import { color } from "react-native-elements/dist/helpers";
// import { Button } from "react-native";
// import { StyleSheet, Text, TouchableOpacity, TextInput, View } from "react-native";




const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [selectedValue, setSelectedValue] = useState("plus");

  const calculate = () => {
    if(selectedValue == 'plus') {
      alert(parseFloat(a)+parseFloat(b))
    } else if(selectedValue == 'minus') {
      alert(parseFloat(a)-parseFloat(b))
    } else if(selectedValue == 'multiple') {
      alert(parseFloat(a)*parseFloat(b))
    } else if(selectedValue == 'divide') {
      alert(parseFloat(a)/parseFloat(b))
    }
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{
        height: 60, 
        borderRadius:5,
        backgroundColor: '#ff6347', 
        marginBottom:20,
        fontSize:40,
        padding:5,
        textAlign:"center"
        }}>CALCULATOR</Text>
      <TextInput
        style={{ height: 40, borderRadius:5, borderColor: "#000000", borderWidth: 1 }}
        placeholder="Input Number"
        onChangeText={text => setA(text)}
      />
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="+" value="plus" />
        <Picker.Item label="-" value="minus" />
        <Picker.Item label="x" value="multiple" />
        <Picker.Item label="/" value="divide" />
      </Picker>
      <TextInput
        style={{ height: 40,borderRadius:5, borderColor: "#000000", borderWidth: 1 , marginBottom:20 }}
        placeholder="Input Number"
        onChangeText={text => setB(text)}
      />
      <Button title="Click me!!!" color="#ff6347" onPress={calculate} />
    </View>
  );
}


// const FlexDirectionBasics = () => {
//   const [fname, setFname] = useState('');
//   const [lname, setLname] = useState('');

//   // ประกาศตัวแปลที่เป็น Function
//   const alertText = () => {
//     alert(fname + lname)
//   }

//   return (
//     <View style={{ flex: 1, flexDirection: "column" }}>

//       <View style={{ flex: 1, flexDirection: "row" }}>
//         <View style={{ flex: 1, backgroundColor: "#A0D7D9", flexDirection: "row", justifyContent: "flex-start" }}>
//           <View style={{ width: 50, height: 50, backgroundColor: "#AE99BF" }}></View>
//           <TextInput editable='true' style={{ height: 40 }} ></TextInput>
//         </View>
//         <View style={{ flex: 1, backgroundColor: "#FBE7A3", flexDirection: "row", justifyContent: "flex-end" }}>
//           <View style={{ width: 50, height: 50, backgroundColor: "#AE99BF" }}></View>
//         </View>
//       </View>

//       <View style={{ flex: 1, flexDirection: "row" }}>
//         <View style={{ flex: 1, backgroundColor: "#F4CBA1", flexDirection: "column-reverse", justifyContent: "flex-start" }}>
//           <View style={{ width: 50, height: 50, backgroundColor: "#AE99BF" }}></View>
//         </View>
//         <View style={{ flex: 1, backgroundColor: "#F8B9C5", flexDirection: "column-reverse", justifyContent: "flex-start" }}>
//           <View style={{ backgroundColor: "#F8B9C5", flexDirection: "row", justifyContent: "flex-end" }}>
//             <View style={{ width: 50, height: 50, backgroundColor: "#AE99BF" }}></View>
//           </View>
//         </View>
//       </View>
//     </View>




//   );

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

// };

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{ padding: 10, flex: 1 }}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map((value) => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[
//             styles.button,
//             selectedValue === value && styles.selected,
//           ]}
//         >
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}
//           >
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, { [label]: selectedValue }]}>
//       {children}
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: "aliceblue",
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: "oldlace",
//     alignSelf: "flex-start",
//     marginHorizontal: "1%",
//     marginBottom: 6,
//     minWidth: "48%",
//     textAlign: "center",
//   },
//   selected: {
//     backgroundColor: "coral",
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//     color: "coral",
//   },
//   selectedLabel: {
//     color: "white",
//   },
//   label: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });

export default Calculator;