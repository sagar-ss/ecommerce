import {
    loginStart,
    loginSuccess,
    loginFailure
} from "./userRedux"
import axios from 'axios'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try{
        const res = await axios.post("http://localhost:5000/api/auth/login",user)
        dispatch(loginSuccess(res.data))
        
    }catch(err){
        console.log(err)
        dispatch(loginFailure())
    }

}