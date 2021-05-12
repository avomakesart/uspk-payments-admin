import React, { Key } from 'react';
import { useField } from 'formik';
interface CheckBoxProps {
  label: string;
  key?: Key | undefined;
  id?: string;
  onChange: any;
  value: string;
  name: string;
  isChecked?: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  key,
  id,
  name,
  value,
  onChange,
  isChecked
}) => {
  return (
    <div className='flex items-start' key={key}>
      <div className='flex items-center h-5'>
        <input
          id={id}
          name={name}
          type='checkbox'
          value={value}
          onChange={onChange}
          checked={isChecked}
          className='focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label htmlFor='comments' className='font-medium text-gray-700'>
          {label}
        </label>
      </div>
    </div>
  );
};
