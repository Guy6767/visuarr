import React from "react";  

const Array = props => {

  let uniqueIdCounter = 0;
  const uniqueId = () => {
    return uniqueIdCounter++;
  };

  return (
    <div className="array" >
      {
        props.array.map(element => {
          return (
            <div 
              className="element" 
              contentEditable="true" 
              key={uniqueId()}
            >
                {element}
            </div>
          );
        })
      }
    </div>
  );
};

export default Array;