import Button from '../index'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

beforeEach(cleanup)
describe('Button', () => {
  test('callback is called when clicked', async () => {
    const callback = jest.fn(() => null)
    render(
      <Button data-testid='button' onClick={callback}>
        sample
      </Button>
    )
    const element = await screen.findByTestId('button')
    fireEvent.click(element)
    expect(callback.mock.calls.length).toBe(1)
  })

  test('text is rendered', async () => {
    render(
      <Button data-testid='button'>
        sample
      </Button>
    )
    const element = await screen.findByText('sample')
    expect(element).toBeInTheDocument()
  })
})
