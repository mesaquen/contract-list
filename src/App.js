import React, { useState, useEffect } from 'react'
import './App.scss'
import Breadcrumbs from './components/Breadcrumb'
import Card from './components/Card'
import StepHeader from './components/StepHeader'
import { getSteps } from './logic/StepLogic'
import IntlProvider from './lang/IntlProvider'
import useI18n from './hooks/useI18n'
import SelectContractType from './components/SelectContractType'
import Separator from './components/Separator'
import ActionHeader from './components/ActionHeader'
import Snackbar from './components/Snackbar'
import SnackbarStore from './mobx/SnackbarStore'
import Typography from './components/Typography'
import ContractList from './components/ContractList'
import { CONTRACT_TYPES } from './components/constants/contracts'
import Button from './components/Button'
import { observer } from 'mobx-react-lite'
import ContractStore from './mobx/ContractStore'
import { fetchContracts } from './logic/ContractLogic'

const AppContainer = observer(() => {
  const { contracts } = ContractStore
  const { __ } = useI18n()
  const steps = getSteps().map(step => ({
    ...step,
    title: __(step.title),
    subtitle: step.subtitle ? `(${__(step.subtitle)})` : null,
  }))

  useEffect(() => {
    fetchContracts()
  }, [])

  const showSnackbar = () => {
    const options = { title: 'Success!', type: 'success' }
    SnackbarStore.showSnackbar(options)
    setTimeout(SnackbarStore.hideSnackbar, SnackbarStore.duration)
  }
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

          <ContractList data={contracts} />
        </Card>
      </div>
      <Snackbar store={SnackbarStore} />
    </div>
  )
})

function App() {
  return (
    <IntlProvider>
      <AppContainer />
    </IntlProvider>
  )
}

export default App
