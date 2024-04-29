import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({qandas}) => {
 
  return (
    <div className="container">
      <h1>Questions</h1>
       
          {qandas.map((qanda) => {
            const { id, title, info } = qanda;
        return <SingleQuestion key={id} qanda={qanda} />
          })}
    </div>
  )
}

export default Questions