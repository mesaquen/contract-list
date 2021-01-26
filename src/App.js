import './App.scss'
import Button from './components/Button'
import Typography from './components/Typography'
import Breadcrumbs from './components/Breadcrumb'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Breadcrumbs data={['Merchants ', 'New Application']} />
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <Card>
          <Typography>It Works</Typography>
          <Button>simple</Button>
          <Button raised>raised</Button>
          <Button primary>primary</Button>
        </Card>
      </div>
    </div>
  )
}

export default App
