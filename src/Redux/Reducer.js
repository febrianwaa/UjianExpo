import { combineReducers } from "redux"

const laporanState = {
    id:0,
    statusKejadian:"",
    waktu:0,
    alamat:0.0,
    gambar:""
}

const userData = {
    id:0,
    nama:"",
    email:"",
    phone:"",
    address:"",
    isLogin:false
}

function LaporanReducer (state=laporanState,action){
    if(action.type === "SET_LAPORAN"){
        return {
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

function UserReducer(state=userData,action){
    if(action.type==="SET_USER"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

const reducer = combineReducers({
    LaporanReducer,
    UserReducer
})

export default reducer