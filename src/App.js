import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import store from './redux';

function App() {
  const store = useSelector(store => store);
  console.log(store);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() => dispatch({type: 'CLICK'})}
      >click</button>
    </div>
  );
}

export default App;
