import React from 'react';
import { useField } from 'formik';

interface FileInputProps {
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
  min?: number;
  max?: number;
}

export const FileInput: React.FC<FileInputProps> = ({
  htmlFor,
  id,
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
      <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
        <div className='space-y-1 text-center'>
          <svg
            className='mx-auto h-12 w-12 text-gray-400'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='flex text-sm text-gray-600'>
            <label
              htmlFor={htmlFor}
              className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
            >
              <span>Sube una foto</span>
              <input
                id='file'
                type='file'
                placeholder={placeHolder}
                value={field.value}
                onChange={onChange}
                onClick={onClick}
                onBlur={field.onBlur}
                onFocus={onFocus}
                defaultValue={defaultValue}
                min={min}
                max={max}
                pattern={pattern}
                className='sr-only'
              />
            </label>
            <p className='pl-1'>o arrastrala y sueltala aquí</p>
          </div>
          <p className='text-xs text-gray-500'>PNG, JPG, GIF maximo 10MB</p>
        </div>
      </div>
    </div>
  );
};
