import React from 'react';
import { useField } from 'formik';

interface TextAreaProps {
  htmlFor: string;
  id?: string;
  name: string;
  placeHolder?: string;
  label: string;
  onChange?: any;
  onFocus?: any;
  onClick?: () => void;
  onBlur?: any;
  value: any;
  defaultValue?: any;
  pattern?: string | undefined;
  spellCheck?: boolean;
  min?: number;
  max?: number;
  helperText?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  htmlFor,
  id,
  helperText,
  placeHolder,
  label,
  value,
  onChange,
  onClick,
  onBlur,
  onFocus,
  defaultValue,
  min,
  max,
  pattern,
  spellCheck,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      <label className='text-sm text-gray-600' htmlFor={htmlFor}>
        {label}
      </label>
      <textarea
        name={field.name}
        className={`w-full ${
          error &&
          'border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none'
        } border border-gray-300 rounded-sm px-4 py-3 h-32 outline-none transition-colors duration-150 ease-in-out focus:border-blue-400 resize-none`}
        placeholder={placeHolder}
        spellCheck={spellCheck}
        onChange={field.onChange}
        onClick={onClick}
        onBlur={field.onBlur}
        onFocus={onFocus}
        value={field.value}
        defaultValue={defaultValue}
        minLength={min}
        maxLength={max}
      ></textarea>
      <span className='mt-2 text-gray-600 text-xs'>{helperText}</span>
    </div>
  );
};
