const OK = 'OK'
const BAD_REQUEST = 'BAD_REQUEST'
const UNAUTHORIZED = 'UNAUTHORIZED'
const FORBIDDEN = 'FORBIDDEN'
const INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR'

const SWAGGER = {
  // auth
  AUTH: {
    TAG: 'auth',
    URL: 'api/auth',
    SIGN_IN: {
      URL: 'signIn',
      SUMMARY: 'Sign In API',
      DESC: 'This is Sign In API',
      RES: {
        OK: OK,
        UNAUTHORIZED: UNAUTHORIZED
      },
      MSG: {
        OK: OK,
        UNAUTHORIZED: 'account or password does not match.'
      }
    },
    GET_USER_BY_SESSION: {
      URL: 'getUserBySession',
      SUMMARY: 'Get User By Session API',
      DESC: 'This is Get User By Session API',
      RES: {
        OK: OK,
        UNAUTHORIZED: UNAUTHORIZED
      },
      MSG: {
        OK: OK,
        UNAUTHORIZED: UNAUTHORIZED
      }
    }
  },

  // user
  USER: {
    TAG: 'user',
    URL: 'api/user',
    CREATE_USER: {
      URL: 'createUser',
      SUMMARY: 'Create User API',
      DESC: 'This is Create User API',
      RES: {
        OK: OK
      },
      MSG: {
        OK: OK
      }
    }
  },

  // develop
  DEVELOP: {
    TAG: 'develop',
    URL: 'api/develop',
    getMethod: {
      URL: 'getMethod',
      SUMMARY: 'GET Method API',
      DESC: 'This is GET Method API',
      RES: {
        OK: OK
      },
      MSG: {
        OK: OK
      }
    },
    postMethod: {
      URL: 'postMethod',
      SUMMARY: 'POST Method API',
      DESC: 'This is POST Method API',
      RES: {
        OK: OK
      },
      MSG: {
        OK: OK
      }
    },
    putMethod: {
      URL: 'putMethod',
      SUMMARY: 'PUT Method API',
      DESC: 'This is PUT Method API',
      RES: {
        OK: OK
      },
      MSG: {
        OK: OK
      }
    },
    deleteMethod: {
      URL: 'deleteMethod',
      SUMMARY: 'DELETE Method API',
      DESC: 'This is DELETE Method API',
      RES: {
        OK: OK
      },
      MSG: {
        OK: OK
      }
    }
  }
}

export default SWAGGER
