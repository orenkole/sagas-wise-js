import './App.css';
import { useSelector } from 'react-redux';
import { selectPeople } from '../redux/reducers/people/selectors';

function App() {
  const store = useSelector(store => store);
  console.log(store);

  const people = useSelector(selectPeople);
  
  console.log('people:', people);

  return (
    <div className="App">
      <h1> redux-saga tutorial</h1>
      {
        people.loading
        ? (
          <div>Loading ...</div>
        ) : (
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth year</th>
                <th>Eye color</th>
                <th>Gender</th>
                <th>Hair color</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              {people?.data?.results.map(character => {
                return (
                  <tr key={character.name}>
                    <td>{character.name}</td>
                    <td>{character.birth_year}</td>
                    <td>{character.eye_color}</td>
                    <td>{character.gender}</td>
                    <td>{character.hair_color}</td>
                    <td>{character.height}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
