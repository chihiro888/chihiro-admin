import COMMON_MSG from '../../common/constants/swagger'

const SWAGGER = {
  TAG: 'auth',
  URL: 'api/auth',
  SIGN_IN: {
    URL: 'signIn',
    SUMMARY: 'Sign In API',
    DESC: 'This is Sign In API',
    RES: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    },
    MSG: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: 'account or password does not match.'
    }
  },
  GET_USER_BY_SESSION: {
    URL: 'getUserBySession',
    SUMMARY: 'Get User By Session API',
    DESC: 'This is Get User By Session API',
    RES: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    },
    MSG: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    }
  }
}

export default SWAGGER
