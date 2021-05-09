import React, { CSSProperties, MouseEventHandler } from 'react';

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  borderColor: string;
  hasBorder?: boolean;
  style?: CSSProperties;
  type?: any;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  text,
  hasBorder,
  borderColor,
  onClick,
  style,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 font-semibold text-${textColor} transition duration-500 ease-in-out transform bg-${backgroundColor} ${
        hasBorder ? `border-2 border-${borderColor}` : ''
      } rounded-lg w-full hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2`}
      style={style}
      type={type}
    >
      {text}
    </button>
  );
};
