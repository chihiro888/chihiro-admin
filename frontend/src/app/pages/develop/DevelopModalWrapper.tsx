import { FC, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { toast, Theme } from 'react-toastify'
import { useThemeMode } from '../../../_metronic/partials'

const DevelopModalPage = ({
  showModal,
  handleOpenModal,
  handleCloseModal,
  handleClickOK
}) => (
  <>
    <div className="mt-3">
      <button className="btn btn-light-success" onClick={handleOpenModal}>
        <i className="bi bi-door-open fs-4 me-2"></i>Open Modal
      </button>
    </div>

    <Modal show={showModal} onHide={handleCloseModal}>
      <div className="modal-close">
        <i
          className="modal-close-icon bi bi-x-lg"
          onClick={handleCloseModal}
        ></i>
      </div>
      <h1 className="c-tac mt-5 mb-5">Title</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        volutpat tellus in mauris consectetur, vel ultrices elit tristique.
        Nulla mattis sagittis porttitor. Suspendisse commodo urna eu elit
        molestie sodales. Quisque metus lacus, rutrum et enim a, consectetur
        suscipit leo. Pellentesque eu quam magna. Nunc eget risus a neque tempor
        rhoncus. Nam ultricies ornare metus. Donec magna odio, hendrerit nec
        erat nec, vulputate pretium arcu. Proin tincidunt lacus id nisl
        vulputate maximus.
      </div>
      <div className="modal-button">
        <button
          className="btn btn-light-success mr-3"
          onClick={handleCloseModal}
        >
          <i className="bi bi-x fs-4 me-2"></i>Cancel
        </button>
        <button className="btn btn-light-success ml-3" onClick={handleClickOK}>
          <i className="bi bi-check fs-4 me-2"></i>OK
        </button>
      </div>
    </Modal>
  </>
)

const DevelopModalWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const { mode } = useThemeMode()

  // state
  const [showModal, setShowModal] = useState(false)

  // handler
  const handleOpenModal = () => {
    setShowModal(true)
  }

  // handler
  const handleCloseModal = () => {
    setShowModal(false)
  }

  // handler
  const handleClickOK = () => {
    toast.info('hello', {
      theme: mode as Theme
    })
    setShowModal(false)
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.MODAL_SAMPLE' })}
      </PageTitle>

      <DevelopModalPage
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleClickOK={handleClickOK}
      />
    </>
  )
}

export { DevelopModalWrapper }
