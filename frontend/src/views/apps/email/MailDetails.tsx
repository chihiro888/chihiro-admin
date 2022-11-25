// ** React Imports
import { Fragment, useState, ReactNode } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Custom Components Imports
import Sidebar from 'src/@core/components/sidebar'
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { OptionType } from 'src/@core/components/option-menu/types'
import {
  MailType,
  MailLabelType,
  MailDetailsType,
  MailFoldersArrType,
  MailAttachmentType
} from 'src/types/apps/emailTypes'

const HiddenReplyBack = styled(Box)<BoxProps>(({ theme }) => ({
  height: 11,
  width: '90%',
  opacity: 0.5,
  borderWidth: 1,
  borderBottom: 0,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper
}))

const HiddenReplyFront = styled(Box)<BoxProps>(({ theme }) => ({
  height: 12,
  width: '95%',
  opacity: 0.75,
  borderWidth: 1,
  borderBottom: 0,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper
}))

const MailDetails = (props: MailDetailsType) => {
  // ** Props
  const {
    mail,
    hidden,
    folders,
    dispatch,
    direction,
    updateMail,
    foldersObj,
    labelColors,
    routeParams,
    paginateMail,
    handleStarMail,
    mailDetailsOpen,
    handleLabelUpdate,
    handleFolderUpdate,
    setMailDetailsOpen
  } = props

  // ** State
  const [showReplies, setShowReplies] = useState<boolean>(false)

  // ** Hook
  const { settings } = useSettings()

  const handleMoveToTrash = () => {
    dispatch(updateMail({ emailIds: [mail.id], dataToUpdate: { folder: 'trash' } }))
    setMailDetailsOpen(false)
  }

  const handleReadMail = () => {
    dispatch(updateMail({ emailIds: [mail.id], dataToUpdate: { isRead: false } }))
    setMailDetailsOpen(false)
  }
  const handleLabelsMenu = () => {
    const array: OptionType[] = []
    Object.entries(labelColors).map(([key, value]: string[]) => {
      array.push({
        text: <Typography sx={{ textTransform: 'capitalize' }}>{key}</Typography>,
        icon: (
          <Box component='span' sx={{ mr: 2, color: `${value}.main` }}>
            <Icon icon='bxs:circle' fontSize='0.75rem' />
          </Box>
        ),
        menuItemProps: {
          onClick: () => {
            handleLabelUpdate([mail.id], key as MailLabelType)
            setMailDetailsOpen(false)
          }
        }
      })
    })

    return array
  }

  const handleFoldersMenu = () => {
    const array: OptionType[] = []

    if (routeParams && routeParams.folder && !routeParams.label && foldersObj[routeParams.folder]) {
      foldersObj[routeParams.folder].map((folder: MailFoldersArrType) => {
        array.length = 0
        array.push({
          icon: folder.icon,
          text: <Typography sx={{ textTransform: 'capitalize' }}>{folder.name}</Typography>,
          menuItemProps: {
            onClick: () => {
              handleFolderUpdate(mail.id, folder.name)
              setMailDetailsOpen(false)
            }
          }
        })
      })
    } else if (routeParams && routeParams.label) {
      folders.map((folder: MailFoldersArrType) => {
        array.length = 0
        array.push({
          icon: folder.icon,
          text: <Typography sx={{ textTransform: 'capitalize' }}>{folder.name}</Typography>,
          menuItemProps: {
            onClick: () => {
              handleFolderUpdate(mail.id, folder.name)
              setMailDetailsOpen(false)
            }
          }
        })
      })
    } else {
      foldersObj['inbox'].map((folder: MailFoldersArrType) => {
        array.length = 0
        array.push({
          icon: folder.icon,
          text: <Typography sx={{ textTransform: 'capitalize' }}>{folder.name}</Typography>,
          menuItemProps: {
            onClick: () => {
              handleFolderUpdate(mail.id, folder.name)
              setMailDetailsOpen(false)
            }
          }
        })
      })
    }

    return array
  }

  const prevMailIcon = direction === 'rtl' ? 'bx:chevron-right' : 'bx:chevron-left'
  const nextMailIcon = direction === 'rtl' ? 'bx:chevron-left' : 'bx:chevron-right'
  const goBackIcon = prevMailIcon
  const ScrollWrapper = ({ children }: { children: ReactNode }) => {
    if (hidden) {
      return <Box sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
    }
  }

  return (
    <Sidebar
      hideBackdrop
      direction='right'
      show={mailDetailsOpen}
      sx={{ zIndex: 3, width: '100%', overflow: 'hidden' }}
      onClose={() => {
        setMailDetailsOpen(false)
        setShowReplies(false)
      }}
    >
      {mail ? (
        <Fragment>
          <Box
            sx={{
              px: 2.6,
              py: [2.25, 3],
              backgroundColor: 'background.paper',
              borderBottom: theme => `1px solid ${theme.palette.divider}`
            }}
          >
            <Box sx={{ display: 'flex', alignItems: ['flex-start', 'center'], justifyContent: 'space-between' }}>
              <Box
                sx={{
                  display: 'flex',
                  overflow: 'hidden',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis'
                }}
              >
                <IconButton
                  size='small'
                  sx={{ mr: 3.5 }}
                  onClick={() => {
                    setMailDetailsOpen(false)
                    setShowReplies(false)
                  }}
                >
                  <Icon icon={goBackIcon} fontSize='2rem' />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    flexDirection: ['column', 'row']
                  }}
                >
                  <Typography noWrap sx={{ mr: 2, fontWeight: 500 }}>
                    {mail.subject}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {mail.labels && mail.labels.length
                      ? mail.labels.map((label: MailLabelType) => {
                          return (
                            <CustomChip
                              rounded
                              key={label}
                              size='small'
                              skin='light'
                              label={label}
                              color={labelColors[label] as ThemeColor}
                              sx={{ '&:not(:last-of-type)': { mr: 2 } }}
                            />
                          )
                        })
                      : null}
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <IconButton
                  size='small'
                  disabled={!mail.hasPreviousMail}
                  sx={{ color: mail.hasPreviousMail ? 'text.primary' : 'text.secondary' }}
                  onClick={() => dispatch(paginateMail({ dir: 'previous', emailId: mail.id }))}
                >
                  <Icon icon={prevMailIcon} />
                </IconButton>
                <IconButton
                  size='small'
                  disabled={!mail.hasNextMail}
                  sx={{ color: mail.hasNextMail ? 'text.primary' : 'text.secondary' }}
                  onClick={() => dispatch(paginateMail({ dir: 'next', emailId: mail.id }))}
                >
                  <Icon icon={nextMailIcon} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              p: theme => theme.spacing(3, 2, 3, 3),
              borderBottom: theme => `1px solid ${theme.palette.divider}`
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {routeParams && routeParams.folder !== 'trash' ? (
                  <IconButton size='small' onClick={handleMoveToTrash}>
                    <Icon icon='bx:trash-alt' />
                  </IconButton>
                ) : null}

                <IconButton size='small' onClick={handleReadMail}>
                  <Icon icon='bx:envelope' />
                </IconButton>
                <OptionsMenu
                  leftAlignMenu
                  options={handleFoldersMenu()}
                  iconButtonProps={{ size: 'small' }}
                  icon={<Icon icon='bx:folder' />}
                />
                <OptionsMenu
                  leftAlignMenu
                  options={handleLabelsMenu()}
                  iconButtonProps={{ size: 'small' }}
                  icon={<Icon icon='bx:label' />}
                />
              </Box>
              <div>
                <IconButton
                  size='small'
                  onClick={e => handleStarMail(e, mail.id, !mail.isStarred)}
                  sx={{ ...(mail.isStarred ? { color: 'warning.main' } : {}) }}
                >
                  <Icon icon='bx:star' />
                </IconButton>
                {mail.replies.length ? (
                  <IconButton size='small' onClick={() => (showReplies ? setShowReplies(false) : setShowReplies(true))}>
                    {showReplies ? (
                      <Icon icon='mdi:arrow-collapse-vertical' />
                    ) : (
                      <Icon icon='mdi:arrow-expand-vertical' />
                    )}
                  </IconButton>
                ) : null}
                <IconButton size='small'>
                  <Icon icon='bx:dots-vertical-rounded' />
                </IconButton>
              </div>
            </Box>
          </Box>
          <Box sx={{ height: 'calc(100% - 7.75rem)', backgroundColor: theme => theme.palette.action.hover }}>
            <ScrollWrapper>
              <Box
                sx={{
                  py: 4,
                  px: 5,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {mail.replies.length && !showReplies ? (
                  <Typography onClick={() => setShowReplies(true)} sx={{ mt: 1.5, mb: 5, cursor: 'pointer' }}>
                    {mail.replies.length} Earlier Messages
                  </Typography>
                ) : null}

                {showReplies
                  ? mail.replies.map((reply: MailType, index: number) => {
                      return (
                        <Box
                          key={index}
                          sx={{
                            mb: 4,
                            boxShadow: 6,
                            width: '100%',
                            borderRadius: 1,
                            backgroundColor: 'background.paper',
                            border: theme => `1px solid ${theme.palette.divider}`
                          }}
                        >
                          <Box sx={{ p: 5 }}>
                            <Box
                              sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                  alt={reply.from.name}
                                  src={reply.from.avatar}
                                  sx={{ width: '2.375rem', height: '2.375rem', mr: 3 }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                  <Typography sx={{ fontWeight: 500 }}>{reply.from.name}</Typography>
                                  <Typography variant='body2'>{reply.from.email}</Typography>
                                </Box>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='caption' sx={{ mr: 3 }}>
                                  {new Date(reply.time).toDateString()}{' '}
                                  {new Date(reply.time).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                  })}
                                </Typography>
                                {mail.attachments.length ? (
                                  <IconButton size='small'>
                                    <Icon icon='bx:paperclip' />
                                  </IconButton>
                                ) : null}
                                <IconButton size='small'>
                                  <Icon icon='bx:dots-vertical-rounded' />
                                </IconButton>
                              </Box>
                            </Box>
                          </Box>
                          <Divider sx={{ m: '0 !important' }} />
                          <Box sx={{ p: 5, pt: 0 }}>
                            <Box dangerouslySetInnerHTML={{ __html: reply.message }} />
                          </Box>
                          {reply.attachments.length ? (
                            <Fragment>
                              <Divider sx={{ m: '0 !important' }} />
                              <Box sx={{ p: 5 }}>
                                <Typography variant='body2'>Attachments</Typography>
                                <List>
                                  {reply.attachments.map((item: MailAttachmentType) => {
                                    return (
                                      <ListItem disableGutters key={item.fileName}>
                                        <ListItemIcon>
                                          <img src={item.thumbnail} alt={item.fileName} width='24' height='24' />
                                        </ListItemIcon>
                                        <Typography variant='caption'>{item.fileName}</Typography>
                                      </ListItem>
                                    )
                                  })}
                                </List>
                              </Box>
                            </Fragment>
                          ) : null}
                        </Box>
                      )
                    })
                  : null}

                {mail.replies.length && !showReplies ? (
                  <Fragment>
                    <HiddenReplyBack sx={{ cursor: 'pointer' }} onClick={() => setShowReplies(true)} />
                    <HiddenReplyFront sx={{ cursor: 'pointer' }} onClick={() => setShowReplies(true)} />
                  </Fragment>
                ) : null}

                <Box
                  sx={{
                    mb: 4,
                    width: '100%',
                    borderRadius: 1,
                    overflow: 'visible',
                    position: 'relative',
                    backgroundColor: 'background.paper',
                    boxShadow: settings.skin === 'bordered' ? 0 : 6,
                    border: theme => `1px solid ${theme.palette.divider}`
                  }}
                >
                  <Box sx={{ p: 5 }}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          alt={mail.from.name}
                          src={mail.from.avatar}
                          sx={{ width: '2.375rem', height: '2.375rem', mr: 3 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography sx={{ fontWeight: 500 }}>{mail.from.name}</Typography>
                          <Typography variant='body2'>{mail.from.email}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='caption' sx={{ mr: 3 }}>
                          {new Date(mail.time).toDateString()}{' '}
                          {new Date(mail.time).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                          })}
                        </Typography>
                        {mail.attachments.length ? (
                          <IconButton size='small'>
                            <Icon icon='bx:paperclip' />
                          </IconButton>
                        ) : null}
                        <OptionsMenu
                          iconButtonProps={{ size: 'small' }}
                          options={[
                            {
                              text: 'Reply',
                              menuItemProps: { sx: { '& svg': { mr: 2 } } },
                              icon: <Icon icon='bx:share' fontSize={20} />
                            },
                            {
                              text: 'Forward',
                              menuItemProps: { sx: { '& svg': { mr: 2 } } },
                              icon: <Icon icon='mdi:reply-outline' fontSize={20} />
                            }
                          ]}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ m: '0 !important' }} />
                  <Box sx={{ p: 5, pt: 0 }}>
                    <Box dangerouslySetInnerHTML={{ __html: mail.message }} />
                  </Box>
                  {mail.attachments.length ? (
                    <Fragment>
                      <Divider sx={{ m: '0 !important' }} />
                      <Box sx={{ p: 5 }}>
                        <Typography variant='body2'>Attachments</Typography>
                        <List>
                          {mail.attachments.map((item: MailAttachmentType) => {
                            return (
                              <ListItem disableGutters key={item.fileName}>
                                <ListItemIcon>
                                  <img src={item.thumbnail} alt={item.fileName} width='24' height='24' />
                                </ListItemIcon>
                                <Typography variant='caption'>{item.fileName}</Typography>
                              </ListItem>
                            )
                          })}
                        </List>
                      </Box>
                    </Fragment>
                  ) : null}
                </Box>

                <Box
                  sx={{
                    p: 5,
                    width: '100%',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    boxShadow: settings.skin === 'bordered' ? 0 : 6
                  }}
                >
                  <Typography sx={{ fontWeight: 500 }}>
                    Click here to{' '}
                    <Typography
                      component='span'
                      sx={{ cursor: 'pointer', color: 'primary.main', fontWeight: 'inherit' }}
                    >
                      Reply
                    </Typography>{' '}
                    or{' '}
                    <Typography
                      component='span'
                      sx={{ cursor: 'pointer', color: 'primary.main', fontWeight: 'inherit' }}
                    >
                      Forward
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </ScrollWrapper>
          </Box>
        </Fragment>
      ) : null}
    </Sidebar>
  )
}

export default MailDetails
