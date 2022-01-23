//styles
import './listas.styles.scss';
// hooks
import {useContext} from 'react'
// context 
import {StateContext} from '../../context/state.context.js'

export const Movimientos = () => {
    const { list } = useContext(StateContext)
    
    return (
     <div className="istas-styles-container">
            <div className="listas-styles-laylout">
                {list.length>0?
                list?.map((task, index) => {
                    return(
                        <ul className="listas-styles-ul" key={index}>
                                <li>Fecha: <span>{task.registro}</span> </li>
                                <li>Motivo: <span>{task.motivo}</span></li>
                                <li>Tipo: <span>{task.type}</span></li>
                        </ul>   
                    )
                }) :<p>Aun no hay movimientos</p>
                }
            </div>
    </div>
    )
}
