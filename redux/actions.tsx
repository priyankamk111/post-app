import axios from "axios";
import {Dispatch} from "redux";

const getPosts=(page:number)=>(dispatch:Dispatch)=>{
    return axios
    .get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`)
    .then((res)=>{
        if (res&&res.data){
            const posts:Array<any>=res.data.hits.map((rs:any)=>{
                rs.key=(Math.random()*1000000).toString();
                return rs;
            });
            dispatch({type:"SET_POSTS",data:posts});
        }
    });
};
export {getPosts};