// components/Button.test.jsx
import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

test('renders a Submit button', () => {
  render(<Button label="Submit" />)
  expect(screen.getByText('Submit')).toBeInTheDocument()
})