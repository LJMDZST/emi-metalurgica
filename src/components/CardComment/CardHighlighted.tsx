import React  from "react"
import './CardHiglighted.css'

export const CardHighlighted = (  { children  }:React.PropsWithChildren) => {
  return (
    <section className="resalto">
       {children}
    </section>
  )
}
