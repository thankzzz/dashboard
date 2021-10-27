import Cookies from 'js-cookie'

export default function authHeader() {
    const user = JSON.parse(Cookies.get('userInfo'));
   
    if (user) {
      console.log(user.accessToken)
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }