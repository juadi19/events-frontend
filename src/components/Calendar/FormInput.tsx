import React, { FC } from "react";

interface FormInputProps {
  label: string;
  id: string;
  type: string;
}

const FormInput: FC<FormInputProps> = ({ label, id, type }) => {
  return (
    <div className="m-5 flex flex-col">
      <label className="m-2 text-xl" id={id}>
        {label}
      </label>
      <input
        className="border-gray-800 rounded border px-4 py-2"
        type={type}
        id={id}
      />
    </div>
  );
};

export default FormInput;
