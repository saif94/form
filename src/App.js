
import './App.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? <Logout /> : <Login />}
      
    </div>
  );
}

export default App;
