import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store => store);
  console.log(store);
  
  return (
    <div className="App">
      <h1> redux-saga tutorial</h1>
    </div>
  );
}

export default App;
