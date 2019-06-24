import React from "react";

const Input = props => {

  const setArray = e => {
    e.preventDefault();
    const array = e.target.elements.array.value.split(",");
    props.setArray(array);
  };

  return (
    <div>
    <form className="set-array" onSubmit={setArray}>
      <input className="set-array__input" placeholder="enter an array" type="text" name="array" />
        <button className="set-array__button">
          Set array
        </button>
    </form>
    <p className="set-array__info">
      To set an array, enter your array's elements above, separated by a comma.
      For example: "2,3,4", "a,b,c", ect.
    </p>
    </div>
  );
};

export default Input;