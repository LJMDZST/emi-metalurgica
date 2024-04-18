import React  from "react"

export const CardHighlighted = (  { children  }:React.PropsWithChildren) => {
  return (
    <section className="resalto">
       {children}
    </section>
  )
}
