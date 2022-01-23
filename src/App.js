// styles
import './App.scss';
//components
import { Navbar } from './components/Layout/Navbar.jsx'
import { Opciones } from './components/Layout/Opciones.jsx'
import { ModalList } from './components/modals/ModalList.jsx'
import { Movimientos } from './components/listas/Movimientos'
import { Gasto } from './components/listas/Gasto'
import { Ingreso } from './components/listas/Ingreso'
// react router
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
    <Navbar/>
    <Opciones/>
    <Routes>
      <Route path="/" element={<Movimientos/>} />
      <Route path="/ingresos" element={<Ingreso/>} />
      <Route path="/retiros" element={<Gasto/>} />
    </Routes>
    <ModalList/>
    </div>
  );
}

export default App;
