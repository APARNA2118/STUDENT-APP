// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Addstudent from './components/Addstudent';
import Navbarst from './components/Navbarst';
//import Viewstudent from './components/Viewstudent';
import Apist from './components/Apist';
import Forms from './components/Forms';
import Loginst from './components/Loginst';

function App() {
  return (
    <div className="App">
      <Navbarst/>
      <Routes>
        <Route path ='/' element={<Loginst/>}></Route>
        <Route 
        path ='/add' 
        element={
        <Forms method='post' data={{name:"",age:"",dept:""}}/>}>
        </Route>
        {/* <Route path ='/add' element={<Forms/>}></Route> */}
        {/* <Route path='/add2' element={<Addstudent/>}></Route> */}
        {/* <Route path='/view' element={<Viewstudent/>}></Route> */}
        <Route path='/apist' element={<Apist/>}></Route>
      </Routes> 
    
    </div>
  );
}

export default App;
