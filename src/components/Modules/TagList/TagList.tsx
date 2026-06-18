import { useMemo } from 'react'
import './style.css'
import Tag from '../../Tag/Tag'

type Props = {
  tags: string[],
  onRemove?: (index: number) => void
}

const TagList: React.FC<Props> = ({ tags, onRemove }) => {
  const currentTags = useMemo(() => tags, [tags])

  if (currentTags.length === 0) return null

  return (
    <div className="tag-list">
      {currentTags.map((tag, index) => (
        <Tag
          key={tag}
          value={tag}
          onRemove={() => onRemove?.(index)}
        />
      ))}
    </div>
  )
}

export default TagList