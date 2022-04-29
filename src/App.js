import logo from './logo.svg';
import './App.css';
import Bai2 from './components';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='form'>
             <h1>Fancy Text Inputs</h1>
             <Bai2 text='First Name'/>
             <Bai2 text='Last Name'/>
             <Bai2 text='Email Adress'/>
             <Bai2 text='Email Confirm'/>
             <button>Submit</button>
          </div>
      </header>
    </div>
  );
}

export default App;
