import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './screens/login/Login'
import Signup from './screens/signup/Signup';
import Dashboard from './screens/dashboard/Dashboard';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>

</BrowserRouter>
  );
}

export default App;
