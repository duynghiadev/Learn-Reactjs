import { PrevervingCounter } from '@/199. Preserving State/component01/PrevervingCounter'
import './style.scss'

export default function Preserving() {
  const counter = <PrevervingCounter />
  return (
    <div>
      {counter}
      {counter}
    </div>
  )
}
