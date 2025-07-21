import React, {useEffect} from 'react';

import {items} from '../items';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {PromocodeType} from '../types';
import {actions} from '../store/actions';
import {components} from '../components';

export const MyPromocodes: React.FC = () => {
  const dispatch = hooks.useDispatch();

  const {promocodesLoading, promocodes} = hooks.usePromocodes();

  hooks.useThemeColor('#f5fafb');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actions.setColor('#f5fafb'));
  }, [dispatch]);

  const renderHeader = (): JSX.Element => {
    return (
      <components.Header
        title='My Promocodes'
        showGoBack={true}
      />
    );
  };

  const renderContent = (): JSX.Element => {
    if (promocodesLoading) return <components.Loader />;

    return (
      <main
        className='scrollable'
        style={{padding: '32px 20px 20px 20px'}}
      >
        <section
          style={{
            display: 'grid',
            gap: 15,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {promocodes?.map((promocode: PromocodeType, index, array) => {
            const isLast = index === array.length - 1;

            return (
              <items.PromocodeItem
                isLast={isLast}
                key={promocode.id}
                promocode={promocode}
              />
            );
          })}
        </section>
      </main>
    );
  };

  const renderFooter = (): JSX.Element => {
    return (
      <section
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--main-background)',
        }}
        className='clickable'
      >
        <svg.NewPromocodeSvg />
      </section>
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
