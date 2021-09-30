
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { RouterConfig } from './Navigation/RouterConfig';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RouterConfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
