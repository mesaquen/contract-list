import { cleanup, render } from '@testing-library/react'
import StepHeader from '../index'

beforeEach(cleanup)

describe('StepHeader', () => {
  const steps = [
    { title: 'step 1' },
    { title: 'step 2', subtitle: 'step 2 subtitle' },
    { title: 'step 3' },
  ]
  it('renders correctly', () => {
    const { asFragment } = render(
      <StepHeader dataTestId="steps" data={steps} current={1} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
