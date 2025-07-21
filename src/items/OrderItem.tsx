import React from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {RootState} from '../store';
import {ProductType} from '../types';
import {components} from '../components';
import {actions} from '../store/actions';
import {removeFromCart} from '../store/slices/cartSlice';

type Props = {
  isLast: boolean;
  product: ProductType;
};

export const OrderItem: React.FC<Props> = ({product, isLast}) => {
  const navigate = hooks.useNavigate();
  const dispatch = hooks.useDispatch();

  const cart = useSelector((state: RootState) => state.cartSlice);
  const ifInCart = cart.list.find((item) => item.id === product.id);
  const qty = ifInCart ? ifInCart.quantity : 0;

  return (
    <div
      style={{
        padding: 10,
        borderRadius: 20,
        position: 'relative',
        marginBottom: isLast ? 0 : 8,
        backgroundColor: 'var(--white-color)',
      }}
      className='row-center'
      onClick={() => navigate(`/product/${product.id}`, {state: {product}})}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          backgroundColor: product.imageColor,
          borderRadius: 12,
          marginRight: 10,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: 80,
            height: 80,
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
      {/* Info */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <h6
          className='t14 number-of-lines-1'
          style={{
            color: 'var(--main-color)',
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          {product.name}
        </h6>
        <components.Price product={product} />
      </div>
      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          right: 0,
          height: '100%',
          padding: 10,
        }}
      >
        <button
          style={{borderRadius: 10}}
          onClick={(event) => {
            event.stopPropagation();
            dispatch(actions.addToCart(product));
          }}
        >
          <svg.OrderPlusSvg />
        </button>
        <span
          className='t10'
          style={{color: 'var(--main-color)'}}
        >
          {qty}
        </span>
        <button
          style={{borderRadius: 10}}
          onClick={(event) => {
            event.stopPropagation();
            dispatch(removeFromCart(product));
          }}
        >
          <svg.OrderMinusSvg />
        </button>
      </div>
    </div>
  );
};
