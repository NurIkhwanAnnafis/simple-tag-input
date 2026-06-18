import { useState } from "react"

export const useApp = () => {
  const [value, setValue] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])

  const handleChange = (e: string) => setValue(e)

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return null
    if (!value) return null

    const newValue = value.trim()
    const contained = tags.includes(newValue)
    if (!newValue || contained) return null

    setValue('')
    setTags(prev => [...prev, value])
  }

  const handleRemove = (index: number) => setTags(prev => prev.filter((_, i) => i !== index))

  return {
    value,
    tags,
    handleChange,
    handleEnterKey,
    handleRemove,
  }
}