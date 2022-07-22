/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useState} from 'react'
import {KTSVG} from '../../../helpers'
import {CreateAppModal} from '../../../partials'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1 = () => {
  const {classes} = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <>
      <div className='toolbar' id='kt_toolbar'>
        {/* begin::Container */}
        <div
          id='kt_toolbar_container'
          className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
        >
          <DefaultTitle />

          {/* begin::Actions */}
          <div className='d-flex align-items-center py-1'>
            {/* begin::Wrapper */}
            <div className='me-4'>
              {/* begin::Menu */}
              <a
                href='#'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTSVG
                  path='/media/icons/duotune/general/gen031.svg'
                  className='svg-icon-5 svg-icon-gray-500 me-1'
                />
                Filter
              </a>

              {/* end::Menu */}
            </div>
            {/* end::Wrapper */}

            {/* begin::Button */}

            <a
              className='btn btn-sm btn-primary cursor-pointer'
              id='kt_toolbar_primary_button'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_app'
              onClick={() => setShowCreateAppModal(true)}
            >
              Create
            </a>
            {/* end::Button */}
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Container */}
      </div>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </>
  )
}

export {Toolbar1}
