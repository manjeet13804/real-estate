import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/dashboard';
import Login from './components/Login/Login';
// import AddProperty from "./components/AddProperty/AddProperty";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
           {/* <Route path='/add-property' element={<AddProperty/>}/> */}
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    
  </>
  );
}

export default App;
