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
       console.log("Valor de las variables que paso")
       console.log("mail:" + mymail)
       console.log("pass:" + mypassword)
       const {data} = await axios.post("http://localhost:8080/api/v1/users/login/auth",{
           mail:mymail,
           password:mypassword
       })
       console.log(data)
       return data;
   }
}

export default new userServices();