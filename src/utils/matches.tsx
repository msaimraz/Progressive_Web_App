import {ProductType, ColorType} from '../types';

export const colorMatch = (
  product: ProductType,
  selectedColors: string[],
): boolean => {
  return selectedColors.length === 0
    ? true
    : selectedColors.some((selectedColor) =>
        product.colors.some(
          (productColor: ColorType) => productColor.name === selectedColor,
        ),
      );
};

export const tagMatch = (
  product: ProductType,
  selectedTags: string[],
): boolean => {
  return selectedTags.length === 0
    ? true
    : selectedTags.some((tag) => product.tags.includes(tag));
};

export const statusMatch = (
  product: ProductType,
  selectedCategories: string[],
): boolean => {
  return selectedCategories.length === 0
    ? true
    : (product.isNew && selectedCategories.includes('new')) ||
        (product.isTop && selectedCategories.includes('top')) ||
        (!!product.oldPrice && selectedCategories.includes('sale'));
};

export const playTypeMatch = (
  product: ProductType,
  selectedPlayTypes: string[],
): boolean => {
  return selectedPlayTypes.length === 0
    ? true
    : selectedPlayTypes.some((playType) =>
        product.playTypes.includes(playType),
      );
};

export const ageGroupMatch = (
  product: ProductType,
  selectedAgeGroups: string[],
): boolean => {
  return selectedAgeGroups.length === 0
    ? true
    : selectedAgeGroups.some((ageGroup) => product.ageGroup.includes(ageGroup));
};
