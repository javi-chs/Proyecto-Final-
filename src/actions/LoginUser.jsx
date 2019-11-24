import userService from "../services/userServices"


export const LoginUser = (mail, password,remember) => (dispatch) => {

    userService.login(mail,password)
    .then(response=>{
        
        if(remember){ localStorage.setItem("token",response)}
        else{ sessionStorage.setItem("token",response)}
        var segments = response.split(".");
        var data = JSON.parse(decodeURIComponent(escape(window.atob(segments[1]))));
        sessionStorage.setItem("userName",data.sub)
        dispatch({
          type:"LOGIN_USER",
          payload:{
              mytoken:response,
              name:data.sub
          }
      })
  })
    .catch(error => { console.log(`Error: ${error}`) })


}