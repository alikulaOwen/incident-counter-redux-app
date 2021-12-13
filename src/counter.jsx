import { useDispatch,useSelector } from "react-redux";
import { increment , decrement, set} from "./actions";
import { SetCounter } from "./setCounter";


export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector(state => state.count);
  const dispatch = useDispatch()

  return (
    <main className="Counter bg-green-50 rounded-xl h-auto border-green-400 border-2 font-semibold mt-7 m-auto p-4 w-97 shadow-green-400 shadow-2xl">
      <h1 className="text-center my-8">Days Since Last {incident}</h1>
      <p className="count text-green-800 text-center my-8 text-9xl">{count}</p>
      <section className="controls flex justify-between mb-8">
        <button onClick= {()=>dispatch(increment())} 
        className="bg-green-500 border-green-200 border-2 h-10 rounded-xl hover:bg-green-600 hover:w-1/4 hover:h-12 active:bg-green-800 w-1/5 text-white font-medium items-center text-center">Increment</button>
        <button  onClick= {()=>dispatch(set(0))} 
        className="bg-green-500 border-green-200 border-2 h-10 rounded-xl hover:bg-green-600 hover:w-1/4 hover:h-12 active:bg-green-800 w-1/5 text-white font-medium items-center text-center">Reset</button>
        <button  onClick= {()=>dispatch(decrement())} 
        className="bg-green-500 border-green-200 border-2 h-10 rounded-xl hover:bg-green-600 hover:w-1/4 hover:h-12 active:bg-green-800 w-1/5 text-white font-medium items-center text-center">Decrement</button>

      </section>
      <SetCounter/>
    </main>
  );
};

export default Counter;