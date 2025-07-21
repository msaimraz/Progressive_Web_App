import React from 'react';

import {ProductType} from '../types';

type Props = {
  product: ProductType;
  containerStyle?: React.CSSProperties;
};

export const Sale: React.FC<Props> = ({
  containerStyle,
  product,
}): JSX.Element | null => {
  if (product.oldPrice) {
    return (
      <div
        style={{
          backgroundColor: '#86D2A5',
          padding: '0 6px',
          borderRadius: 12,
          ...containerStyle,
        }}
      >
        <span
          className='t12'
          style={{
            color: 'var(--white-color)',
          }}
        >
          sale
        </span>
      </div>
    );
  }

  return null;
};
