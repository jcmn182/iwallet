import {ADD,DELETE,TOTAL} from './state.types.js'

export const stateReducer = (state, action) => {
    const {payload,type} = action
    switch (type) {
      case ADD:
        return { ...state, list: [...state.list, { ...payload, deposito:Number(payload.deposito) }], ingresos:[...state.ingresos, { ...payload, deposito:Number(payload.deposito) }] };
      case DELETE:
        return { ...state, list: [...state.list, { ...payload, retiro:Number(payload.retiro) }], retiros:[...state.retiros, { ...payload, retiro:Number(payload.retiro) }] };
        case TOTAL:
        return { ...state, total:payload};
      default:
        return state;
    }
  };