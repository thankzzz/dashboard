import React,{useState,useEffect,useCallback,useRef,Fragment} from 'react'
import moment from 'moment'
import Cookie from 'js-cookie'
import { useHistory,withRouter } from "react-router-dom";
function SessionTimeout() {
    const history = useHistory();
    const [events,setEvents] = useState(['click','load'])
   

    let resetTimer = useCallback(()=>{
        let user = Cookie.get('userInfo')
        if(user){
            let timeStamp = moment()          
          
        }else{       
         
        }
    })

   
    useEffect(()=>{
        events.forEach((event) => {
            window.addEventListener(event, resetTimer);
          });
    },[resetTimer])
    return (
        <Fragment/>
    )
}

export default SessionTimeout  
