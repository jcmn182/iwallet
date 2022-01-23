//styles
import './navbar.styles.scss';
// hooks
import {useContext} from 'react'
// context 
import {StateContext} from '../../context/state.context.js'

export const Navbar = () => {
    //hooks
    const { total } = useContext(StateContext);
    
    return (
        <nav className="navbar-styles-nav">
            <span>Mi wallet</span>
            <span className="navbar-styles-text-size-s">{total!==0?<>Tu saldo es de $ {total}</>:<>Bienvenido</>}</span>
        </nav>
    )
}
