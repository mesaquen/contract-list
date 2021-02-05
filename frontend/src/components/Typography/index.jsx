import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './styles.scss'

const SIZES = {
  xl: 'xl',
  l: 'l',
  m: 'm',
  s: 's',
  xs: 'xs',
  xxs: 'xxs',
}

const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

const Typography = ({
  className,
  children,
  size,
  bold,
  semi,
  variant,
  ...props
}) => {
  const styles = {
    'typo--xl': size === SIZES.xl,
    'typo--l': size === SIZES.l,
    'typo--m': size === SIZES.m,
    'typo--s': size === SIZES.s,
    'typo--xs': size === SIZES.xs,
    'typo--xxs': size === SIZES.xxs,
    'typo--semi': semi,
    'typo--bold': bold,
    [`typo--text-${variant}`]: true,
  }

  const classNames = cx(styles, [className])
  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  )
}

Typography.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZES)),
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  className: PropTypes.string,
}

Typography.defaultProps = {
  size: SIZES.m,
  variant: 'primary',
}

Typography.XL = SIZES.xl
Typography.L = SIZES.l
Typography.M = SIZES.m
Typography.S = SIZES.s
Typography.XS = SIZES.xs
Typography.XXS = SIZES.xxs

export default Typography
