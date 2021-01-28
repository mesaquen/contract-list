import React, { useState } from 'react'
import './App.scss'
import Breadcrumbs from './components/Breadcrumb'
import Card from './components/Card'
import StepHeader from './components/StepHeader'
import { getSteps } from './logic/StepLogic'
import IntlProvider from './lang/IntlProvider'
import Checkbox from './components/Checkbox'
import useI18n from './hooks/useI18n'
import SelectContractType from './components/SelectContractType'

function AppContainer() {
  const [checkValue, setValue] = useState(false)
  const { __ } = useI18n()
  const steps = getSteps().map(step => ({
    ...step,
    title: __(step.title),
    subtitle: step.subtitle ? `(${__(step.subtitle)})` : null,
  }))
  return (
    <div className="App">
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <Breadcrumbs data={[__('merchant.label'), __('new.application')]} />
        <StepHeader data={steps} current={3} />
        <Card>
          <SelectContractType />
          <Checkbox
            name="template-checkbox"
            label={__('save.template.checkbox')}
            checked={checkValue}
            onClick={next => setValue(next)}
          />
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
