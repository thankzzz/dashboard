import React, { Component } from 'react'
import Cookie from 'js-cookie'
import { withRouter } from "react-router-dom";
import moment from 'moment'
// const parseJwt = (token) => {
//     try {
//         let tmpData = Cookie.get('userInfo')
//         let token = tmpData.accessToken
//       return token
//     } catch (e) {
//       return null;
//     }
//   };

export class AuthVerify extends Component {
    constructor(props){
    super(props);
        props.history.listen(()=>{
            const user = Cookie.get('userInfo')
            
            if(!user){
                props.logOut()
            }
          
        })
    }
    render() {
    
        return (
            <div>
                
            </div>
        )
    }
}

export default withRouter(AuthVerify)
