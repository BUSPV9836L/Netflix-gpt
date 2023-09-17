// import { getAuth } from "firebase/auth";
export const validatesigninForm = (email,password) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    let message =""
    if(!emailRegex){
        message="Please enter a valid email"
    }
    if(!passwordRegex){
        message="Please enter a valid password"
    }
    if(!emailRegex && !passwordRegex){
        message="Please enter a valid email and password"
    }
    if(message){
        return message
    }
    return null
}
export const validatesignupForm = (email,password,name) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const nameRegex = /^[a-zA-Z\s]+$/.test(name);
    let message=""
    if(!nameRegex){
        message="Please enter a valid name"
    }
    if(!emailRegex){
        message="Please enter a valid email"
    }
    if(!passwordRegex){
        message="Please enter a valid password"
    }
    if(!emailRegex && !passwordRegex && !nameRegex){
        message="Please enter a valid name, email and password"
    }
    if(message){
        return message
    }
    return null
}
// export const auth=getAuth()