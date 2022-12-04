import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/dashboard';
import Login from './components/Login/Login';
import AddProperty from "./components/AddProperty/AddProperty";
import PrivateRouter from './components/Dashboard/PrivateRouter';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>

          <Route path='/add-property' element={
            <PrivateRouter>
          <AddProperty/>
          </PrivateRouter>}
          />

         <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={
            <PrivateRouter>
          <Dashboard/>
          </PrivateRouter>}
          >
          
          </Route>
        </Routes>
      </BrowserRouter>
    
  </>
  );
}

export default App;
