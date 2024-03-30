import React, { HTMLInputTypeAttribute } from 'react';
import { MandaroryMark } from './MandatoryMark';

export const TextInput = ({
  title,
  placeholder,
  mandatory,
  type
}: {
  title: string,
  placeholder: string,
  mandatory?: boolean,
  type?: any
}) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {title} { mandatory ? <MandaroryMark /> : false }
      </label>
      <input  
        type={type === undefined ? "tel" : type }
        placeholder={placeholder}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
    </div>
  )
}
