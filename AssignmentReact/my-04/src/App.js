import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard/Dashboard';
import StudentAdd from './Page/StudentAdd/StudentAdd';
import Studentview from './Page/Studentview/Studentview';
import Studentlist from '../src/Page/Studentlist/Studentlist';
import StudentEdit from '../src/Page/StudentEdit/StudentEdit';
import  Importlist from '../src/Page/Importlist/Importlist';
import Exportlist from '../src/Page/Exportlist/Exportlist';

function App() {
  return (
    <div className="App">
     
        <Routes >
          <Route path='/'element={<Dashboard/>}/>
          <Route path='/Studentlist'element={<Studentlist/>}/>
          <Route path='/studentview'element={<Studentview/>}/>
          <Route path='/StudentAdd'element={<StudentAdd/>}/>
          <Route path='/StudentEdit'element={<StudentEdit/>}/>
          <Route path='/Importlist'element={<Importlist/>}/>
          <Route path='/Exportlist'element={<Exportlist/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
