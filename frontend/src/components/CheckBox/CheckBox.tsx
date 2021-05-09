import React, { Key } from 'react';

interface CheckBoxProps {
  label: string;
  key?: Key | undefined;
  id?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, key, id }) => {
  return (
    <div className='flex items-start' key={key}>
      <div className='flex items-center h-5'>
        <input
          id={id}
          name='comments'
          type='checkbox'
          className='focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded'
        />
      </div>
      <div className='ml-3 text-sm'>
        <label htmlFor='comments' className='font-medium text-gray-700'>
          {label}
        </label>
        <p className='text-gray-500'>
          Get notified when someones posts a comment on a posting.
        </p>
      </div>
    </div>
  );
};
