import Counter from './counter';

function App() {
    return ( <div className = "App h-screen w-screen items-center text-center bg-green-100 overflow-hidden " >
      <h1 className='mt-10 font-bold text-3xl text-green-600 '>My Counter</h1>
       <Counter />
         </div>
    );
}

export default App;