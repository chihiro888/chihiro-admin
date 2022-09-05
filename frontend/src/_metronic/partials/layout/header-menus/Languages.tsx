/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../../helpers'
import { useLang, setLanguage } from '../../../i18n/Metronici18n'

const Languages: FC = () => {
  // hooks
  const lang = useLang()
  const intl = useIntl()

  const languages = [
    {
      lang: 'en',
      name: intl.formatMessage({ id: 'English' }),
      flag: toAbsoluteUrl('/media/flags/united-states.svg')
    },
    {
      lang: 'ko',
      name: intl.formatMessage({ id: 'Korean' }),
      flag: toAbsoluteUrl('/media/flags/south-korea.svg')
    },
    {
      lang: 'ja',
      name: intl.formatMessage({ id: 'Japanese' }),
      flag: toAbsoluteUrl('/media/flags/japan.svg')
    }
    // {
    //   lang: 'zh',
    //   name: intl.formatMessage({ id: 'Chinese' }),
    //   flag: toAbsoluteUrl('/media/flags/china.svg')
    // }
  ]

  // state
  const [open, setOepn] = useState(false)

  // handler
  const handleClickAcc = () => {
    open ? setOepn(false) : setOepn(true)
  }

  const currentLanguage = languages.find((x) => x.lang === lang)
  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                color: 'var(--kt-gray-600)'
              }}
              className="accordion-button collapsed"
              type="button"
              onClick={handleClickAcc}
            >
              <div style={{ paddingLeft: '12px' }}>
                {intl.formatMessage({ id: 'Language' })}
              </div>
            </button>
          </h2>
          <div
            className={
              open
                ? 'accordion-collapse collapse show'
                : 'accordion-collapse collapse'
            }
          >
            <div className="accordion-body">
              {languages.map((l) => (
                <div
                  className="menu-item px-3"
                  key={l.lang}
                  onClick={() => {
                    setLanguage(l.lang)
                  }}
                >
                  <a
                    href="#"
                    className={clsx('menu-link d-flex px-5', {
                      active: l.lang === currentLanguage?.lang
                    })}
                  >
                    <span className="symbol symbol-20px me-4">
                      <img className="rounded-1" src={l.flag} alt="metronic" />
                    </span>
                    {l.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Languages }
