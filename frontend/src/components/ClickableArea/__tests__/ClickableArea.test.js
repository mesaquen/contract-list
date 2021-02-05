import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import ClickableArea from '../index'

beforeEach(cleanup)

const renderComponent = callback => (
  <ClickableArea data-testid="clickablearea" onClick={callback}>
    <span>sample</span>
  </ClickableArea>
)

describe('ClickableArea', () => {
  it('renders correctly', () => {
    const { asFragment } = render(renderComponent())
    expect(asFragment()).toMatchSnapshot()
  })

  it('fires callback when clicked', async () => {
    const callback = jest.fn(() => null)
    render(renderComponent(callback))

    const element = await screen.findByText('sample')
    fireEvent.click(element)

    expect(callback.mock.calls.length).toBe(1)
  })
})
