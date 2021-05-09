import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
  htmlFor: string;
  id?: string;
  name: string;
  placeHolder?: string;
  label: string;
  onChange?: any;
  onSelect?: any;
  selected?: any;
  onFocus?: any;
  onBlur?: any;
  value: any;
  error?: any;
}

export const DateInput: React.FC<DateInputProps> = ({
  htmlFor,
  id,
  placeHolder,
  label,
  selected,
  onChange,
  onSelect,
  onBlur,
  value,
  name,
  onFocus,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <DatePicker
          name={name}
          id={id}
          dateFormat='yyyy/MM/dd'
          value={value}
          selected={selected}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          className={`${error &&
            'border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none'} block w-full p-2 pl-4 pr-12 sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-gray-800`}
          placeholderText={placeHolder}
        />
      </div>
    </div>
  );
};
