import './App.css';
import { useDispatch } from 'react-redux';

function App() {
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
