
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { RouterConfig } from './Navigation/RouterConfig';
import Loader from './Components/Loader';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import SessionTimeout from './Services/SessionTimeout';

function App() {
 
  return (
    <div className="App">
      <ReactNotification />
      <Loader/>
      <BrowserRouter>
          <RouterConfig/>
          <SessionTimeout/>
      </BrowserRouter>

    </div>
  );
}

export default App;
