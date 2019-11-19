import axios from 'axios'

class userServices {
  
   async registry(myname, mymail, mypassword){
       const result = await axios.post("http://localhost:8080/api/v1/users/registry",{
           name:myname,
           mail:mymail,
           password:mypassword
       })
       return result;
   }
  
   async login(mymail, mypassword ){
       const token = await axios.post("http://localhost:8080/api/v1/users/login/auth",{
           mail:mymail,
           password:mypassword
       })
   }
}

export default new userServices();