import produce from 'immer'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import { IntlShape, useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { userListPagination } from '../../../api/user'
import { useThemeMode } from '../../../_metronic/partials'
import { paginationAPI } from '../../../common/util'
import Search from '../../components/Search'
import Table from '../../components/Table'
import {
  HeaderInterface,
  PackInterface,
  PaginationInterface,
  SearchInterface
} from '../../../common/interface'

const UserManagementPage = ({
  header,
  search,
  pagination,
  handleChangePage,
  handleClickSearch,
  handleChangeSearch
}) => (
  <>
    <Search
      search={search}
      handleChangeSearch={handleChangeSearch}
      handleClickSearch={handleClickSearch}
    />

    <Table
      header={header}
      pagination={pagination}
      handleChangePage={handleChangePage}
      Content={Content}
    />
  </>
)

// NOTE Please define the content.
const Content = ({ item, idx }) => {
  return (
    <>
      <tr key={idx}>
        <th>{item.id}</th>
        <th>{item.account}</th>
        <th>{item.username}</th>
        <th>{item.isAdmin}</th>
        <th>{item.isDeveloper}</th>
        <th>
          {item.signInAt
            ? moment(item.signInAt).format('YYYY-MM-DD HH:mm:ss')
            : ''}
        </th>
        <th>
          {item.signOutAt
            ? moment(item.signOutAt).format('YYYY-MM-DD HH:mm:ss')
            : ''}
        </th>
        <th>
          {item.createdAt
            ? moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
            : ''}
        </th>
        <th>
          {item.updatedAt
            ? moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')
            : ''}
        </th>
      </tr>
    </>
  )
}

const UserManagementWrapper: FC = () => {
  // hooks
  const intl: IntlShape = useIntl()
  const { mode } = useThemeMode()

  // NOTE Please define the Pagination API.
  const api = userListPagination

  // NOTE Please define a label for the table header.
  const [header] = useState<HeaderInterface[]>([
    { label: 'ID' },
    { label: 'Account' },
    { label: 'Username' },
    { label: 'Administrator authority' },
    { label: 'Developer authority' },
    { label: 'SignIn date and time' },
    { label: 'SignOut date and time' },
    { label: 'Date and time of creation' },
    { label: 'Date and time of update' }
  ])

  // NOTE Please define the search INPUT.
  const [search, setSearch] = useState<SearchInterface[]>([
    {
      render: 'text',
      label: 'ID',
      key: 'id',
      value: ''
    },
    {
      render: 'text',
      label: 'Account',
      key: 'account',
      value: ''
    },
    {
      render: 'text',
      label: 'Username',
      key: 'username',
      value: ''
    },
    {
      render: 'select',
      label: 'Administrator authority',
      key: 'isAdmin',
      item: [
        { label: intl.formatMessage({ id: 'User' }), value: 0 },
        { label: intl.formatMessage({ id: 'Admin' }), value: 1 }
      ],
      value: ''
    },
    {
      render: 'select',
      label: 'Developer authority',
      key: 'isDeveloper',
      item: [
        { label: intl.formatMessage({ id: 'User' }), value: 0 },
        { label: intl.formatMessage({ id: 'Developer' }), value: 1 }
      ],
      value: ''
    },
    {
      render: 'datePicker',
      label: 'Date and time of creation',
      key: 'createdAt',
      value: ''
    }
  ])

  // state - pagination
  const [pagination, setPagination] = useState<PaginationInterface>({
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    totalItemsCount: 0,
    activePage: 1,
    data: []
  })

  // handler - change search
  const handleChangeSearch = (type: string, event: any) => {
    const nextState = produce(search, (draftState) => {
      draftState.forEach((data) => {
        if (data.key === type) {
          if (data.render === 'datePicker') {
            data.value = event
          } else {
            data.value = event.target.value
          }
        }
      })
    })

    setSearch(nextState)
  }

  // package
  const pack: PackInterface = {
    intl,
    mode,
    search,
    pagination,
    setPagination
  }

  // handler - change page
  const handleChangePage = async (pageNumber: number) => {
    const etc = { ...pack, page: pageNumber }
    await paginationAPI(api, etc)
  }

  // handler - click search
  const handleClickSearch = async () => {
    const etc = { ...pack, page: 1 }
    await paginationAPI(api, etc)
  }

  // init data
  const initData = async () => {
    const etc = { ...pack, page: pagination.activePage }
    await paginationAPI(api, etc)
  }

  // lifecycle
  useEffect(() => {
    initData()

    // unmounted
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })}
      </PageTitle>

      <UserManagementPage
        header={header}
        search={search}
        pagination={pagination}
        handleChangePage={handleChangePage}
        handleClickSearch={handleClickSearch}
        handleChangeSearch={handleChangeSearch}
      />
    </>
  )
}

export { UserManagementWrapper }
