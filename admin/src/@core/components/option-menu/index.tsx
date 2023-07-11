// ** React Imports
import { MouseEvent, useState, ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Imports
import { OptionType, OptionsMenuType, OptionMenuItemType } from './types'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

const MenuItemWrapper = ({ children, option }: { children: ReactNode; option: OptionMenuItemType }) => {
  if (option.href) {
    return (
      <Link href={option.href} passHref {...option.linkProps}>
        {children}
      </Link>
    )
  } else {
    return <>{children}</>
  }
}

const OptionsMenu = (props: OptionsMenuType) => {
  // ** Props
  const { icon, options, menuProps, iconProps, leftAlignMenu, iconButtonProps } = props

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton aria-haspopup='true' onClick={handleClick} {...iconButtonProps}>
        {icon ? icon : <Icon icon='bx:dots-vertical-rounded' {...iconProps} />}
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        {...(!leftAlignMenu && {
          anchorOrigin: { vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' },
          transformOrigin: { vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }
        })}
        {...menuProps}
      >
        {options.map((option: OptionType, index: number) => {
          if (typeof option === 'string') {
            return (
              <MenuItem key={index} onClick={handleClose}>
                {option}
              </MenuItem>
            )
          } else if ('divider' in option) {
            return option.divider && <Divider key={index} {...option.dividerProps} />
          } else {
            return (
              <MenuItemWrapper key={index} option={option}>
                <MenuItem
                  {...option.menuItemProps}
                  onClick={e => {
                    handleClose()
                    option.menuItemProps && option.menuItemProps.onClick ? option.menuItemProps.onClick(e) : null
                  }}
                >
                  {option.icon ? option.icon : null}
                  {option.text}
                </MenuItem>
              </MenuItemWrapper>
            )
          }
        })}
      </Menu>
    </>
  )
}

export default OptionsMenu
