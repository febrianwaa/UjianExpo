import { combineReducers } from "redux"

const laporanState = {
    id:0,
    nama:"",
    kejadian:"",
    alamat:"",
    keterangan:"",
    status:"",
    jam:"",
    image:"",
    latitude:"",
    longitude:""
}

const userData = {
    id:0,
    nama:"",
    email:"",
    phone:"",
    address:"",
    isLogin:false,
    dataUser:{}
}

const jodohData={
    id:0,
    username:"",
    nama:"",
    jenisKelamin:"",
    phone:"",
    umur:"",
    image:"",
    isLogin:false,
    dataJodoh:{}
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

function jodohReducer(state=jodohData,action){
    if(action.type==="SET_JODOH"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

const reducer = combineReducers({
    LaporanReducer,
    UserReducer,
    jodohReducer
})

export default reducer