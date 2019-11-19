import userService from "../services/userServices"


export const LoginUser = (mail, password) => (dispatch) => {

    userService.login(mail,password)
    .then(response=>{
        localStorage.setItem("token",response)
      dispatch({
          type:"LOGIN_USER",
          payload:{
              mytoken:response
              
          }
      })
  })
    .catch(error => { console.log(`Error: ${error}`) })


}