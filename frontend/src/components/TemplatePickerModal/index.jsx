import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import useI18n from '../../hooks/useI18n'
import Modal from '../Modal'
import SelectModal from '../Select/SelectModal'
import TemplateStore from '../../mobx/TemplateStore'
import { fetchTemplates } from '../../logic/TemplateLogic'

const TemplatePickerModal = observer(({ onClose, onApply, ...props }) => {
  const { templates } = TemplateStore
  const [filteredItems, setFilteredItems] = useState(templates.slice())
  const [selectedItem, setSelectedItem] = useState(null)

  const { __ } = useI18n()

  useEffect(() => {
    fetchTemplates()
  }, [])

  const handleSearch = search => {
    const nextItems = templates.filter(item => item.title.includes(search))
    setFilteredItems(nextItems)
  }

  const handleApply = () => {
    onApply?.call(null, selectedItem)
  }

  const actions = [
    {
      title: __('cancel'),
      action: onClose,
    },
    {
      title: __('apply'),
      action: handleApply,
    },
  ]

  return (
    <Modal {...props} onClose={onClose}>
      <Modal.Header title={__('select.template')} onClick={onClose} />
      <Modal.Content>
        <SelectModal
          data={filteredItems}
          dataFieldText="title"
          searchLabel={__('template.name')}
          searchPlaceholder={__('search.template')}
          onSearch={handleSearch}
          onSelect={setSelectedItem}
          selected={selectedItem?.id}
          border={false}
        />
      </Modal.Content>
      <Modal.Actions actions={actions} />
    </Modal>
  )
})

export default TemplatePickerModal
