import React from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { FaCircleMinus } from 'react-icons/fa6';
import { useState } from 'react';

const SingleQuestion = ({qanda}) => {
    const [open, setOpen] = useState(false);
          const { title, info } = qanda;
          const handleClick = () => {
            setOpen(!open)
          }
            return (
              <div className="question">
                <header>
                  <h5>{title}</h5>
                  {open ? (
                    <FaCircleMinus
                      className="question-btn"
                      onClick={handleClick}
                    />
                  ) : (
                    <FaCirclePlus
                      className="question-btn"
                      onClick={handleClick}
                    />
                  )}
                </header>
                {open ? <p>{info}</p> : <p></p>}
              </div>
            )
         
        
}

export default SingleQuestion