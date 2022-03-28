import logo from './logo.svg';
import './App.css';
import './Component.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import addUserAction from './redux/actions';


function App() {


  let users = useSelector(state => state.users)
  

  let dispatch = useDispatch();


  const addUser =() => {

    let user = {
      name : "Yoyo",
      lastName : "Je comprends rien dans cette histoire"
    }
    dispatch(addUserAction(user))

  }


  return (
    <div className="App">
      <h1 className="title">Workshop redux🥵!</h1>

      
      <h2>Listes des utilisateurs</h2> 

      {users.map((user) =>
       <div>
         <h4>Nom : {user.name}</h4>
         <h4>Prenom : {user.lastName}</h4>
         <hr />
      </div> 
      )}


      <button onClick={addUser}>Ajouter user</button>
    </div>



  );
}

export default App;
