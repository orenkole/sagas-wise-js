import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOAD_USERS } from '../redux/reducers/people/actions';
import { selectPeople } from '../redux/reducers/people/selectors';
import PeopleTablePagination from './PeopleTablePagination';

function PeopleTable() {
	const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  
	const changePage = newPage => dispatch({
		type: LOAD_USERS,
		payload: {
			page: newPage,
			search: people.search
		}
	})

	const search = (e) => dispatch({
		type: LOAD_USERS,
		payload: {
			page: 1,
			search: e.target.value
		}
	})

  return (
    <>
      <h1> redux-saga tutorial</h1>
			<form style={{display: 'inline-block'}}>
				<input 
					type="text"
					style={{padding: '12px 20px'}}
					value={people.search}
					placeholder="search people"
					onChange={search}
				/>
			</form>
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
									<th></th>
								</tr>
							</thead>
							<tbody>
								{people?.data?.results.map(character => {
									const id = character.url.replaceAll(/\D/g, '');
									return (
										<tr key={character.name}>
											<td>{character.name}</td>
											<td>{character.birth_year}</td>
											<td>{character.eye_color}</td>
											<td>{character.gender}</td>
											<td>{character.hair_color}</td>
											<td>{character.height}</td>
											<td>
												<Link to={`/people/${id}`}>Details</Link>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
						<PeopleTablePagination
							page={people.page}
							total={people.data.count}
							onChange={(newPage) => {
								changePage(newPage);
							}}
						/>
					</>
        )
      }
    </>
  );
}

export default PeopleTable;