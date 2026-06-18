import { InputHTMLAttributes } from "react"
import './style.css'

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} />
)

export default Input