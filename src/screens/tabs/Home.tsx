import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {items} from '../../items';
import {hooks} from '../../hooks';
import {ProductType} from '../../types';
import {CategoryType} from '../../types';
import {components} from '../../components';
import {actions} from '../../store/actions';
import {useBanners} from '../../hooks/useBanners';
import {useProducts} from '../../hooks/useProducts';
import {useCategories} from '../../hooks/useCategories';

export const Home: React.FC = () => {
  const dispatch = hooks.useDispatch();
  const navigate = hooks.useNavigate();

  const {bannersLoading, banners} = useBanners();
  const {productsLoading, products} = useProducts();
  const {categoriesLoading, categories} = useCategories();

  const isLoading = productsLoading || categoriesLoading || bannersLoading;

  const banner = banners[0] as any;

  hooks.useThemeColor('#F5FAFB');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#F5FAFB'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        showLogo={true}
        showBurger={true}
        showBasket={true}
      />
    );
  };

  const renderCategories = (): JSX.Element => {
    return (
      <div style={{marginBottom: 35, marginTop: 20}}>
        <div style={{width: '100%'}}>
          <Swiper
            spaceBetween={12}
            slidesPerView={'auto'}
            pagination={{clickable: true}}
          >
            {categories.map(
              (category: CategoryType, index: number, array: string[]) => {
                const isLast = index === array.length - 1;
                return (
                  <SwiperSlide
                    key={category.id}
                    style={{width: 'auto'}}
                  >
                    <div
                      className='t16 clickable'
                      style={{
                        borderRadius: 20,
                        color: 'var(--main-color)',
                        padding: '8px 16px',
                        border: '1px solid #C8CDD9',
                        textTransform: 'capitalize',
                        marginLeft: index === 0 ? 20 : 0,
                        marginRight: isLast ? 20 : 0,
                      }}
                      onClick={() => navigate(`/shop`)}
                    >
                      {category.name}
                    </div>
                  </SwiperSlide>
                );
              },
            )}
          </Swiper>
        </div>
      </div>
    );
  };

  const renderFeatured = (): JSX.Element => {
    return (
      <div style={{marginBottom: 40}}>
        <div style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 14}}>
          <components.BlockHeading
            title='Best sellers'
            viewAllOnClick={() => {
              navigate('/shop', {state: {category: 'Featured'}});
            }}
          />
        </div>

        <div style={{width: '100%'}}>
          <Swiper
            spaceBetween={15}
            slidesPerView={'auto'}
            pagination={{clickable: true}}
            navigation={true}
            mousewheel={true}
          >
            {products.map(
              (product: ProductType, index: number, array: ProductType[]) => {
                const isLast = index === array.length - 1;
                return (
                  <SwiperSlide
                    key={product.id}
                    style={{width: 'auto'}}
                  >
                    <items.FeaturedItem
                      index={index}
                      isLast={isLast}
                      product={product}
                    />
                  </SwiperSlide>
                );
              },
            )}
          </Swiper>
        </div>
      </div>
    );
  };

  const renderBanner = (): JSX.Element => {
    return (
      <div
        className='container clickable'
        style={{marginBottom: 40}}
      >
        <img
          alt='Banner'
          src={banner?.image as any}
          style={{width: '100%', borderRadius: 20}}
          onClick={() => {
            navigate('/shop');
          }}
        />
      </div>
    );
  };

  const renderBestSellers = (): JSX.Element => {
    return (
      <div style={{paddingBottom: 20}}>
        <div style={{paddingLeft: 20, paddingRight: 20, paddingBottom: 14}}>
          <components.BlockHeading
            title='Best Sellers'
            viewAllOnClick={() => {
              navigate('/shop', {state: {category: 'Best sellers'}});
            }}
          />
        </div>

        <div
          style={{width: '100%'}}
          className='container'
        >
          {products.map(
            (product: ProductType, index: number, array: ProductType[]) => {
              const isLast = index === array.length - 1;
              return (
                <items.BestSellerItem
                  key={product.id}
                  index={index}
                  isLast={isLast}
                  product={product}
                />
              );
            },
          )}
        </div>
      </div>
    );
  };

  const renderFooter = (): JSX.Element => {
    return <components.Footer />;
  };

  const renderContent = (): JSX.Element => {
    if (isLoading) return <components.Loader />;

    return (
      <main className='scrollable'>
        {renderCategories()}
        {renderFeatured()}
        {renderBanner()}
        {renderBestSellers()}
      </main>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </>
  );
};
