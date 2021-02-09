import React from 'react'
import cx from 'classnames'
import Input from '../Input'
import { FaSearch as Icon } from 'react-icons/fa'
import { debounce } from 'throttle-debounce'
import Typography from '../Typography'
import './styles.scss'

const SelectModal = ({
  data,
  selected,
  dataFieldText,
  dataFieldId,
  searchLabel,
  searchPlaceholder,
  className,
  onSelect,
  onSearch,
  border,
  ...props
}) => {
  const containerStyles = cx(
    'selectmodal--container',
    {
      'selectmodal--container-border': border,
    },
    className
  )

  const debouncedOnSearch = debounce(300, onSearch)

  const handleSearch = search => {
    debouncedOnSearch?.call(null, search)
  }

  const handleSelect = index => {
    onSelect?.call(null, data[index])
  }

  const renderItem = (item, index) => {
    const listItemStyle = cx('selectmodal--list-item', {
      'selectmodal--list-item-selected': selected && item.id === selected,
    })
    return (
      <li key={item.description} onClick={() => handleSelect(index)}>
        <div className={listItemStyle}>
          <Typography size={Typography.S} variant="secondary" bold>
            {data[index]?.[dataFieldText]}
          </Typography>
        </div>
      </li>
    )
  }

  return (
    <div className={containerStyles} {...props}>
      <Input
        label={searchLabel}
        placeholder={searchPlaceholder}
        onChange={handleSearch}
        right={<Icon />}
      />
      <ul className="selectmodal--list">{data.map(renderItem)}</ul>
    </div>
  )
}

SelectModal.defaultProps = {
  dataFieldText: 'description',
  dataFieldId: 'id',
  border: true,
  data: [],
}

export default SelectModal
