import { FC, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import { account as accountAPI, changePassword } from '../../../api/user'
import { PageTitle } from '../../../_metronic/layout/core'
import { Theme, toast } from 'react-toastify'
import { useAuth } from '../../modules/auth/core/Auth'
import { useThemeMode } from '../../../_metronic/partials'

const AccountSettingsPage = ({
  intl,
  account,
  isDisabled,
  showChangePasswordModal,
  handleOpenChangePasswordModal,
  handleCloseChangePasswordModal,
  handleChangeOldPassword,
  handleChangeNewPassword,
  handleChangeConfirmNewPassword,
  handleClickChangePassword
}) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="account">
            {intl.formatMessage({ id: 'Account' })}
          </label>
          <input
            type="text"
            className="form-control mt-3"
            id="account"
            readOnly
            value={account.account}
          />
        </div>

        <div className="form-group mt-5">
          <label htmlFor="username">
            {intl.formatMessage({ id: 'Username' })}
          </label>
          <input
            type="text"
            className="form-control mt-3"
            id="username"
            readOnly
            value={account.username}
          />
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group mt-5">
              <label htmlFor="signInAt">
                {intl.formatMessage({ id: 'SignIn date and time' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="signInAt"
                readOnly
                value={account.signInAt}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group mt-5">
              <label htmlFor="signOutAt">
                {intl.formatMessage({ id: 'SignOut date and time' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="signOutAt"
                readOnly
                value={account.signOutAt}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group mt-5">
              <label htmlFor="signInAt">
                {intl.formatMessage({ id: 'Administrator authority' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="signInAt"
                readOnly
                value={account.isAdmin}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group mt-5">
              <label htmlFor="signOutAt">
                {intl.formatMessage({ id: 'Developer authority' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="signOutAt"
                readOnly
                value={account.isDeveloper}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group mt-5">
              <label htmlFor="signOutAt">
                {intl.formatMessage({ id: 'Date and time of creation' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="signOutAt"
                readOnly
                value={account.signOutAt}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group mt-5">
              <label htmlFor="createdAt">
                {intl.formatMessage({ id: 'Date and time of update' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="createdAt"
                readOnly
                value={account.createdAt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div className="c-tar">
          <button
            className="btn btn-primary"
            onClick={handleOpenChangePasswordModal}
          >
            <i className="bi bi-key fs-4 me-2"></i>
            {intl.formatMessage({ id: 'Change Password' })}
          </button>
        </div>
      </div>
    </div>

    <Modal
      show={showChangePasswordModal}
      onHide={handleCloseChangePasswordModal}
    >
      <div className="close-area">
        <i
          className="close-icon bi bi-x-lg"
          onClick={handleCloseChangePasswordModal}
        ></i>
      </div>
      <h1 className="c-tac mt-5 mb-5">
        {intl.formatMessage({ id: 'Change Password' })}
      </h1>
      <div className="mb-5">
        <div className="form-group mt-5">
          <label htmlFor="oldPassowrd">
            {intl.formatMessage({ id: 'Old password' })}
          </label>
          <input
            type="password"
            className="form-control mt-3"
            id="oldPassowrd"
            onChange={handleChangeOldPassword}
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="newPassword">
            {intl.formatMessage({ id: 'New password' })}
          </label>
          <input
            type="password"
            className="form-control mt-3"
            id="newPassword"
            onChange={handleChangeNewPassword}
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="confirmNewPassword">
            {intl.formatMessage({ id: 'Confirm new password' })}
          </label>
          <input
            type="password"
            className="form-control mt-3"
            id="confirmNewPassword"
            onChange={handleChangeConfirmNewPassword}
          />
        </div>
      </div>
      <div
        className="c-tac mt-5 mb-5"
        style={{ paddingLeft: '30px', paddingRight: '30px' }}
      >
        <button
          className="btn btn-primary custom-w100p"
          onClick={handleClickChangePassword}
          disabled={isDisabled}
        >
          <i className="bi bi-key fs-4 me-2"></i>
          {intl.formatMessage({ id: 'Change Password' })}
        </button>
      </div>
    </Modal>
  </>
)

const AccountSettingsWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const { logout } = useAuth()
  const { mode } = useThemeMode()

  // state - account information
  const [account, setAccount] = useState({})

  // state - change password
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  // state - common
  const [isDisabled, setIsDisabled] = useState(false)

  // state - modal
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

  // handler - open change password modal
  const handleOpenChangePasswordModal = () => {
    setShowChangePasswordModal(true)
  }

  // handler - close change password modal
  const handleCloseChangePasswordModal = () => {
    setShowChangePasswordModal(false)
  }

  // handler - change old password
  const handleChangeOldPassword = (e) => {
    setOldPassword(e.target.value)
  }

  // handler - change new password
  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value)
  }

  // handler - change confirm new password
  const handleChangeConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value)
  }

  // handler - click change password
  const handleClickChangePassword = async () => {
    setIsDisabled(true)
    try {
      const params = {
        oldPassword,
        newPassword,
        confirmNewPassword
      }
      const { data: response } = await changePassword(params)
      if (response.statusCode === 200) {
        alert(intl.formatMessage({ id: response.message }))
        setIsDisabled(false)
        logout()
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
      setIsDisabled(false)
    }
  }

  // init data
  const initData = async () => {
    const { data } = await accountAPI()
    if (data.statusCode === 200) {
      setAccount(data.data)
    }
  }

  // lifecycle
  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.ACCOUNT.SETTINGS' })}
      </PageTitle>

      <AccountSettingsPage
        intl={intl}
        account={account}
        isDisabled={isDisabled}
        showChangePasswordModal={showChangePasswordModal}
        handleOpenChangePasswordModal={handleOpenChangePasswordModal}
        handleCloseChangePasswordModal={handleCloseChangePasswordModal}
        handleChangeOldPassword={handleChangeOldPassword}
        handleChangeNewPassword={handleChangeNewPassword}
        handleChangeConfirmNewPassword={handleChangeConfirmNewPassword}
        handleClickChangePassword={handleClickChangePassword}
      />
    </>
  )
}

export { AccountSettingsWrapper }
