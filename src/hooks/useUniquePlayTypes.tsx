import {useState, useEffect} from 'react';
import {ProductType} from '../types';

export const useUniquePlayTypes = (products: ProductType[]) => {
  const [uniquePlayTypes, setUniquePlayTypes] = useState<string[]>([]);

  useEffect(() => {
    const playTypes = products.reduce((acc: string[], product) => {
      const productPlayTypes = Array.isArray(product.playTypes)
        ? product.playTypes
        : [product.playTypes];
      productPlayTypes.forEach((playType) => {
        if (!acc.includes(playType)) {
          acc.push(playType);
        }
      });
      return acc;
    }, []);

    setUniquePlayTypes(playTypes);
  }, [products]);

  return uniquePlayTypes;
};
