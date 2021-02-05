import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import useI18n from '../hooks/useI18n'
import ContractStore from '../mobx/ContractStore'
import { fetchContracts } from '../logic/ContractLogic'
import SelectContractType from '../components/SelectContractType'
import Typography from '../components/Typography'
import Separator from '../components/Separator'
import ContractList from '../components/ContractList'
import ActionHeader from '../components/ActionHeader'
import ActionBar from '../components/ActionBar'

const ContractListing = observer(() => {
  const { contracts } = ContractStore
  const { __ } = useI18n()
  useEffect(() => {
    fetchContracts()
  }, [])

  const actions = [
    { title: __('back') },
    { title: __('save.exit') },
    { title: __('skip.submit') },
  ]
  return (
    <>
      <ActionHeader
        title={__('create.smart.contract')}
        subtitle={`(${__('optional')})`}
        compact
      />
      <Separator />
      <SelectContractType />
      <Typography variant="secondary" size={Typography.S} bold>
        {__('applied.contracts')}
      </Typography>
      <Separator />

      <ContractList data={contracts} />
      <Separator />
      <ActionBar data={actions} />
    </>
  )
})

export default ContractListing
