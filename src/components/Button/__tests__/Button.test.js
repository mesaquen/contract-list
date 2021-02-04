import Button from '../index'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

let callback

beforeEach(() => {
  callback = jest.fn()
  cleanup()
})
describe('Button', () => {
  test('callback is called when clicked', async () => {
    render(
      <Button data-testid="button" onClick={callback}>
        sample
      </Button>
    )
    const element = await screen.findByTestId('button')
    fireEvent.click(element)
    expect(callback).toBeCalledTimes(1)
  })

  test("callback isn't called when clicked when button disabled", async () => {
    render(
      <Button data-testid="button" disabled onClick={callback}>
        sample
      </Button>
    )
    const element = await screen.findByTestId('button')
    fireEvent.click(element)
    expect(callback).not.toBeCalled()
  })

  test('text is rendered', async () => {
    render(<Button data-testid="button">sample</Button>)
    const element = await screen.findByText('sample')
    expect(element).toBeInTheDocument()
  })

  test('match snapshot when raised', () => {
    const { asFragment } = render(<Button raised>RaisedButton</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('match snapshot when primary', () => {
    const { asFragment } = render(<Button primary>PrimaryButton</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('match snapshot when disabled', () => {
    const { asFragment } = render(<Button disabled>PrimaryButton</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
