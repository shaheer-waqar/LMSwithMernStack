import React from 'react'
import { Button } from '../ui/button';
import FormControl from './FormControl';

function DynamicForm({handleSubmit,buttonText="submit",formContol = [], formData, setFormData,isButtonDisable=false,}) {
  return (
    <form onSubmit={handleSubmit}>

        <FormControl formContol={formContol} formData={formData} setFormData={setFormData}/>
        <Button disabled={isButtonDisable} type="submit" className={`mt-3 w-full `}>
            {buttonText } 
        </Button>
    </form>
  )
}

export default DynamicForm