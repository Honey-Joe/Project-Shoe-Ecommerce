import axios from "axios";
import { USER_LOGIN_REQ, USER_LOGIN_REQ_SUCCESS } from "../Constants/User";
import { BASE_URL } from "../Constants/BASE_URL";

 export const userLoginAction = (email, password)=>async(dispatch)=>{
    
    try{
        dispatch({type:USER_LOGIN_REQ})
        const config = {
            headers:{
                'Content-Type': 'application-json'
            }
        }
        const {data} = await axios.post(BASE_URL+'/api/users/login', {email, password}, config);
        dispatch({type:USER_LOGIN_REQ_SUCCESS, payload:data})
        localStorage.setItem('userInfo', JSON.stringify(data));

    }catch(err){
        console.log(err)
    }
 }
 