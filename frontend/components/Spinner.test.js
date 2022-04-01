import React from 'react'
import Spinner from './Spinner'
import {render, screen, rerender} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const loadMessage = 'Please wait...'


test("nothing renders if spinner is false", () => {
  render(<Spinner on={false}/>)
  const notLoad = screen.queryByText(loadMessage)
  expect(notLoad).not.toBeInTheDocument()
})

test("renders if true", () => {
  render(<Spinner on={true}/>)
  const loadingTrue = screen.getByText(loadMessage)
  expect(loadingTrue).toBeVisible()
})

test("renders from false to true", () => {
  const { rerender } = render(<Spinner on={false}/>)
  const notLoading = screen.queryByText(loadMessage)
  expect(notLoading).not.toBeInTheDocument()
  rerender(<Spinner on={true}/>)
  screen.getByText(loadMessage)
})

//comment to true
test('sanity', () => {
  expect(true).toBe(true)
})