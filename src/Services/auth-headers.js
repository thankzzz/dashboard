import Cookies from 'js-cookie'
export default function authHeader() {
    const user = Cookies.get('userInfo');
  
    if (user && user.accessToken) {
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }