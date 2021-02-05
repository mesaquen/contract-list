export const generateTestIds = dataTestId => ({
  component: dataTestId,
  rateButton: `${dataTestId}-rate-button`,
  profitButton: `${dataTestId}-profit-button`,
})
