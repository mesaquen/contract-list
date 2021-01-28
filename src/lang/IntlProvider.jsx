import React from 'react'
import { IntlProvider as Provider } from 'react-intl'
import Messages from './Messages'

const IntlProvider = ({ children }) => {
  const locale = navigator?.language
  const messages = Messages[locale] ?? Messages.default
  return (
    <Provider locale={locale} messages={messages}>
      {children}
    </Provider>
  )
}

export default IntlProvider
