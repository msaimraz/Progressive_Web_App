import React from 'react';

import {ProductType} from '../types';

type Props = {
  product: ProductType;
  containerStyle?: React.CSSProperties;
};

export const Price: React.FC<Props> = ({product, containerStyle}) => {
  return (
    <div
      className='row-center'
      style={{...containerStyle}}
    >
      {product.oldPrice && (
        <span
          style={{marginRight: 4}}
          className='t12'
        >
          ${product.oldPrice}
        </span>
      )}
      <span className='t16'>${product.price}</span>
    </div>
  );
};
