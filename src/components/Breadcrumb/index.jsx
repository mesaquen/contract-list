import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Typography'
import { MdChevronRight as Icon } from 'react-icons/md'
import './styles.scss'

const Breadcrumb = ({ data }) => {
  const renderItem = (item, index, items) => {
    const bold = index === items.length - 1
    const shouldRenderSeparator = index > 0
    const separator = shouldRenderSeparator ? (
      <Icon className="breadcrumb--separator" size="1.25rem" />
    ) : null

    return (
      <div className="breadcrumb--item" key={item}>
        {separator}
        <Text size={Text.S} bold={bold} variant="secondary">
          {item}
        </Text>
      </div>
    )
  }
  return <div className="breadcrumb--container">{data.map(renderItem)}</div>
}

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
}

export default Breadcrumb
