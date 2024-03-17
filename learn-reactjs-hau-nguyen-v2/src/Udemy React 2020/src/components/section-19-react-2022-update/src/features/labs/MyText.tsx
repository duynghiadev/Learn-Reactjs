import { ReactNode } from 'react'

export interface MyTextProps {
  children?: ReactNode
}

export default function MyText({ children }: MyTextProps) {
  return <div>{children}</div>
}
