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
import Separator from './components/Separator'
import ActionHeader from './components/ActionHeader'
import Snackbar from './components/Snackbar'
import SnackbarStore from './mobx/SnackbarStore'
import Typography from './components/Typography'
import Select from './components/Select'

function AppContainer() {
  const [checkValue, setValue] = useState(false)
  const [selectValue, setSelectValue] = useState()
  const { __ } = useI18n()
  const steps = getSteps().map(step => ({
    ...step,
    title: __(step.title),
    subtitle: step.subtitle ? `(${__(step.subtitle)})` : null,
  }))

  const showSnackbar = () => {
    const options = { title: 'Success!', type: 'success' }
    SnackbarStore.showSnackbar(options)
    setTimeout(SnackbarStore.hideSnackbar, SnackbarStore.duration)
  }
  return (
    <div className="App">
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <Breadcrumbs data={[__('merchant.label'), __('new.application')]} />
        <ActionHeader
          title={__('new.application')}
          buttonLabel={__('save.exit')}
          onClick={() => null}
        />
        <StepHeader data={steps} current={3} />
        <Card className="contract--container">
          <ActionHeader
            title={__('create.smart.contract')}
            subtitle={`(${__('optional')})`}
            buttonLabel={__('apply.template')}
            onClick={showSnackbar}
            compact
          />
          <Separator />
          <SelectContractType />
          <Typography variant="secondary" size={Typography.S} bold>
            {__('applied.contracts')}
          </Typography>
          <Separator />
          <Typography variant="secondary" size={Typography.S}>
            {__('no.contract.warning')}
          </Typography>
          <Checkbox
            name="template-checkbox"
            label={__('save.template.checkbox')}
            checked={checkValue}
            onClick={next => setValue(next)}
          />
          <Select
            placeholder="thos is the placeholder"
            value={selectValue}
            dataTextField="description"
            label={__('apply.templaaate')}
            searchLabel={__('apply')}
            searchPlaceholder={__('seach.placeholder')}
            onChange={setSelectValue}
            onSearch={value => console.log(value)}
          />
        </Card>
      </div>
      <Snackbar store={SnackbarStore} />
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
