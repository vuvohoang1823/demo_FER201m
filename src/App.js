import './App.css';
import AddUser from './Components/AddUser';
import Navigation from './Components/Navigation';
import User from './Components/User';

function App() {
  return (
    <div className='App'>
      <Navigation/>
      <div className='App-content'>
        <AddUser/>
        <User/>
      </div>
    </div>
  );
}

export default App;
