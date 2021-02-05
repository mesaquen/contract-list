import React from 'react'
import { useParams } from 'react-router-dom'
import ActionBar from '../components/ActionBar'
import ActionHeader from '../components/ActionHeader'
import Checkbox from '../components/Checkbox'
import IconMessage from '../components/IconMessage'
import Separator from '../components/Separator'
import useI18n from '../hooks/useI18n'
import useQuery from '../hooks/useQuery'

const ContractForm = () => {
  const params = useParams()
  const { __ } = useI18n()

  const query = useQuery()

  const handleApplyTemplate = () => console.log('apply template')
  const actions = [
    {
      title: __('cancel')
    },
    {
      title: __('add.to.application'),
      disabled: true
    }
  ]
  return (
    <>
      <ActionHeader
        title={__('create.smart.contract')}
        subtitle={`(${__('optional')})`}
        buttonLabel={__('apply.template')}
        onClick={handleApplyTemplate}
        compact
      />
      <Separator />
      <IconMessage message={__('buy.rate.warning')} />
      <Checkbox label={__('save.template.checkbox')}/>
      <Separator />
      <ActionBar data={actions} />
    </>
  )
}

export default ContractForm
