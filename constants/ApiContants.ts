// static pages
export const BASE_URL = 'http://38.0.101.76:5001/';
export const PRIVACY_POLICY_URL =
  BASE_URL + 'pages/page-view/customer-privacy-policy';
export const TERMS_CONDITIONS_URL =
  BASE_URL + 'pages/page-view/customer-terms-conditions';

export const ABOUT_US_URL = BASE_URL + 'pages/page-view/customer-about-us';


// apis
export const LOGIN_URL = 'auth/log-in';
export const REGISTER_URL = 'auth/sign-up';
export const REQUEST_OTP_URL = 'auth/request-otp';
export const IS_EMAIL_EXISTS_URL = 'auth/is-email-exists';
export const VERIFY_OTP_URL = 'auth/verify-otp';
export const CHECK_SOCIAL_URL = 'auth/check-social';
export const APPLE_REGISTRATION_URL = 'auth/apple-sign-up';
export const RESET_PASSWORD_URL = 'auth/reset-password';
export const LOGOUT_URL = 'auth/log-out';
export const CHANGE_PASSWORD_URL = 'users/password';
export const EDIT_PROFILE_URL = 'users/profile';
export const GET_USER_PROFILE_URL = 'users/profile';
export const GET_UPLOAD_FILE_URL = 'utils/upload-file';
export const GET_VEHICLE_TYPES = 'utils/vehicle-types';
export const NOTIFICATIONS_URL = BASE_URL + '/users/notifications';
const SOCKET_API_URL = 'socket/';

export const SEND_OTP_USER_URL = SOCKET_API_URL + 'bookings/send-otp-user';


