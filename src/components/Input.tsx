import React from "react";

type Prop ={
  label:string;
  istextarea?:boolean;
  register?:any
  type?:'text'|'file',
  multiple?:boolean
}
const InputWithLabel = ({label,register,istextarea=false,type='text',multiple=false}:Prop) => {
  return (
<div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    
    {
      istextarea?
      <textarea name="" id=""
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      cols={30} rows={10}
      {...register}
      ></textarea>
    :
    <input
    type={type} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
   multiple={multiple}
    {...register}
   
    />
    }
    {/* // placeholder="name@flowbite.com" */}
  </div>
  );
};

export default InputWithLabel;
