import axios from 'axios'
const BASE_URL = 'http://localhost:8080/api/v1/users/login'

export const LoginUser = (mail, password) => (dispatch) => {

    axios.post(`${BASE_URL}`, {
        mail: mail,
        password: password
      })
      .then(response =>{
          dispatch({
              type:'',
              payload:{
                id: response.data.id,
                name: response.data.name,
                mail: response.data.mail,
                password: response.data.password
              }
          })

    })
       .catch(error => {console.log(error)});

}