import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import Checkbox from '../index'

beforeEach(cleanup)

const renderComponent = (checked, callback) => {
  return (
    <Checkbox
      label="sample"
      checked={checked}
      onClick={callback}
      data-testid="checkbox-component"
    />
  )
}

describe('Checkbox', () => {
  let callback = jest.fn()

  it('renders correctly', () => {
    const { asFragment } = render(renderComponent())
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly when checked', () => {
    const { asFragment } = render(renderComponent(true))
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls the callback with expected value', async () => {
    const randomBoolean = !!Math.floor(Math.random() * 2)
    const checked = randomBoolean
    const expectedReturn = !checked

    render(renderComponent(checked, callback))
    const element = await screen.findByTestId('checkbox-component')
    fireEvent.click(element)
    expect(callback).toBeCalledWith(expectedReturn)
  })
})
