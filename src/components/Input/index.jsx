import React from 'react'
import cx from 'classnames'
import Wrapper from '../InputWrapper'
import Typo from '../Typography'

import './styles.scss'
const Input = ({
  textAlign,
  name,
  onChange,
  left,
  type,
  placeholder,
  inputProps,
  ...props
}) => {
  const handleChange = event => {
    onChange?.call(null, event.target.value)
  }

  const inputStyles = cx('inputnumber--input', {
    'input--text-right': textAlign === 'right',
  })

  const leftComponent = left ? (
    <div className="inputnumber--left">
      <Typo size={Typo.S} bold variant="secondary">
        {left}
      </Typo>
    </div>
  ) : null

  return (
    <Wrapper left={leftComponent} {...props}>
      <input
        placeholder={placeholder}
        name={name}
        className={inputStyles}
        type={type}
        onChange={handleChange}
        {...inputProps}
      />
    </Wrapper>
  )
}

export default Input
