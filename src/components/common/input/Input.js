import React from 'react';
import {useImmer} from 'use-immer';

const InputState={
  value:''
}
function Input(props) {
  const [values,setValues] = useImmer(InputState);
  const handleChange =e=>{
    const targetValue = e.target.value;
    setValues(draft=>{
      draft.value = targetValue;
    })

  }
  return (
    <input type="text" {...props} onChange={handleChange} value={values.value}/>
  );
}

export default Input;