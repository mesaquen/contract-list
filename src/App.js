import './App.scss';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <span>It Works</span>
      <Button>simple</Button>
      <Button raised>raised</Button>
      <Button primary>primary</Button>
    </div>
  );
}

export default App;
