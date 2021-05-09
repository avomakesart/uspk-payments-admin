import React from 'react';
import { useField } from 'formik';

interface InputProps {
  htmlFor: string;
  id?: string;
  name: string;
  placeHolder?: string;
  label: string;
  type: string;
  onChange?: any;
  onFocus?: any;
  onClick?: () => void;
  onBlur?: any;
  value: any;
  defaultValue?: any;
  pattern?: string | undefined;
  min?: number;
  max?: number;
}

export const Input: React.FC<InputProps> = ({
  htmlFor,
  id,
  placeHolder,
  label,
  type,
  value,
  onChange,
  onClick,
  onBlur,
  onFocus,
  defaultValue,
  min,
  max,
  pattern,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          type={type}
          name={field.name}
          id={id}
          className={`${
            error &&
            'border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none'
          } block w-full p-2 pl-4 sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-gray-800`}
          placeholder={placeHolder}
          onChange={field.onChange}
          onClick={onClick}
          onBlur={field.onBlur}
          onFocus={onFocus}
          value={field.value}
          defaultValue={defaultValue}
          pattern={pattern}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};
