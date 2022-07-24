import { FC } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'

const Item2: FC = (props) => {
  return (
    <div className="timeline-item">
      <div className="timeline-line w-40px"></div>

      <div className="timeline-icon symbol symbol-circle symbol-40px">
        <div className="symbol-label bg-light">
          <KTSVG
            path="/media/icons/duotune/communication/com009.svg"
            className="svg-icon-2 svg-icon-gray-500"
          />
        </div>
      </div>

      <div className="timeline-content mb-10 mt-n2">
        <div className="overflow-auto pe-3">
          <div className="fs-5 fw-bold mb-2">
            select u.account, u.password, u.username, c.code_name as 'role' from
            _user u inner join _code c on u.role = c.code where c.id = '3' union
            select u.account, u.password, u.username, c.code_name as 'role' from
            _user u inner join _code c on u.role = c.code where c.id = '3'
          </div>

          <div className="d-flex align-items-center mt-1 fs-6">
            <div className="text-muted me-2 fs-7">execute at 21:41 by</div>

            <div
              className="symbol symbol-circle symbol-25px"
              data-bs-toggle="tooltip"
              data-bs-boundary="window"
              data-bs-placement="top"
              title="Alan Nilson"
            >
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Item2 }
