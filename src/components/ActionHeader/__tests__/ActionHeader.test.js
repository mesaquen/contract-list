import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import ActionHeader from '../index'

let callback

beforeEach(() => {
  cleanup()
  callback = jest.fn()
})

const renderComponent = (props = {}) => {
  return (
    <ActionHeader
      title="Title"
      buttonLabel="Action"
      dataTestId="action-header"
      {...props}
    />
  )
}

describe('ActionHeader', () => {
  it('renders correctly with no action', () => {
    const { asFragment } = render(renderComponent())
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with action', () => {
    const { asFragment } = render(renderComponent({ onClick: callback }))
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly on compact layout', () => {
    const { asFragment } = render(renderComponent({ compact: true }))
    expect(asFragment()).toMatchSnapshot()
  })

  it('fires callback when clicked', async () => {
    render(renderComponent({ onClick: callback }))
    const element = await screen.findByTestId('action-header-button')
    fireEvent.click(element)
    expect(callback).toBeCalledTimes(1)
  })
})
