import {Action} from 'redux';
import React, {useEffect} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';

import {hooks} from '../../hooks';
import {RootState} from '../../store';
import {CategoryType} from '../../types';
import {actions} from '../../store/actions';
import {components} from '../../components';

import background from '../../assets/bg/02.png';

export const Categories: React.FC = () => {
  const navigate = hooks.useNavigate();
  const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();

  const {categoriesLoading, categories} = hooks.useCategories();

  hooks.useThemeColor('#fff');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#fff'));
  }, [dispatch]);

  const renderBackground = (): JSX.Element => {
    return (
      <img
        src={background}
        alt='background'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          inset: 0,
        }}
      />
    );
  };

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        search={true}
        showBurger={true}
        showBasket={true}
        headerStyle={{
          backgroundColor: 'transparent',
        }}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    if (categoriesLoading) return <components.Loader />;

    return (
      <main
        className='scrollable container'
        style={{paddingTop: 15, paddingBottom: 20}}
      >
        <div
          style={{
            gap: 15,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {categories.map((category: CategoryType, index) => {
            return (
              <button
                key={index}
                style={{
                  width: '100%',
                  borderRadius: 20,
                  position: 'relative',
                  border: '1px solid #C8CDD9',
                }}
                onClick={() => {
                  navigate('/shop');
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                  }}
                />
                <div
                  className='t16'
                  style={{
                    width: 'calc(100% - 20px)',
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: 0,
                    margin: 10,
                    padding: '5px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 20,
                    color: 'var(--main-color)',
                  }}
                >
                  {category.name}
                </div>
              </button>
            );
          })}
        </div>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return <components.Footer />;
  };

  return (
    <>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </>
  );
};
