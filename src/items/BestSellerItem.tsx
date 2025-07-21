import React from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {ProductType} from '../types';
import {RootState} from '../store';
import {components} from '../components';
import {addToCart} from '../store/slices/cartSlice';
import {addToWishlist, removeFromWishlist} from '../store/slices/wishlistSlice';

type Props = {
  index: number;
  isLast: boolean;
  product: ProductType;
};

export const BestSellerItem: React.FC<Props> = ({product, index, isLast}) => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const wishlist = useSelector((state: RootState) => state.wishlistSlice);

  const ifInWishlist = wishlist.list.find((item) => item.id === product.id);

  const cartHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  const wishlistHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    if (ifInWishlist) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    // Item
    <div
      style={{
        height: 100,
        padding: 10,
        display: 'flex',
        borderRadius: 20,
        position: 'relative',
        marginBottom: isLast ? 0 : 8,
        backgroundColor: 'var(--white-color)',
      }}
      className='clickable'
      onClick={() => navigate(`/product/${product.id}`, {state: {product}})}
    >
      {/* Image */}
      <div
        style={{
          width: 80,
          borderRadius: 12,
          marginRight: 14,
          backgroundColor: product.imageColor,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
      {/* Description */}
      <div
        style={{
          marginRight: 'auto',
          flexDirection: 'column',
          height: '100%',
          display: 'flex',
        }}
      >
        <h6
          style={{marginBottom: 5, marginTop: 2}}
          className='number-of-lines-1'
        >
          {product.name}
        </h6>
        <components.Price
          product={product}
          containerStyle={{
            marginBottom: 'auto',
          }}
        />
        <components.Rating
          product={product}
          style={{
            backgroundColor: '#F5FAFB',
          }}
        />
      </div>
      {/* Buttons */}
      <div>
        <button
          style={{
            position: 'absolute',
            right: 6,
            top: 6,
            padding: 10,
            borderRadius: 5,
          }}
          onClick={wishlistHandler}
        >
          <svg.BestSellerHeartSvg product={product} />
        </button>
        <button
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: 10,
            borderRadius: 5,
          }}
          onClick={cartHandler}
        >
          <svg.BagSvg />
        </button>
      </div>
    </div>
  );
};
