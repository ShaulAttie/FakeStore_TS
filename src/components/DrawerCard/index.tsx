import "./DrawerCard.css"

import React, { useContext } from 'react'
import { StateInterface } from "../../globalTypes"
import { ctx } from "../../context"

interface DrawerCardPorps {
  id: number
  quantity: number
}

const DrawerCard: React.FC<DrawerCardPorps> = ({id , quantity}): JSX.Element => {

  const state = useContext(ctx) as StateInterface

  console.log(state);

  

  
  
  return (
    <div>
      {state?.products.map(product => <div>{product.id}</div>)}
      
    </div>
  )
}

export default DrawerCard
