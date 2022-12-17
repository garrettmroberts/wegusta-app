import React, { createContext, useReducer, useContext } from 'react';

import reducer from './reducer';
import initialState, { InitialStateType } from './initialState';

type AppProviderProps = {
  children: any;
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
