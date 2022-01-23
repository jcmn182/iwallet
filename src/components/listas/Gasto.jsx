//styles
import './listas.styles.scss';
// hooks
import {useContext} from 'react'
// context 
import {StateContext} from '../../context/state.context.js'

export const Gasto = () => {
    const { retiros } = useContext(StateContext)
    return (
        <div className="istas-styles-container">
            <div className="listas-styles-laylout">
                {retiros.length>0?
                retiros?.map((task, index) => {
                    return(
                        
                        <ul key={index} className="listas-styles-ul">
                                <li>Fecha: <span>{task.registro}</span> </li>
                                <li>Motivo: <span>{task.motivo}</span></li>
                                <li>Cantidad $<span>{task.retiro}</span></li>
                        </ul>
                        
                    )
                }) :<p>Aun no hay movimientos</p>
                }
            </div>
        </div>
    )
}
