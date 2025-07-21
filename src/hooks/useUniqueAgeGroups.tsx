import {useState, useEffect} from 'react';
import {ProductType} from '../types';

export const useUniqueAgeGroups = (products: ProductType[]) => {
  const [uniqueAgeGroups, setUniqueAgeGroups] = useState<string[]>([]);

  useEffect(() => {
    const ageGroups = products.reduce((acc: string[], product) => {
      const productAgeGroups = Array.isArray(product.ageGroup)
        ? product.ageGroup
        : [product.ageGroup];
      productAgeGroups.forEach((ageGroup) => {
        if (!acc.includes(ageGroup)) {
          acc.push(ageGroup);
        }
      });
      return acc;
    }, []);

    setUniqueAgeGroups(ageGroups);
  }, [products]);

  return uniqueAgeGroups;
};
