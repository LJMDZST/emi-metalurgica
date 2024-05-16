import { ReactNode } from 'react'
import './CardInfo.css'

type TDataCardInfo = {
    icon : ReactNode,
    texto : ReactNode
}
export const CardInfo = ( {icon,texto} : TDataCardInfo ) => {
  return (
    <div className="card-container">
        <div className='card-marco'>
            <div className='row align-items-center'>
                <div className='col-2 '>
                    {icon}
                </div>
                <div className='col '>
                   {texto}
                </div>
            </div>
        </div>
    </div>
  )
}
