//styles
import './listas.styles.scss';
// hooks
import {useContext} from 'react'
// context 
import {StateContext} from '../../context/state.context.js'

export const Ingreso = () => {
    const { ingresos } = useContext(StateContext)
    return (
    <div className="istas-styles-container">
        <div className="listas-styles-laylout">
            {ingresos.length>0?
            ingresos?.map((task, index) => {
                return(
                    
                    <ul key={index} className="listas-styles-ul">
                            <li>Fecha: <span>{task.registro}</span> </li>
                            <li>Descripción: <span>{task.motivo}</span></li>
                            <li>Cantidad $<span>{task.deposito}</span></li>
                    </ul>
                    
                )
            }) :<p>Aun no hay movimientos</p>
            }
        </div>
    </div>
    )
}
