import React, { useState } from 'react'
import Wrapper from '../InputWrapper'
import cx from 'classnames'
import Typo from '../Typography'
import { FaChevronDown as Icon } from 'react-icons/fa'
import SelectModal from './SelectModal'
import './styles.scss'

const Select = ({
  value,
  placeholder,
  dataTextField,
  searchLabel,
  searchPlaceholder,
  onSearch,

  onChange,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false)
  const modalStyles = cx({ hidden: !showModal })
  const inputStyles = cx({ placeholder: !value })
  const toggleModal = () => setShowModal(!showModal)

  const handleChange = value => {
    toggleModal()
    onChange?.call(null, value)
  }

  return (
    <div className="select--container">
      <Wrapper {...props} right={<Icon size="0.75rem" />} onClick={toggleModal}>
        <Typo size={Typo.S} variant="secondary" className={inputStyles}>
          {value ? value[dataTextField] : placeholder}
        </Typo>
      </Wrapper>
      <div className="select--modal-positioner">
        <SelectModal
          onSearch={onSearch}
          dataTextField={dataTextField}
          className={modalStyles}
          data={[
            { description: 'sabão' },
            { description: 'acucao' },
            { description: 'aobora' },
          ]}
          searchLabel={searchLabel}
          searchPlaceholder={searchPlaceholder}
          onSelect={handleChange}
        />
      </div>
    </div>
  )
}

Select.Modal = SelectModal

export default Select
