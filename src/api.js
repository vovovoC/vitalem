import axios from 'axios'
import qs from 'qs'
const API_URL = 'https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/';

export const login = (phoneNumeber, password, callback) => {
    axios.post(`${API_URL}login`,
        qs.stringify({
            phone: phoneNumeber,
            password: password
        }),
        {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    )
    .then((res)=>{
        window.localStorage.setItem("token",res.data.token)
        callback(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}


// "name": "Didar",
// "surname": "Temirkhanov",
// "lastname": "Diasovich",
// "phone": "+7 775 888 77 98",
// "id": 2