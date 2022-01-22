//styles
import "./opciones.styles.scss"
// react router
import { NavLink } from "react-router-dom";

export const Opciones = () => {
    return (
        <div className="opciones-styles-menu">
            <NavLink 
            className={({ isActive }) => (isActive ? 'opciones-styles-active' : 'opciones-styles-inactive')} 
            to="/movimientos"> Todos </NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? 'opciones-styles-active' : 'opciones-styles-inactive')} 
             to="/ingresos">Ingresos</NavLink>
            <NavLink 
            className={({ isActive }) => (isActive ? 'opciones-styles-active' : 'opciones-styles-inactive')}
            to="/retiros">Retiros</NavLink>
        </div>
    )
}
