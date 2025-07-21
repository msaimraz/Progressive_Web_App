import {useDispatch as useDispatchRedux} from 'react-redux';
import {useNavigate as useNavigateRedux} from 'react-router-dom';
import {useLocation as useLocationRedux} from 'react-router-dom';

import {Action} from 'redux';
import {RootState} from '../store';
import {ThunkDispatch} from 'redux-thunk';

// API hooks
import {useOrders} from './useOrders';
import {useProducts} from './useProducts';
import {useUniqueTags} from './useUniqueTags';
import {usePromocodes} from './usePromocodes';

// UI hooks
import {useThemeColor} from './useThemeColor';
import {useCategories} from './useCategories';
import {useUniqueColors} from './useUniqueColors';
import {useUniqueAgeGroups} from './useUniqueAgeGroups';
import {useUniquePlayTypes} from './useUniquePlayTypes';

export const useNavigate = () => useNavigateRedux();
export const useDispatch = () =>
  useDispatchRedux<ThunkDispatch<RootState, void, Action>>();
export const useLocation = () => useLocationRedux();

export const hooks = {
  useOrders,
  useProducts,
  useNavigate,
  useDispatch,
  useLocation,
  usePromocodes,
  useThemeColor,
  useUniqueTags,
  useCategories,
  useUniqueColors,
  useUniqueAgeGroups,
  useUniquePlayTypes,
};
