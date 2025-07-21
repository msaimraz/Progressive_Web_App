import React, {useRef, useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {useSelector} from 'react-redux';
import {Swiper as SwiperType} from 'swiper';

import {items} from '../items';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {ColorType} from '../types';
import {RootState} from '../store';
import {ReviewType} from '../types';
import {actions} from '../store/actions';
import {components} from '../components';
import {useReviews} from '../hooks/useReviews';
import {addToCart} from '../store/slices/cartSlice';
import {removeFromCart} from '../store/slices/cartSlice';
import {addToWishlist} from '../store/slices/wishlistSlice';
import {removeFromWishlist} from '../store/slices/wishlistSlice';

export const Product: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const cart = useSelector((state: RootState) => state.cartSlice);

  const {reviewsLoading, reviews} = useReviews();
  const location = hooks.useLocation();

  const swiperRef = useRef<SwiperCore | null>(null);

  const product = location.state.product;

  const isLoading = reviewsLoading || !product;

  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[1].name,
  );

  const wishlist = useSelector((state: RootState) => state.wishlistSlice);
  const ifInWishlist = wishlist.list.find((item) => item.id === product.id);

  const updatedProduct = {
    ...product,
    color: selectedColor,
  };

  hooks.useThemeColor('#f5fafb');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#f5fafb'));
  }, [dispatch]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlide(swiper.activeIndex);
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

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        showGoBack={true}
        showBasket={true}
      />
    );
  };

  const renderCarousel = (): JSX.Element => {
    return (
      <section style={{marginBottom: 20, marginTop: 4, position: 'relative'}}>
        <Swiper
          spaceBetween={15}
          slidesPerView={'auto'}
          pagination={{clickable: true}}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        >
          {product.images.map(
            (item: string, index: number, array: string[]) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      borderRadius: 20,
                    }}
                  >
                    <img
                      src={item}
                      alt={'product'}
                      style={{
                        width: '100%',
                        borderRadius: 20,
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            },
          )}
        </Swiper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 27,
            zIndex: 1,
            width: '100%',
            gap: 6,
          }}
        >
          {product.images.map((item: string, index: number) => {
            return (
              <div
                key={index}
                style={{
                  width: 22,
                  height: 6,
                  borderRadius: 10,
                  backgroundColor:
                    activeSlide === index
                      ? 'var(--main-color)'
                      : 'var(--white-color)',
                }}
              />
            );
          })}
        </div>
      </section>
    );
  };

  const renderNameWithButton = (): JSX.Element => {
    return (
      <section
        className='container row-center-space-between'
        style={{marginBottom: 2}}
      >
        <h3 className='number-of-lines-1'>{product.name}</h3>
        <button
          onClick={wishlistHandler}
          style={{borderRadius: '50%'}}
        >
          <svg.HeartBigSvg product={product} />
        </button>
      </section>
    );
  };

  const renderRatingWithStatus = (): JSX.Element => {
    return (
      <div
        style={{marginBottom: 3}}
        className='container row-center'
      >
        <components.Rating product={product} />
        <span
          className='t16'
          style={{
            color: '#15C7FF',
            marginLeft: 8,
          }}
        >
          In Stock
        </span>
      </div>
    );
  };

  const renderPriceWithCounter = (): JSX.Element => {
    const ifProductInCart = cart.list.find((item) => item.id === product.id);
    const qty = ifProductInCart ? ifProductInCart.quantity : 0;
    return (
      <div
        className='container row-center-space-between'
        style={{marginBottom: 21}}
      >
        <span
          style={{
            fontSize: 24,
            fontFamily: 'League Spartan',
          }}
        >
          ${product.price}
        </span>
        <div
          style={{
            padding: '12px 18px',
            borderRadius: 40,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 23,
            backgroundColor: 'var(--white-color)',
          }}
        >
          <button
            onClick={() => {
              dispatch(removeFromCart(product));
            }}
          >
            <svg.MinusSvg />
          </button>
          <span
            className='t16'
            style={{marginTop: 2}}
          >
            {qty}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            <svg.PlusSvg />
          </button>
        </div>
      </div>
    );
  };

  const renderColors = (): JSX.Element => {
    return (
      <section
        className='row-center'
        style={{
          paddingBottom: 20,
          gap: 20,
          borderBottom: '1px solid #C8CDD9',
          marginBottom: 28,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <h5>Colors</h5>
        <div
          style={{
            gap: 10,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {product.colors.map((color: ColorType, index: number) => {
            return (
              <div
                key={index}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  backgroundColor: color.code,
                  border: `2px solid ${
                    selectedColor === color.name
                      ? 'var(--main-color)'
                      : color.code
                  }`,
                }}
                className='center clickable'
                onClick={() => {
                  setSelectedColor(color.name);
                }}
              />
            );
          })}
        </div>
      </section>
    );
  };

  const renderDescription = (): JSX.Element => {
    return (
      <section
        style={{
          borderBottom: '1px solid #C8CDD9',
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 13,
          marginBottom: 28,
        }}
      >
        <h5 style={{marginBottom: 12}}>Description</h5>
        <p
          style={{marginBottom: 16}}
          className='t18'
        >
          {product.description.length > 200
            ? `${product.description.slice(0, 100)}...`
            : product.description}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            className='t18'
            style={{color: 'var(--main-color)'}}
            onClick={() => {
              navigate('/description', {
                state: {product},
              });
            }}
          >
            Read more
          </button>
        </div>
      </section>
    );
  };

  const renderReviews = (): JSX.Element => {
    return (
      <section
        style={{marginBottom: 30}}
        className='container'
      >
        <components.BlockHeading
          title='Reviews'
          containerStyle={{marginBottom: 14}}
          viewAllOnClick={() => navigate('/reviews')}
        />
        {reviews
          ?.slice(0, 2)
          .map((review: ReviewType, index: number, array: ReviewType[]) => {
            const isLast = index === array.length - 1;
            return (
              <items.ReviewItem
                key={review.id}
                review={review}
                isLast={isLast}
              />
            );
          })}
      </section>
    );
  };

  const renderButtons = (): JSX.Element => {
    return (
      <section
        className='container'
        style={{marginBottom: 20}}
      >
        <components.Button
          text='+ Add to cart'
          containerStyle={{marginBottom: 16}}
          onClick={() => {
            dispatch(addToCart(updatedProduct));
          }}
        />
        <components.Button
          text='Leave a review'
          to='/leave-a-reviews'
          colorScheme='secondary'
        />
      </section>
    );
  };

  const renderContent = (): JSX.Element => {
    if (isLoading) return <components.Loader />;

    return (
      <main className='scrollable'>
        {renderCarousel()}
        {renderNameWithButton()}
        {renderRatingWithStatus()}
        {renderPriceWithCounter()}
        {renderColors()}
        {renderDescription()}
        {renderReviews()}
        {renderButtons()}
      </main>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  );
};
