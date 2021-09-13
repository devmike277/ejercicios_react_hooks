import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import FetchData from './components/FetchData';
import ComponentA from './components/ComponentA';
import React from 'react'
import UseReducer from './components/UseReducer';
import DataFetching from './components/DataFetching';

//export const MyContext = React.createContext()

function App() {
  return (
    <div className="container">
      {/* <Counter/>
      <CounterHook/>
      <FetchData/> */}
      {/* <MyContext.Provider value="This data is with context hook">
      <ComponentA/>
      </MyContext.Provider> */}
      {/* <UseReducer/> */}
      <DataFetching/>
    </div>
  );
}

export default App;
