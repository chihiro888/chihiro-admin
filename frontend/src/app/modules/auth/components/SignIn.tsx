/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import { useFormik } from 'formik'
import { useAuth } from '../core/Auth'
import { useIntl } from 'react-intl'
import { getUserBySession, signIn } from '../../../../api/auth'

export function SignIn() {
  // hooks
  const intl = useIntl()
  const { saveAuth, setCurrentUser } = useAuth()

  // state
  const [loading, setLoading] = useState(false)

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'Wrong email format' }))
      .min(3, intl.formatMessage({ id: 'Minimum 3 symbols' }))
      .max(100, intl.formatMessage({ id: 'Maximum 100 symbols' }))
      .required(intl.formatMessage({ id: 'Email is required' })),
    password: Yup.string()
      .min(8, intl.formatMessage({ id: 'Minimum 8 symbols' }))
      .max(100, intl.formatMessage({ id: 'Maximum 100 symbols' }))
      .required(intl.formatMessage({ id: 'Password is required' }))
  })

  const initialValues = {
    email: 'chihiro888@github.com',
    password: '12341234'
  }

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      try {
        const params = {
          account: values.email,
          password: values.password
        }
        const { data: auth } = await signIn(params)
        if (auth.statusCode === 200) {
          saveAuth({ isSignIn: true })
        }
        const { data: user } = await getUserBySession()
        if (user.statusCode === 200) {
          setCurrentUser(user.data)
        }
      } catch (error) {
        saveAuth(undefined)
        setStatus(intl.formatMessage({ id: error.response.data.message }))
        setSubmitting(false)
        setLoading(false)
      }
    }
  })

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      {/* begin::Heading */}
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3">Chihiro Develop Kit</h1>
      </div>
      {/* begin::Heading */}

      {formik.status ? (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : (
        <></>
      )}

      {/* begin::Form group */}
      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark">
          {intl.formatMessage({ id: 'Email' })}
        </label>
        <input
          placeholder="Email"
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            { 'is-invalid': formik.touched.email && formik.errors.email },
            {
              'is-valid': formik.touched.email && !formik.errors.email
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <span role="alert">{formik.errors.email}</span>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className="fv-row mb-10">
        <div className="d-flex justify-content-between mt-n5">
          <div className="d-flex flex-stack mb-2">
            {/* begin::Label */}
            <label className="form-label fw-bolder text-dark fs-6 mb-0">
              {intl.formatMessage({ id: 'Password' })}
            </label>
            {/* end::Label */}
          </div>
        </div>
        <input
          placeholder="Password"
          type="password"
          autoComplete="off"
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password
            },
            {
              'is-valid': formik.touched.password && !formik.errors.password
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className="text-center">
        <button
          type="submit"
          id="kt_sign_in_submit"
          className="btn btn-lg btn-primary w-100 mb-5"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && (
            <span className="indicator-label">
              {intl.formatMessage({ id: 'Sign in' })}
            </span>
          )}
          {loading && (
            <span className="indicator-progress" style={{ display: 'block' }}>
              {intl.formatMessage({ id: 'Please wait...' })}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
      </div>
    </form>
  )
}
