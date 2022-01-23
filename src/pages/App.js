import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import store from '../redux';

function App() {
  const store = useSelector(store => store);
  console.log(store);
  
  return (
    <div className="App">
      redux-saga tutorial
      <div>
        <Link to={'/blog'}>
          open blog 
        </Link>
      </div>
    </div>
  );
}

export default App;
