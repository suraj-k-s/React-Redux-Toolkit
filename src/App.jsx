import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ProductList, Header } from './components';
import { fetchUsers } from './redux/user';

function App() {

  /*
   const fetchUsers = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    let res = await data.json()
    dispatch(getUsers(res))
}
*/
  const { userDetails } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
    // fetchUsers()
  }, [])
  console.log(userDetails)
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export default App;
