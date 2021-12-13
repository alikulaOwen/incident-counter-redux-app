import { DECREMENT, INCREMENT, SET } from "./actions";

const initState ={
    count: 0
}

export const reducer =(state = initState,{type, payload}) =>{
    switch(type){
        case INCREMENT:
            return {count: state.count + 1}

        case DECREMENT:
            return {count: state.count - 1}


        case SET:
            return {count: parseInt(payload, 10)}

      
        default:
            return state
    }
   
};