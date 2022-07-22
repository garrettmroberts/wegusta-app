import React, { createContext, useReducer, useContext } from 'react';

import reducer from './reducer';
import initialState from './initialState';

const StoreContext = createContext([initialState, function () {}]);
const { Provider } = StoreContext;

const Context = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[state, dispatch]} {...props} />;
};

export { StoreContext };
export default Context;
