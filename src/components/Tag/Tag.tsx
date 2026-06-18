import { ReactNode } from "react"
import './style.css'

type Props = {
  value: ReactNode
  onRemove?: () => void
}

const Tag: React.FC<Props> = ({ value, onRemove }) => {

  return (
    <div className="tag-item">
      <span>{value}</span>
      {!!onRemove && (
        <button
          type="button"
          onClick={onRemove}
        >
          x
        </button>
      )}
    </div>
  )
}

export default Tag