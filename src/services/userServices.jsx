import axios from 'axios'

class userServices {
   
      
   async registry(myname, mymail, mypassword){
       const result = await axios.post("http://localhost:8080/api/v1/registry",{
           name:myname,
           mail:mymail,
           password:mypassword
       })
       return result;
   }
  
   async login(mymail, mypassword ){
      
       const {data} = await axios.post("http://localhost:8080/api/v1/login/auth",{
           mail:mymail,
           password:mypassword
       })
       
       return data;
   }
}

export default new userServices();