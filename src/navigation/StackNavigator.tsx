import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import {screens} from '../screens';
import {TabNavigator} from './TabNavigator';

export enum Routes {
  SignIn = '/',
  OrderHistory = '/profile/orders',
  OrderHistoryEmpty = '/profile/orders-empty',
  EditProfile = '/profile/edit',
  InfoSaved = '/info-saved',
  VerifyYourEmail = '/verify-your-email',
  MyPromocodes = '/profile/promocodes',
  NewPassword = '/new-password',
  Filter = '/filter',
  SignUp = '/sign-up',
  SignUpAccountCreated = '/sign-up-account-created',
  ForgotPassword = '/forgot-password',
  OrderSuccessful = '/order-successful',
  Checkout = '/checkout',
  ForgotPasswordSentEmail = '/forgot-password-sent-email',
  Shop = '/shop',
  Reviews = '/reviews',
  Description = '/description',
  LeaveAReviews = '/leave-a-reviews',
  Product = '/product/:id',
  MyPromocodesEmpty = '/profile/promocodes-empty',
  TabNavigator = '/tab-navigator',
  Verification = '/verification',
  SendEmailOtp = '/send-email-otp',
  VerifyEmail = '/verify-email',
  SendPhoneOtp = '/send-phone-otp',
  VerifyPhone = '/verify-phone',
  EmailVerified = '/email-verified',
  PhoneVerified = '/phone-verified',
  ShippingAPaymentInfo = '/shipping-a-payment-info',
  OrderFailed = '/order-failed',
}

const stack = createBrowserRouter([
  {
    path: Routes.SignIn,
    element: <screens.SignIn />,
  },
  {
    path: Routes.OrderHistory,
    element: <screens.OrderHistory />,
  },
  {
    path: Routes.OrderFailed,
    element: <screens.OrderFailed />,
  },
  {
    path: Routes.OrderHistoryEmpty,
    element: <screens.OrderHistoryEmpty />,
  },
  {
    path: Routes.EmailVerified,
    element: <screens.EmailVerified />,
  },
  {
    path: Routes.PhoneVerified,
    element: <screens.PhoneVerified />,
  },
  {
    path: Routes.ShippingAPaymentInfo,
    element: <screens.ShippingAPaymentInfo />,
  },
  {
    path: Routes.SendPhoneOtp,
    element: <screens.SendPhoneOtp />,
  },
  {
    path: Routes.VerifyPhone,
    element: <screens.VerifyPhone />,
  },
  {
    path: Routes.EditProfile,
    element: <screens.EditProfile />,
  },
  {
    path: Routes.InfoSaved,
    element: <screens.InfoSaved />,
  },
  {
    path: Routes.VerifyYourEmail,
    element: <screens.VerifyYourEmail />,
  },
  {
    path: Routes.MyPromocodes,
    element: <screens.MyPromocodes />,
  },
  {
    path: Routes.SendEmailOtp,
    element: <screens.SendEmailOtp />,
  },
  {
    path: Routes.VerifyEmail,
    element: <screens.VerifyEmail />,
  },
  {
    path: Routes.NewPassword,
    element: <screens.NewPassword />,
  },
  {
    path: Routes.Filter,
    element: <screens.Filter />,
  },
  {
    path: Routes.SignUp,
    element: <screens.SignUp />,
  },
  {
    path: Routes.SignUpAccountCreated,
    element: <screens.SignUpAccountCreated />,
  },
  {
    path: Routes.ForgotPassword,
    element: <screens.ForgotPassword />,
  },
  {
    path: Routes.OrderSuccessful,
    element: <screens.OrderSuccessful />,
  },
  {
    path: Routes.Filter,
    element: <screens.Filter />,
  },
  {
    path: Routes.Checkout,
    element: <screens.Checkout />,
  },
  {
    path: Routes.ForgotPasswordSentEmail,
    element: <screens.ForgotPasswordSentEmail />,
  },
  {
    path: Routes.Shop,
    element: <screens.Shop />,
  },
  {
    path: Routes.Reviews,
    element: <screens.Reviews />,
  },
  {
    path: Routes.Description,
    element: <screens.Description />,
  },
  {
    path: Routes.LeaveAReviews,
    element: <screens.LeaveAReviews />,
  },
  {
    path: Routes.Product,
    element: <screens.Product />,
  },
  {
    path: Routes.LeaveAReviews,
    element: <screens.LeaveAReviews />,
  },
  {
    path: Routes.MyPromocodesEmpty,
    element: <screens.MyPromocodesEmpty />,
  },
  {
    path: Routes.TabNavigator,
    element: <TabNavigator />,
  },
]);

export const StackNavigator: React.FC = () => {
  return <RouterProvider router={stack} />;
};
