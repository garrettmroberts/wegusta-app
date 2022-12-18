import React, { createContext, useReducer, useContext } from 'react';

import reducer from './reducer';
import initialState, { InitialStateType } from './initialState';

type AppProviderProps = {
  children: any;
}

const AppContext = createContext<{
  context: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  context: initialState,
  dispatch: () => null
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [context, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ context, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
