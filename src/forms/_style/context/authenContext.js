import React, {createContext, useReducer, useContext} from 'react';

// info when using context with import store: const context = useContext(store); -> return {store: {...}, dispatch: {...}}
export const initialState = {
  title: 'Auth0 Online Meetup',
  date: Date(),
  attendees: ['Bob', 'Jessy', 'Christina', 'Adam']
};

const store = createContext(initialState);
const { Provider } = store;

const AuthenProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'update_authen':
        const newState = {...state, updatedAuthen: 'clark'}
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>; 
}

function useAuthenContext() {
  const context = useContext(store);
  if(!context) {
    throw new Error("Authentication Context errors")
  }
  return context;
}

export { useAuthenContext, AuthenProvider, store }
