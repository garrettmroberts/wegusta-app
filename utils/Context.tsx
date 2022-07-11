import React, { createContext, useReducer, useContext } from 'react';

const initialState = {};

const StoreContext = createContext([initialState, function () {}]);
const { Provider } = StoreContext;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      console.log('STATE in reducer: ', state);
      return state;
  }
};

const Context = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => useContext(StoreContext);

export { Context, useStoreContext };
