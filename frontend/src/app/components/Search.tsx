import { useEffect } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import ko from 'date-fns/locale/ko'
import ja from 'date-fns/locale/ja'
import en from 'date-fns/locale/en-US'
import { useLang } from '../../_metronic/i18n/Metronici18n'
import { useIntl } from 'react-intl'
import 'react-datepicker/dist/react-datepicker.css'

const Search = ({ search, handleChangeSearch, handleClickSearch }) => {
  // hooks
  const locale = useLang()
  const intl = useIntl()

  // lifecycle
  useEffect(() => {
    // init load lang
    registerLocale('ko', ko)
    registerLocale('ja', ja)
    registerLocale('en', en)

    // change datePicker Lang
    setDefaultLocale(locale)

    // unmounted
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className="card card-custom">
        <div className="card-body">
          <div className="row">
            {search.map((data, idx) => {
              let input
              if (data.render === 'text') {
                input = (
                  <>
                    <input
                      type="text"
                      className="form-control mt-3"
                      id="id"
                      value={search.id}
                      onChange={(e) => handleChangeSearch(data.key, e)}
                    />
                  </>
                )
              } else if (data.render === 'select') {
                input = (
                  <>
                    <div className="form-group">
                      <select
                        className="form-select mt-3"
                        onChange={(e) => handleChangeSearch(data.key, e)}
                      >
                        <option value="">
                          ----- {intl.formatMessage({ id: 'Select Item' })}{' '}
                          -----
                        </option>
                        {data.item.map((item, idx) => (
                          <option key={idx} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )
              } else if (data.render === 'datePicker') {
                input = (
                  <>
                    <DatePicker
                      className="form-control mt-3"
                      dateFormat="yyyy-MM-dd"
                      selected={data.value}
                      onChange={(date: Date) =>
                        handleChangeSearch(data.key, date)
                      }
                    />
                  </>
                )
              }

              return (
                <div className="col-3 mt-2" key={idx}>
                  <div className="form-group">
                    <label>{intl.formatMessage({ id: data.label })}</label>
                    {input}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="card card-custom mt-5">
        <div className="card-body">
          <div className="c-tar">
            <button
              className="btn btn-light-primary"
              onClick={handleClickSearch}
            >
              <i className="bi bi-search fs-4 me-2"></i>
              {intl.formatMessage({ id: 'Search' })}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
