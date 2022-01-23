import {useReducer} from 'react';
import {stateReducer} from './state.reducer'
import {StateContext} from './state.context.js';


const StateAction = (props) => {

    const initialState = {
        list:[],
        ingresos:[],
        retiros:[],
        total:0
    }
    
    const [state, dispatch] = useReducer(stateReducer,initialState);
    
    const registros = (ingreso) => {
        dispatch({
            type: "ADD",
            payload: ingreso,
          })
    }

    const addretiro = (retiro) => {
        dispatch({
            type: "DELETE",
            payload: retiro,
          })
    }


    const getTotal = (total) => {
        dispatch({
            type: "TOTAL",
            payload: total,
          })
    }
    
    return(

        <StateContext.Provider value = {{
            list:state.list,
            total:state.total,
            ingresos:state.ingresos,
            retiros:state.retiros,
            registros,
            addretiro,
            getTotal
        }}>
           {props.children}
        </StateContext.Provider>
    )
    
    }
    
    export default StateAction