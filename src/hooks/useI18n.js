import { useIntl } from 'react-intl'

const useI18n = () => {
  const intl = useIntl()
  const getMessage = (id, options = {}) => {
    return intl.formatMessage({ id, ...options })
  }
  const __ = getMessage
  return { __ }
}

export default useI18n
