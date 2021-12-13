export const INCREMENT ="INCREMENT";
export const DECREMENT ="DECREMENT";
export const SET ="SET";

export const increment = () => ({type: INCREMENT});
export const set = (value) => ({type: SET, payload: value});
export const decrement = () => ({type: DECREMENT});