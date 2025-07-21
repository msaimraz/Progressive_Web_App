import React from 'react';

import {svg} from '../assets/svg';
import {ProductType} from '../types';

type Props = {
  product?: ProductType;
  style?: React.CSSProperties;
  rating?: number;
};

export const Rating: React.FC<Props> = ({style, product, rating}) => {
  return (
    <div
      style={{
        width: 44,
        backgroundColor: '#F5FAFB',
        borderRadius: 20,
        ...style,
      }}
      className='t12 center'
    >
      <svg.StarSvg />
      <span style={{marginTop: 2, color: 'var(--text-color)', marginLeft: 4}}>
        {product?.rating.toFixed(1)
          ? product.rating.toFixed(1)
          : rating?.toFixed(1)}
      </span>
    </div>
  );
};
