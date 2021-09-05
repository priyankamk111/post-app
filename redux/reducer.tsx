import {InitialState} from "../types/types";

const initialState: InitialState={
    posts:[],
};
const reducer=(state:InitialState=initialState,action:any)=>{
    switch(action.type){
        case "SET_POSTS":{
            const postVals=[...state.posts,...action.data];
            return{...state,posts:postVals}
            break;
        }
        default:
            return state;
            break;
    }
};
export default reducer;