import React, { createContext, useReducer, useContext } from 'react';

const initialState = [
  {
    text: 'Hello Native'
  },
  function() {}
];

const StoreContext = createContext(initialState);
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type){
  default:
    console.log('STATE in reducer: ', state);
    return state;
  }
};

const Context = ({...props}) => {
  const [state, dispatch] = useReducer(reducer);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => useContext(StoreContext);

export { Context, useStoreContext };
