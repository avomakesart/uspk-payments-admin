import React from 'react';

interface ErrorProps {
  errorType: string;
  description: string;
}

export const Error: React.FC<ErrorProps> = ({ description, errorType }) => {
  return (
    <section className='text-gray-700'>
      <div className='container px-8 mx-auto py-36 lg:px-4'>
        <div className='flex flex-col w-full mb-12 text-left lg:text-center'>
          <h2 className='mb-1 text-lg font-semibold tracking-widest text-gray-800 uppercase title-font'>
            {description}
          </h2>
          <h1 className='mb-6 text-9xl font-semibold tracking-tighter text-gray-600'>
            {errorType}
          </h1>
        </div>
      </div>
    </section>
  );
};
