import React from "react";
import { TextBase,View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "../styles/Styles";

type Props={
    post:any;
    navigation:{
        navigate:Function;
    };
};
const Card=({post,navigation}:Props)=>{
    return(
        <TouchableOpacity
        style={Styles.card}
        onPress={()=>{
            navigation.navigate("details",{post:post.item});
        }}>
            <View>
                <View>
                    <Text>
                        <Text style={Styles.btext}>Title:</Text>
                        <Text>{post.item.title}</Text>
                    </Text>
                </View>
                <View>
                    <Text>
                        <Text style={Styles.btext}>URL:</Text>
                        <Text>{post.item.url}</Text>
                    </Text>
                </View>
                <View>
                    <Text>
                        <Text style={Styles.btext}>Created at:</Text>
                        <Text>{post.item.created_at}</Text>
                    </Text>
                </View>
                <View>
                    <Text>
                        <Text style={Styles.btext}>Author:</Text>
                        <Text>{post.item.author}</Text>
                    </Text>
                </View>
                
            </View>
        </TouchableOpacity>
    );
};
export default Card;