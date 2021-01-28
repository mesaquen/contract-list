import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InfoLabel from '../InfoLabel'
import ClickableArea from '../ClickableArea'
import useI18n from '../../hooks/useI18n'
import { generateTestIds } from './data'
import './styles.scss'

const SelectContractType = ({
  dataTestId,
  className,
  onClickBuyRate,
  onClickProfitSplit,
  ...props
}) => {
  const { __ } = useI18n()
  const classNames = cx('contractType--container', className)
  const testIds = generateTestIds(dataTestId)

  return (
    <div className={classNames} data-testid={testIds.component} {...props}>
      <InfoLabel
        label={__('select.contract.type')}
        info={__('buy.rate.info')}
      />
      <div className="contractType--grid">
        <ClickableArea onClick={onClickBuyRate}>
          <InfoLabel
            label={__('buy.rate')}
            info={__('buy.rate.info')}
            data-testid={testIds.rateButton}
          />
        </ClickableArea>
        <ClickableArea onClick={onClickProfitSplit}>
          <InfoLabel
            data-testid={testIds.profitButton}
            label={__('profit.split')}
            info={__('profit.split.info')}
          />
        </ClickableArea>
      </div>
    </div>
  )
}

SelectContractType.propTypes = {
  dataTestId: PropTypes.string,
  className: PropTypes.string,
  onClickBuyRate: PropTypes.func,
  onClickProfitSplit: PropTypes.func,
}

export default SelectContractType
