import React, { ReactNode } from 'react';

interface CardFormProps {
  children: ReactNode | ReactNode[];
  title?: string;
  marginTop?: string;
}

export const CardForm: React.FC<CardFormProps> = ({
  children,
  title,
  marginTop,
}) => {
  return (
    <div
      className={`shadow max-w-full mt-${marginTop} sm:rounded-md sm:overflow-hidden`}
    >
      <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
        {title && (
          <h3 className='mt-4 mb-2 font-sans text-2xl font-black text-gray-700 tracking-tighter'>
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};
