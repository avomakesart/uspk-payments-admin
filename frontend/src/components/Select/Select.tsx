import React, { useEffect, useState } from 'react';
import { CheckIcon } from '../../assets/icons/CheckIcon';

interface SelectProps {
  label?: string;
  items?: any;
  value?: any;
}

export const Select: React.FC<SelectProps> = ({ items, label, value }) => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);


  const handleSelect = (value: any) => () => {
    setSelected(value);
    setOpen(false);
    console.log(value);
  };


  useEffect(() => {
    setSelected(value)    
    return () => {
      
    }
  }, [])

  return (
    <div>
      <label
        id='listbox-label'
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1 relative'>
        <button
          type='button'
          className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          aria-haspopup='listbox'
          aria-expanded='true'
          aria-labelledby='listbox-label'
          onClick={handleOpen}
        >
          <span className='flex items-center'>
            <span className='block truncate'>
              {selected === null ? 'Selecciona una opción' : selected}
            </span>
          </span>
          <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            {/* <!-- Heroicon name: solid/selector --> */}
            <svg
              className='h-5 w-5 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </button>

        {open && (
          <ul
            className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'
            tabIndex={-1}
            role='listbox'
            aria-labelledby='listbox-label'
            aria-activedescendant='listbox-option-3'
          >
            {items?.map((item: any) => (
              <li
                className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
                id='listbox-option-0'
                role='option'
                key={item.id}
              >
                <div className='flex items-center w-full justify-between'>
                  <span
                    className={`${
                      selected === item && 'font-bold'
                    }font-normal ml-3 block truncate cursor-pointer`}
                    onClick={handleSelect(item.name)}
                  >
                    {item.name}
                  </span>

                  {selected === item.name && (
                    <span>
                      <CheckIcon />
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
