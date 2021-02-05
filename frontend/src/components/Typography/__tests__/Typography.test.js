import { render, cleanup, screen, waitFor } from '@testing-library/react'
import Typography from '../index'

beforeEach(cleanup)

describe('Typography', () => {
  test('renders text correctly', async () => {
    render(<Typography>Sample</Typography>)
    const element = await waitFor(() => screen.findByText('Sample'))
    expect(element).toBeInTheDocument()
  })

  test('renders corrent class when bold', async () => {
    const { asFragment } = render(<Typography bold>Sample</Typography>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders corrent class when secondary', async () => {
    const { asFragment } = render(
      <Typography variant="secondary">Sample</Typography>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders corrent class when size XL', async () => {
    const { asFragment } = render(<Typography size="xl">Sample</Typography>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders corrent class when size L', async () => {
    const { asFragment } = render(<Typography size="l">Sample</Typography>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders corrent class when size M', async () => {
    const { asFragment } = render(<Typography size="m">Sample</Typography>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders corrent class when size S', async () => {
    const { asFragment } = render(<Typography size="s">Sample</Typography>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders corrent class when size XS', async () => {
    const { asFragment } = render(<Typography size="xs">Sample</Typography>)
    expect(asFragment()).toMatchSnapshot()
  })
})
