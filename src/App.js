import logo from './logo.svg';
import './App.css';
import TestimonyComponent from './components/testimony';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div>
        <TestimonyComponent
         name = 'JOSH'
         city = 'ALABAMA'
         picture = '2'
         testimony = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
         
        />

        <TestimonyComponent
         name = 'JING'
         city = 'SEOUL'
         picture = '3'
         testimony = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
         
        />
        </div>
        
      </header>
    </div>
  );
}

export default App;
