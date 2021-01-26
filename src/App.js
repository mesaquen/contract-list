import React from 'react'
import './App.scss'
import Button from './components/Button'
import Typography from './components/Typography'
import Breadcrumbs from './components/Breadcrumb'
import Card from './components/Card'
import StepHeader from './components/StepHeader'
import { getSteps } from './logic/StepLogic'
import IntlProvider from './lang/IntlProvider'
import { useIntl, FormattedMessage } from 'react-intl'

function AppContainer() {
  const intl = useIntl()
  const steps = getSteps().map(step => ({
    ...step,
    title: intl.formatMessage({ id: step.title }),
    subtitle: step.subtitle
      ? `(${intl.formatMessage({ id: step.subtitle })})`
      : null,
  }))
  return (
    <div className="App">
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <Breadcrumbs
          data={[
            intl.formatMessage({ id: 'merchant.label' }),
            intl.formatMessage({ id: 'new.application' }),
          ]}
        />
        <StepHeader data={steps} current={3} />
        <Card>
          <Typography>
            <FormattedMessage id="greeting" />
          </Typography>
          <Button>
            <FormattedMessage id="sample.button" />
          </Button>
          <Button raised>
            <FormattedMessage id="raised.button" />
          </Button>
          <Button primary>
            <FormattedMessage id="primary.button" />
          </Button>
        </Card>
      </div>
    </div>
  )
}

function App() {
  return (
    <IntlProvider>
      <AppContainer />
    </IntlProvider>
  )
}

export default App
