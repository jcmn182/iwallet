// styles
import './modal-list.styles.scss'
// hooks
import {useState} from 'react'

export const ModalList = () => {
    const [showModal, setShowModal] = useState()
    const [handleOptions, setHandleOptions] = useState(true)
    
    const handleShowModal = () => {
        setShowModal(showModal?false:true)
    }
    const handleShowOptions = () =>{
        setHandleOptions(handleOptions?false:true)
    }

    return (
    
    <>
        <div className="modal-list-styles-lay-out" onClick={()=>handleShowModal()}>
            <button className="btn btn-primary">
                Realiza un movimiento
            </button>
        </div>
        
        <div className={`modal-list-styles-modal ${showModal?"show-modal":"hide-modal"}`}>
            <div className="modal-list-styles-modal-content 
                modal-list-styles-modal-content-animate">
                    <div className="modal-list-styles-buttons">
                        <button className={ !handleOptions ? 'modal-list-styles-inactive' : 'modal-list-styles-active'} 
                        onClick={()=>handleShowOptions()}>Agregar fondos</button> 
                        <button className={ handleOptions ? 'modal-list-styles-inactive' : 'modal-list-styles-active'} 
                        onClick={()=>handleShowOptions()}>Retirar dinero</button>
                    </div>
                <span onClick={()=>handleShowModal()} 
                className="modal-list-styles-close-btn"
                >&times;</span>
                    {handleOptions?<>
                    <div className="modal-list-styles-inputs-container">
                        <label>Descripción</label>
                        <input type="text" placeholder="ingrese descripción"
                        className="modal-list-styles-inputs"
                        />
                        <label>Cantidad</label>
                        <input type="number" name="subject" placeholder="ingrese cantidad"
                        className="modal-list-styles-inputs"
                        />
                        <button className="btn btn-primary modal-list-styles-btn"> Depositar </button>
                    </div>
                    </>:<>
                    <div className="modal-list-styles-inputs-container">
                        <label>Motivo</label>
                        <input type="text" placeholder="ingrese motivo"
                        className="modal-list-styles-inputs"
                        />
                        <label>Cantidad</label>
                        <input type="number" name="subject" placeholder="ingrese cantidad"
                        className="modal-list-styles-inputs"
                        />
                        <button className="btn btn-primary modal-list-styles-btn"> Retirar </button>
                    </div>
                    </>}
                </div>  
            </div>
        

    </>
    
)
}
