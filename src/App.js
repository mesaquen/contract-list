import './App.scss'
import Button from './components/Button'
import Typography from './components/Typography'

function App() {
  return (
    <div className="App">
      <Typography>It Works</Typography>
      <Button>simple</Button>
      <Button raised>raised</Button>
      <Button primary>primary</Button>
    </div>
  )
}

export default App
