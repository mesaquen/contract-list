import React from 'react'
import './App.scss'
import Breadcrumbs from './components/Breadcrumb'
import Card from './components/Card'
import StepHeader from './components/StepHeader'
import { getSteps } from './logic/StepLogic'
import IntlProvider from './lang/IntlProvider'
import useI18n from './hooks/useI18n'
import Separator from './components/Separator'
import ActionHeader from './components/ActionHeader'
import Snackbar from './components/Snackbar'
import SnackbarStore from './mobx/SnackbarStore'
import { observer } from 'mobx-react-lite'
import ContractListing from './pages/ContractsListing'
import ContractForm from './pages/ContractForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const AppContainer = observer(() => {
  const { __ } = useI18n()
  const steps = getSteps().map(step => ({
    ...step,
    title: __(step.title),
    subtitle: step.subtitle ? `(${__(step.subtitle)})` : null,
  }))

  return (
    <div className="App">
      <div style={{ width: '48rem', margin: '0 auto' }}>
        <Breadcrumbs data={[__('merchant.label'), __('new.application')]} />
        <ActionHeader
          title={__('new.application')}
          buttonLabel={__('save.exit')}
          onClick={() => null}
        />
        <StepHeader data={steps} current={3} />
        <Card className="contract--container">
          <Switch>
            <Route path="/contract/:id?">
              <ContractForm />
            </Route>
            <Route path="/">
              <ContractListing />
            </Route>
          </Switch>
        </Card>
      </div>
      <Snackbar store={SnackbarStore} />
    </div>
  )
})

function App() {
  return (
    <Router>
      <IntlProvider>
        <AppContainer />
      </IntlProvider>
    </Router>
  )
}

export default App
