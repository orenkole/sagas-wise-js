import './App.css';
import { useSelector } from 'react-redux';
import { selectPeople } from '../redux/reducers/people/selectors';

function App() {
  const store = useSelector(store => store);
  console.log(store);

  const {people} = useSelector(selectPeople);
  
  return (
    <div className="App">
      <h1> redux-saga tutorial</h1>
      <table>
        {

        }
      </table>
    </div>
  );
}

export default App;
