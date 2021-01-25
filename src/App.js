import './App.scss'
import Button from './components/Button'
import Typography from './components/Typography'
import Breadcrumbs from './components/Breadcrumb'

function App() {
  return (
    <div className="App">
      <Typography>It Works</Typography>
      <Button>simple</Button>
      <Button raised>raised</Button>
      <Button primary>primary</Button>
      <Breadcrumbs data={['Merchants ', 'New Application']} />
    </div>
  )
}

export default App
