// styles
import './modal-list.styles.scss'
// hooks
import {useState, useContext} from 'react'
//context
import {StateContext} from '../../context/state.context.js'

export const ModalList = () => {

    //hooks
    const [showModal, setShowModal] = useState();
    const [showErrorSaldo, setShowErrorSaldo] = useState(false)
    
    const [handleOptions, setHandleOptions] = useState(true)
    const {  registros,  getTotal, addretiro, total } = useContext(StateContext)

    //handle functions
    const handleShowModal = () => {
        setShowModal(showModal?false:true)
    };
    const handleShowOptions = () =>{
        setHandleOptions(handleOptions?false:true)
    };

    //getting the current date
    const currentDate = () => {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const todayHour = new Date();
        const time = todayHour.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const register =  date+' '+time;
        return register
    };
    // getting object data from forms
    const handleSubmitdata = (e) =>{
        e.preventDefault();
        const subData = new FormData(e.target);
        const data = Object.fromEntries(subData.entries());
        return data
    };

    // handle data from submits
    const handleSubmiRetiros = (e) =>{
        const {retiro} = handleSubmitdata(e)
        const retiroNumber = Number(retiro)
        if(retiroNumber>total){
            setShowErrorSaldo(true)
        }
        else{
        getTotal(total-retiroNumber)
        setShowErrorSaldo(false)
        }
          // array retiros' object
        const dataRetiro = {
            ...handleSubmitdata(e),
            type: "retiro",
            registro:currentDate()
        }
        addretiro(dataRetiro)
    };

    const handleSubmitDepositos = (e) =>{
        const {deposito} = handleSubmitdata(e);
        const depositoNumber = Number(deposito)
        getTotal(depositoNumber+total)
    // array ingresos' object
    const dataIngreso = {
        ...handleSubmitdata(e),
        type: "ingreso",
        registro:currentDate()
        }
        registros(dataIngreso)
    };

  

    return (
    
    <>
        <div className="modal-list-styles-lay-out">
            <button className="btn btn-primary" onClick={()=>handleShowModal()}>
                Realiza un movimiento
            </button>
        </div>
        
        <div className={`modal-list-styles-modal ${showModal?"show-modal":"hide-modal"}`}>
            <div className="modal-list-styles-modal-content 
                modal-list-styles-modal-content-animate">
                    <div className="modal-list-styles-buttons">
                        <button className={ !handleOptions ? 'modal-list-styles-inactive' : 'modal-list-styles-active'} 
                        onClick={()=>handleShowOptions()}>Agregar fondos</button> 
                        {total===0?null:
                        <button className={ handleOptions ? 'modal-list-styles-inactive' : 'modal-list-styles-active'} 
                        onClick={()=>handleShowOptions()}>Retirar dinero</button>}
                    </div>
                <span onClick={()=>handleShowModal()} 
                className="modal-list-styles-close-btn"
                >&times;</span>
                    {handleOptions?
                    <>
                            <form onSubmit={handleSubmitDepositos}
                            className="modal-list-styles-inputs-container"
                            >
                                <label>Descripción</label>
                                <input type="text" name="motivo" placeholder="ingrese descripción"
                                className="modal-list-styles-inputs" required
                                />
                                <label>Cantidad</label>
                                <input type="number" name="deposito" placeholder="ingrese cantidad"
                                className="modal-list-styles-inputs" required
                                />
                                <button className="btn btn-primary modal-list-styles-btn"> Depositar </button>
                            </form>
                        </>:<>
                       
                           
                            <form onSubmit={handleSubmiRetiros}
                            className="modal-list-styles-inputs-container"
                            >
                                <label>Motivo</label>
                                <input type="text" name="motivo" placeholder="ingrese motivo"
                                className="modal-list-styles-inputs" required
                                />
                                <label>Cantidad</label>
                                <input type="number" name="retiro" placeholder="ingrese cantidad"
                                className="modal-list-styles-inputs" required
                                />
                                {showErrorSaldo?
                                <span className="modal-list-styles-show-error">
                                    La cantidad es mayor al saldo, ingresa otra cantidad
                                </span>:null}
                                <button className="btn btn-primary modal-list-styles-btn"> Retirar </button>
                            </form>
                        
                    </>
                    }
                </div>  
            </div>
        
    </>
    
)
}
