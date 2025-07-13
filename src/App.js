import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './screens/login/Login'
import Signup from './screens/signup/Signup';
import Dashboard from './screens/dashboard/Dashboard';
import RouterApp from './config/RouterApp/Router';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <RouterApp />
    </Provider>
  );
}

export default App;
