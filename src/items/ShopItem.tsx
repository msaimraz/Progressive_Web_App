import React from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {RootState} from '../store';
import {ProductType} from '../types';
import {components} from '../components';
import {addToCart} from '../store/slices/cartSlice';
import {addToWishlist} from '../store/slices/wishlistSlice';
import {removeFromWishlist} from '../store/slices/wishlistSlice';

type Props = {
  isLast: boolean;
  product: ProductType;
};

export const ShopItem: React.FC<Props> = ({product, isLast}) => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const wishlist = useSelector((state: RootState) => state.wishlistSlice);

  const ifInWishlist = wishlist.list.find((item) => item.id === product.id);

  const wishlistHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (ifInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const cartHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div>
      {/* Image */}
      <div
        style={{
          borderRadius: 20,
          marginBottom: 12,
          position: 'relative',
          backgroundColor: product.imageColor,
        }}
        onClick={() => navigate(`/product/${product.id}`, {state: {product}})}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: 170,
            objectFit: 'contain',
            borderRadius: 20,
          }}
        />
        <components.Rating
          product={product}
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
          }}
        />
        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className='clickable'
            onClick={wishlistHandler}
            style={{padding: '10px 10px 5px 10px', borderRadius: 5}}
          >
            <svg.HeartSvg product={product} />
          </div>

          <div
            className='clickable'
            onClick={cartHandler}
            style={{padding: '5px 10px 10px 10px', borderRadius: 5}}
          >
            <svg.BagSvg />
          </div>
        </div>
      </div>
      {/* Description */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          alignItems: 'center',
        }}
      >
        <h6
          className='number-of-lines-1'
          style={{textAlign: 'center', marginBottom: 2}}
        >
          {product.name}
        </h6>
        <components.Price product={product} />
      </div>
    </div>
  );
};
