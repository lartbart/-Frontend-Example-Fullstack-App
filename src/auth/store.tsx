import createStore from 'react-auth-kit/createStore';

export const store = createStore<object>({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });