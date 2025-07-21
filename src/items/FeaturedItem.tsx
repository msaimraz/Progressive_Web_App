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
  index: number;
  isLast: boolean;
  product: ProductType;
};

export const FeaturedItem: React.FC<Props> = ({product, index, isLast}) => {
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
    // Item
    <div
      style={{
        borderRadius: 20,
        width: 200,
        marginLeft: index === 0 ? 20 : 0,
        marginRight: isLast ? 20 : 0,
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/product/${product.id}`, {state: {product}})}
    >
      {/* Image */}
      <div
        style={{
          borderRadius: 20,
          backgroundColor: product.imageColor,
          marginBottom: 12,
          position: 'relative',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: 250,
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
      <h5
        className='t14 number-of-lines-1'
        style={{
          color: 'var(--main-color)',
          fontWeight: 600,
          marginBottom: 5,
          textAlign: 'center',
        }}
      >
        {product.name}
      </h5>
      <span
        className='t16'
        style={{
          display: 'block',
          textAlign: 'center',
          color: 'var(--text-color)',
        }}
      >
        ${product.price}
      </span>
    </div>
  );
};
