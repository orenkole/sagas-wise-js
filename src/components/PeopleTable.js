import { useSelector } from 'react-redux';
import { selectPeople } from '../redux/reducers/people/selectors';
import PeopleTablePagination from './PeopleTablePagination';

function PeopleTable() {
  const people = useSelector(selectPeople);
  
  return (
    <>
      <h1> redux-saga tutorial</h1>
      {
        people.loading
        ? (
          <div>Loading ...</div>
        ) : (
					<>
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
						<PeopleTablePagination
							page={people.page}
							total={people.data.count}
							onChange={(newPage) => {
								changePage(page);
							}}
						/>
					</>
        )
      }
    </>
  );
}

export default PeopleTable;