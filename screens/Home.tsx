import React,{useEffect,useState} from 'react';
import {Text, View,Button,ActivityIndicator,FlatList } from 'react-native';
import {connect} from "react-redux";
import Card from "../components/Card";
import {getPosts} from "../redux/actions";
import Styles from "../styles/Styles";

type Props={
    getPosts:Function;
    posts:any;
    navigation:{
        navigate:Function;
    };
};

const Home = ({getPosts,posts,navigation}:Props)=>{
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
      getPost(page);
  },[page]);
  useEffect(()=>{
      const interval=setInterval(async()=>{
          setPage(page+1);
      },10000);
      return()=>{
          clearInterval(interval);
      };
  },[page]);
  const getPost=(pageNum:number)=>{
      getPosts(pageNum);
      setLoading(false);
  };
  return(
      <View style={Styles.container}>
          <View style={Styles.title}>
              <Text style={Styles.titleText}>Posts</Text>
          </View>
          <FlatList
                data={posts}
                keyExtractor={(post:any)=>post.key}
                renderItem={(postData)=>(
                    <Card navigation={navigation} post={postData}/>
                )}
                ListEmptyComponent={<Text>No Posts found</Text>}
                onEndReached={()=>{
                    setLoading(true);
                    setPage(page+1);
                }}
                onEndReachedThreshold={10}
                refreshing={loading}/>
                {loading && <ActivityIndicator size="large" color="black"/>}
      </View>
  );
};
const mapStateToProps=(state:any)=>({posts:state.reducer.posts});
export default connect(mapStateToProps,{getPosts})(Home);