import COMMON_MSG from '../../common/constants/swagger'

const SWAGGER = {
  TAG: 'user',
  URL: 'api/user',
  CREATE_USER: {
    URL: 'createUser',
    SUMMARY: 'Create User API',
    DESC: 'This is Create User API',
    RES: {
      OK: COMMON_MSG.OK
    },
    MSG: {
      OK: COMMON_MSG.OK
    }
  },
  ACCOUNT: {
    URL: 'account',
    SUMMARY: 'account API',
    DESC: 'This is account API',
    RES: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    },
    MSG: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    }
  },
  CHANGE_PASSWORD: {
    URL: 'changePassword',
    SUMMARY: 'change password API',
    DESC: 'This is change password API',
    RES: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED,
      INTERNAL_SERVER_ERROR: COMMON_MSG.INTERNAL_SERVER_ERROR
    },
    MSG: {
      OK: COMMON_MSG.OK,
      INTERNAL_SERVER_ERROR: COMMON_MSG.INTERNAL_SERVER_ERROR
    }
  },
  USER_LIST_PAGINATION: {
    URL: 'userListPagination',
    SUMMARY: 'user list pagination API',
    DESC: 'This is user list pagination API',
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
