import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import Select from '../index'
import Provider from '../../../lang/IntlProvider'

let rateCallback, profitCallback

beforeEach(() => {
  cleanup()
  rateCallback = jest.fn()
  profitCallback = jest.fn()
})

const renderComponent = (rateCallback, profitCallback) => {
  return (
    <Provider>
      <Select
        dataTestId="select"
        onClickBuyRate={rateCallback}
        onClickProfitSplit={profitCallback}
      />
    </Provider>
  )
}

describe('SelectContractType', () => {
  it('renders correctly', () => {
    const { asFragment } = render(renderComponent())
    expect(asFragment()).toMatchSnapshot()
  })

  it('fires rate callback when clicked', async () => {
    render(renderComponent(rateCallback, profitCallback))
    const element = await screen.findByTestId('select-rate-button')
    fireEvent.click(element)
    expect(rateCallback).toBeCalledTimes(1)
    expect(profitCallback).toBeCalledTimes(0)
  })

  it('fires profit callback when clicked', async () => {
    render(renderComponent(rateCallback, profitCallback))
    const element = await screen.findByTestId('select-profit-button')
    fireEvent.click(element)
    expect(rateCallback).toBeCalledTimes(0)
    expect(profitCallback).toBeCalledTimes(1)
  })
})
