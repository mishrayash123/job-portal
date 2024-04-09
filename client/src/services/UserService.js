import axios from "axios";

const USERS_REST_API_URL ='https://192.168.1.244.9092/auth/users';

class UserService{
    getAllUsers(){
        console.log("inside getAllUsers");
        return axios.get(USERS_REST_API_URL);
    }
    addNewUser(userObj){
        console.log("Inside addNewUser:"+JSON.stringify(userObj));
        return axios.post(USERS_REST_API_URL,userObj);
    }
}
export default new UserService();