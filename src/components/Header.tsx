import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {RootState} from '../store';
import {setScreen} from '../store/slices/tabSlice';

type Props = {
  title?: string;
  search?: boolean;
  showLogo?: boolean;
  showGoBack?: boolean;
  showBasket?: boolean;
  showBurger?: boolean;
  headerStyle?: React.CSSProperties;
};

export const Header: React.FC<Props> = ({
  title,
  search,
  showLogo,
  showBurger,
  showGoBack,
  showBasket,
  headerStyle,
}) => {
  const navigate = hooks.useNavigate();
  const location = hooks.useLocation();
  const dispatch = hooks.useDispatch();

  const currentScreen = useSelector(
    (state: RootState) => state.tabSlice.screen,
  );

  const [showModal, setShowModal] = useState(false);
  const [themeColor, setThemeColor] = useState('#fff');

  hooks.useThemeColor(themeColor);

  const cart = useSelector((state: RootState) => state.cartSlice);

  const renderBurger = (): JSX.Element | null => {
    if (!showBurger) return null;

    return (
      <button
        style={{
          height: '100%',
          width: 'auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
        }}
        className='clickable'
        onClick={() => {
          setThemeColor('#F5FAFB');
          setShowModal(true);
        }}
      >
        <svg.BurgerSvg />
      </button>
    );
  };

  const renderGoBack = (): JSX.Element | null => {
    if (showGoBack && location.key !== 'default')
      return (
        <div
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            left: 0,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
          }}
          className='clickable'
        >
          <svg.GoBackSvg />
        </div>
      );

    return null;
  };

  const renderTitle = (): JSX.Element | null => {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h4 style={{marginBottom: 2}}>{title}</h4>
      </div>
    );
  };

  const renderLogo = (): JSX.Element | null => {
    if (!showLogo) return null;

    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          height: '100%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <svg.LogoSvg />
      </div>
    );
  };

  const renderSearch = (): JSX.Element | null => {
    if (!search) return null;

    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          height: '100%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <svg.SearchHeaderSvg />
      </div>
    );
  };

  const renderBasket = (): JSX.Element | null => {
    if (!showBasket) return null;

    return (
      <button
        onClick={() => {
          dispatch(setScreen('Order'));
          navigate('/tab-navigator');
        }}
        style={{
          height: '100%',
          width: 'auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          right: 0,
        }}
      >
        <div
          className='t10'
          style={{
            position: 'absolute',
            backgroundColor: 'var(--accent-color)',
            padding: '5px 4px 3px 4px',
            borderRadius: '12px',
            bottom: 10,
            right: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: 'var(--main-color)',
            }}
          >
            ${cart.total > 0 ? cart.total.toFixed(2) : '0'}
          </span>
        </div>
        <svg.BasketSvg />
      </button>
    );
  };

  const renderModal = (): JSX.Element | null => {
    if (!showModal) return null;
    return (
      <>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(30, 37, 56, 0.6)',
            zIndex: 101,
            cursor: 'pointer',
          }}
          onClick={() => {
            if (currentScreen === 'Wishlist') {
              setThemeColor('#F5FAFB');
            }

            if (currentScreen === 'Home') {
              setThemeColor('#F5FAFB');
            }

            setShowModal(false);
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '72%',
            backgroundColor: 'var(--main-background)',
            zIndex: 101,
          }}
        >
          <div
            style={{
              paddingTop: '20%',
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 27,
            }}
          >
            <h2 style={{textTransform: 'capitalize'}}>Contact us</h2>
          </div>
          {/* Address */}
          <div
            style={{
              paddingLeft: 20,
              display: 'flex',
              marginBottom: 20,
              paddingBottom: 20,
              flexDirection: 'row',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <svg.MapPinSvg />
            <div
              style={{
                marginLeft: 8,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className='t18 number-of-lines-1'>
                27 Division St, New York,
              </span>
              <span className='t18 number-of-lines-1'>NY 10002, USA</span>
            </div>
          </div>
          {/* Email */}
          <div
            style={{
              paddingLeft: 20,
              display: 'flex',
              marginBottom: 20,
              paddingBottom: 20,
              flexDirection: 'row',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <svg.ModalMailSvg />
            <div
              style={{
                marginLeft: 8,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className='t18 number-of-lines-1'>
                brainnestsale@mail.com
              </span>
              <span className='t18 number-of-lines-1'>
                brainnestsupport@mail.com
              </span>
            </div>
          </div>
          {/* Phone */}
          <div
            style={{
              paddingLeft: 20,
              display: 'flex',
              paddingBottom: 20,
              flexDirection: 'row',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            <svg.PhoneCallSvg />
            <div
              style={{
                marginLeft: 8,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className='t18 number-of-lines-1'>+17 123456789</span>
              <span className='t18 number-of-lines-1'>+17 987654321</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <header
        style={{
          position: 'relative',
          height: 'var(--header-height)',
          backgroundColor: 'var(--main-background)',
          ...headerStyle,
        }}
        className='row-center-space-between'
      >
        {renderBurger()}
        {renderGoBack()}
        {renderTitle()}
        {renderLogo()}
        {renderSearch()}
        {renderBasket()}
      </header>
      {renderModal()}
    </>
  );
};
