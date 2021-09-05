import React from 'react';
import {Text, View } from 'react-native';
import {ScrollView} from "react-native-gesture-handler";
import Styles from "../styles/Styles";
type Props={
    route:any;
};

const Details = ({route}:Props)=>{
const {post}=route.params;
   return(
       <ScrollView>
           <View style={Styles.container}>
               <Text style={Styles.card}>
                   Details Screen {JSON.stringify(post,null,10)}
               </Text>
           </View>
       </ScrollView>
   )
}
export default Details;