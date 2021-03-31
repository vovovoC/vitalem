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
export const register  = (phoneNumeber, name_,surname_, lastname_,callback) => {
  axios.post(`${API_URL}register`,
      qs.stringify({
          phone: phoneNumeber,
          name:name_,
          lastname:lastname_,
          surname:surname_
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
export const profile =(setProfileInfo)=>{  
    if(window.localStorage.getItem("token") != undefined){
        axios.get(`${API_URL}profile`,
          {
            headers:{
                "x-requested-with": "xhr",
              "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
            }
          }
        )
        .then((res)=>{
            setProfileInfo(res)
        })
        .catch((res)=>{
          console.log(res)
        });
      }
}

export const anketa=(
    author_,
    surgery_,
    hospital_reason_,
    hospital_date_,
    current_drugs_,
    drugs_amount_,
    addiction_,
    addiction_period_,
    smoke_,
    smoke_amount_,
    genetic_illness_,
    whois_,
    callback
    )=>{
    axios.post(`${API_URL}anketa`,
      qs.stringify({
        author:author_,
        surgery:surgery_,
        hospital_reason:hospital_reason_,
        hospital_date:hospital_date_,
        current_drugs:current_drugs_,
        drugs_amount:drugs_amount_,
        addiction:addiction_,
        addiction_period:addiction_period_,
        smoke:smoke_,
        smoke_amount:smoke_amount_,
        genetic_illness:genetic_illness_,
        whois:whois_
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
  // useEffect(() => {
    //   let me = "aPM331"
    //   if(window.localStorage.getItem("token") != undefined){
    //     axios.get("https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/profile",
    //       {
    //         headers:{
    //           "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
    //         }
    //       }
    //     )
    //     .then((res)=>{
    //       console.log(res)
    //     })
    //     .catch((res)=>{
    //       console.log(res)
    //     });
    //     return;
    //   }
    //   axios.post("https://cors-anywhere.herokuapp.com/https://t6.gist.kz/api/login",
    //       qs.stringify({
    //         phone: "+7 707 123 12 23",
    //         password: me
    //       }),
    //       { 
    //         "x-requested-with": "xhr",
    //         'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //       }
    //     )
    //     .then((res)=>{
    //       window.localStorage.setItem("token",res.data.token)
    //     })
    //     .catch((res)=>{
    //       console.log(res)
    //     });
        
    //   }, [userV]);
