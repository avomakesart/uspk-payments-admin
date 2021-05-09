import React from 'react';
import { orderStatus, stockStatus } from '../../utils';

interface BadgeProps {
  orderType?: string;
  stockType?: string;
  text: string;
}

export const Badge: React.FC<BadgeProps> = ({ orderType, stockType, text }) => {
  return (
    <span
      className={`px-2 inline-flex leading-5 font-semibold rounded-full ${
        orderType && orderStatus(orderType)
      } ${stockType && stockStatus(stockType)}`}
    >
      {text}
    </span>
  );
};
