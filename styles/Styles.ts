import {StyleSheet} from "react-native";

const Styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    title:{
        alignItems:"center",
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold",
    },
    card:{
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        elevation:1,
        marginVertical:6,
        borderRadius:5,
    },
    btext:{
           color:"black",
           fontWeight:"bold",
    }
});
export default Styles;