
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { set } from "./actions";


export const SetCounter = () => {
  const countFromStore = useSelector(store => store.count)
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch()

  useEffect(()=>{setCount(countFromStore)},[countFromStore]);
  return (
    <section className="controls justify-center ">
      <form className="flex flex-col items-center justify-center"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to"className="font-bold text-xl" >Set Count</label>
        <input id="set-to" type="number"
        className="w-1/2 h-10 my-5 "
        value={count} 
        onChange={e => setCount(e.target.value)}/>
        <input type="submit" className="bg-green-500 border-green-200 border-2 h-10 rounded-xl hover:bg-green-600 hover:w-1/4 hover:h-12 active:bg-green-800 w-1/5 text-white font-medium items-center text-center" />
      </form>
    </section>
  );
};
