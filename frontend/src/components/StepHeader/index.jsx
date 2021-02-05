import React from 'react'
import PropTypes from 'prop-types'
import { generateTestIds } from './data'
import Card from '../Card'
import StepItem from '../StepItem'
import './styles.scss'

const StepHeader = ({ data, current, dataTestId, ...props }) => {
  const isDone = itemIndex => itemIndex < current

  const testIds = generateTestIds(dataTestId)
  const renderItem = (item, index) => {
    return (
      <StepItem
        data-testid={testIds.item}
        done={isDone(index)}
        active={index === current}
        left={index + 1}
        right={item.subtitle}
        key={`${item.title}${index}`}
        label={item.title}
      />
    )
  }
  return (
    <Card
      className="stepheader--card"
      data-testid={testIds.component}
      {...props}
      compact
    >
      {data.map(renderItem)}
    </Card>
  )
}

StepHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.number,
  dataTestId: PropTypes.string,
}

StepHeader.defaultProps = {
  current: 3,
}

export default StepHeader
