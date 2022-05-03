import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  unreadNotifications: true,
  notifications: [
    {
      users: [
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Sophia', lastName: 'Coleman' },
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Jax', lastName: 'Coleman' },
        {letter: 'A', firstName: 'ReallyLongName', lastName: 'Alvares'},
        {letter: 'J', firstName: 'Julio', lastName: 'Alvares'}
      ],
      unread: true,
      lastUpdated: new Date()
    },
    {
      users: [
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' }
      ],
      unread: true,
      lastUpdated: new Date()
    },
    {
      users: [
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
        {letter: 'A', firstName: 'Julio', lastName: 'Alvares'}
      ],
      unread: true,
      lastUpdated: new Date()
    },
    {
      users: [
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Rodrigo', lastName: 'Coleman' },
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Guadalupe', lastName: 'Coleman' },
        {letter: 'A', firstName: 'Julio', lastName: 'Alvares'}
      ],
      unread: false,
      lastUpdated: new Date()
    },
    {
      users: [
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' },
        {letter: 'A', firstName: 'Julio', lastName: 'Alvares'}
      ],
      unread: false,
      lastUpdated: new Date()
    },
    {
      users: [
        {image: { uri: 'https://picsum.photos/200' }, firstName: 'Aaron', lastName: 'Coleman' }
      ],
      unread: false,
      lastUpdated: new Date()
    }
  ],
  pendingWorkflow: {
    selectedUsers: []
  },
  verificationId: null
};

const StoreContext = createContext([initialState, function() {}]);
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type){
  case 'signIn':
    return {
      ...state,
      
    } 
  case 'clearNotifications':
    return {
      ...state,
      unreadNotifications: false
    };
  case 'updatePendingWorkflowSelectedUsers':
    return {
      ...state,
      pendingWorkflow: {
        selectedUsers: action.payload
      }
    };
  default:
    console.log('STATE in reducer: ', state);
    return state;
  }
};

const Context = ({...props}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => useContext(StoreContext);

export { Context, useStoreContext };
