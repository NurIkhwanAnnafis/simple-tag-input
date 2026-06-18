import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe("App Pages Test", () => {
  it("Should Match Snapshot", () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })

  it("Should Contain Input Element", () => {
    const { container } = render(<App />)

    const input = container.querySelectorAll('input')
    expect(input.length).toBe(1)
  })

  it("Should have value expected with the typing", () => {
    const { container } = render(<App />)

    const input = container.querySelector('input')
    if (input) {
      fireEvent.change(input, { target: { value: "Hello" } })

      expect(input).toHaveValue("Hello")
    }
  })

  it("Should tags added when enter pressed", () => {
    const { container } = render(<App />)

    const input = container.querySelector('input')
    if (input) {
      fireEvent.change(input, { target: { value: "Hello" } })
      expect(input).toHaveValue("Hello")

      fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).toHaveValue("")

      const tags = container.querySelectorAll('.tag-item')
      expect(tags.length).toBe(1)
    }
  })

  it("Should tags not added when empty string", () => {
    const { container } = render(<App />)

    const input = container.querySelector('input')
    if (input) {
      fireEvent.change(input, { target: { value: "" } })
      expect(input).toHaveValue("")

      fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).toHaveValue("")

      const tags = container.querySelectorAll('.tag-item')
      expect(tags.length).toBe(0)
    }
  })

  it("Should tags not added when duplicate", () => {
    const { container } = render(<App />)

    const input = container.querySelector('input')
    if (input) {
      fireEvent.change(input, { target: { value: "Hello" } })
      expect(input).toHaveValue("Hello")

      fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).toHaveValue("")

      fireEvent.change(input, { target: { value: "Hello" } })
      expect(input).toHaveValue("Hello")

      fireEvent.keyDown(input, { key: 'Enter' })
      expect(input).toHaveValue("Hello")

      const tags = container.querySelectorAll('.tag-item')
      expect(tags.length).toBe(1)
    }
  })
})
