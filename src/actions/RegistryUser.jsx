import userService from "../services/userServices"


export const RegistryUser = (name,mail, password) => (dispatch) => {

    userService.registry(name,mail,password)
    .then(response=>{
      dispatch({
          type:"NEW_USER",
          payload:{
              myhttpStatus:response
              
          }
      })
  })
    .catch(error => { console.log(`Error: ${error}`) })


}