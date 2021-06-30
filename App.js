/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';

 import {SafeAreaView, Text, TextInput, View,ScrollView
        } from 'react-native';
 import { Input, Button , Image} from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome';
 
import firestore from '@react-native-firebase/firestore';



 //สร้าง component
 const App: () => Node = () => {

  firestore().collection('Users').doc('ABC').get().then((user) =>{
    console.log(user)
  });


   return (
     <SafeAreaView>
      
       <View>
          <Text style={{ fontSize:20 , textAlign:'center'}}>
            Lima Shriphakdee
            </Text>

          <Input placeholder = 'Hint'/>

          <TextInput 
            style = {{backgroundColor : '#DDDDDD'}}
            keyboardType = 'phone-pad'
            ></TextInput>

          <Button
            title="Outline button"
            type="outline"
          />

          <Button
            icon={
            <Icon
            name="arrow-right"
            size={30}
            color="white"
            />}

            iconRight
            title="Button with icon component"
          />
        </View>


        <ScrollView>
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
            <Image 
            source={{ uri: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png'}}
            style= {{ width:200,height:200}}
            />
        </ScrollView>


     </SafeAreaView>
     
   );
 };
 
 export default App;
