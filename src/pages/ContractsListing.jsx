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
import { CONTRACT_TYPES } from '../components/constants/contracts'
import { useHistory } from 'react-router-dom'

const ContractListing = observer(() => {
  const { contracts } = ContractStore
  const { __ } = useI18n()
  const history = useHistory()

  useEffect(() => {
    fetchContracts()
  }, [])

  const actions = [
    { title: __('back') },
    { title: __('save.exit') },
    { title: __('skip.submit') },
  ]

  const goToForm = type => history.push(`/contract?type=${type}`)
  const handleBuyRate = () => goToForm(CONTRACT_TYPES.BUY_RATE)
  const handleProfitSplit = () => goToForm(CONTRACT_TYPES.PROFIT_SPLIT)
  return (
    <>
      <ActionHeader
        title={__('create.smart.contract')}
        subtitle={`(${__('optional')})`}
        compact
      />
      <Separator />
      <SelectContractType
        onClickBuyRate={handleBuyRate}
        onClickProfitSplit={handleProfitSplit}
      />
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
