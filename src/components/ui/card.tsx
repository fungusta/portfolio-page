import type React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={`${className}`}  {...props}>
      {children}
    </div>
  )
}

