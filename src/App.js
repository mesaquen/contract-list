import React from 'react'
import './App.scss'
import Button from './components/Button'
import Typography from './components/Typography'
import Breadcrumbs from './components/Breadcrumb'
import Card from './components/Card'
import StepHeader from './components/StepHeader'
import { getSteps } from './logic/StepLogic'

function App() {
  const steps = getSteps()
  return (
    <div className="App">
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <Breadcrumbs data={['Merchants ', 'New Application']} />
        <StepHeader data={steps} current={3} />

        <Card>
          <Typography>It Works</Typography>
          <Button>Simple</Button>
          <Button raised>raised</Button>
          <Button primary>primary</Button>
        </Card>
      </div>
    </div>
  )
}

export default App
