import COMMON_MSG from '../../common/constants/swagger'

const SWAGGER = {
  TAG: 'query',
  URL: 'api/query',
  EXECUTE_QUERY: {
    URL: 'executeQuery',
    SUMMARY: 'execute query API',
    DESC: 'This is execute query API',
    RES: {
      OK: COMMON_MSG.OK,
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    },
    MSG: {
      OK: 'Query execution is complete.',
      OK_ERROR: 'There was a problem running the query.',
      OK_EMPTY: 'No query execution results.',
      UNAUTHORIZED: COMMON_MSG.UNAUTHORIZED
    }
  },
  HISTORY_LIST_PAGINATION: {
    URL: 'historyListPagination',
    SUMMARY: 'history list pagination API',
    DESC: 'This is history list pagination API',
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
