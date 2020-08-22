import React, {createContext, useReducer, useCallback} from 'react';

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

export { store, AuthenProvider }
