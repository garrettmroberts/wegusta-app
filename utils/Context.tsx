import React, { createContext, useReducer, useContext } from 'react';

import reducer from './reducer';

const initialState = {
  images: []
};

const StoreContext = createContext([initialState, function () {}]);
const { Provider } = StoreContext;

const Context = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => useContext(StoreContext);

export { Context, useStoreContext };
