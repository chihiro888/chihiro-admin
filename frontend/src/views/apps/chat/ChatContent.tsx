// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Badge from '@mui/material/Badge'
import MuiAvatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import ChatLog from './ChatLog'
import SendMsgForm from 'src/views/apps/chat/SendMsgForm'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import UserProfileRight from 'src/views/apps/chat/UserProfileRight'

// ** Types
import { ChatContentType } from 'src/types/apps/chatTypes'

// ** Styled Components
const ChatWrapperStartChat = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  borderRadius: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.action.hover
}))

const ChatContent = (props: ChatContentType) => {
  // ** Props
  const {
    store,
    hidden,
    sendMsg,
    mdAbove,
    dispatch,
    statusObj,
    getInitials,
    sidebarWidth,
    userProfileRightOpen,
    handleLeftSidebarToggle,
    handleUserProfileRightSidebarToggle
  } = props

  const handleStartConversation = () => {
    if (!mdAbove) {
      handleLeftSidebarToggle()
    }
  }

  const renderContent = () => {
    if (store) {
      const selectedChat = store.selectedChat
      if (!selectedChat) {
        return (
          <ChatWrapperStartChat
            sx={{
              ...(mdAbove ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {})
            }}
          >
            <MuiAvatar
              sx={{
                mb: 6,
                pt: 8,
                pb: 7,
                px: 7.5,
                width: 110,
                height: 110,
                backgroundColor: 'background.paper',
                boxShadow: theme => theme.shadows[3]
              }}
            >
              <Icon icon='bx:message' fontSize='3.125rem' />
            </MuiAvatar>
            <Box
              onClick={handleStartConversation}
              sx={{
                py: 2,
                px: 6,
                borderRadius: 5,
                backgroundColor: 'background.paper',
                boxShadow: theme => theme.shadows[3],
                cursor: mdAbove ? 'default' : 'pointer'
              }}
            >
              <Typography sx={{ fontWeight: 500, fontSize: '1.125rem', lineHeight: 'normal' }}>
                Start Conversation
              </Typography>
            </Box>
          </ChatWrapperStartChat>
        )
      } else {
        return (
          <Box
            sx={{
              flexGrow: 1,
              width: '100%',
              height: '100%',
              backgroundColor: theme => theme.palette.action.hover
            }}
          >
            <Box
              sx={{
                py: 3,
                px: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: theme => `1px solid ${theme.palette.divider}`
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {mdAbove ? null : (
                  <IconButton onClick={handleLeftSidebarToggle} sx={{ mr: 2 }}>
                    <Icon icon='bx:menu' />
                  </IconButton>
                )}
                <Box
                  onClick={handleUserProfileRightSidebarToggle}
                  sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <Badge
                    overlap='circular'
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    sx={{ mr: 3 }}
                    badgeContent={
                      <Box
                        component='span'
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          color: `${statusObj[selectedChat.contact.status]}.main`,
                          boxShadow: theme => `0 0 0 2px ${theme.palette.background.paper}`,
                          backgroundColor: `${statusObj[selectedChat.contact.status]}.main`
                        }}
                      />
                    }
                  >
                    {selectedChat.contact.avatar ? (
                      <MuiAvatar
                        src={selectedChat.contact.avatar}
                        alt={selectedChat.contact.fullName}
                        sx={{ width: '2.375rem', height: '2.375rem' }}
                      />
                    ) : (
                      <CustomAvatar
                        skin='light'
                        color={selectedChat.contact.avatarColor}
                        sx={{ width: '2.375rem', height: '2.375rem', fontSize: '1rem' }}
                      >
                        {getInitials(selectedChat.contact.fullName)}
                      </CustomAvatar>
                    )}
                  </Badge>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
                      {selectedChat.contact.fullName}
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                      {selectedChat.contact.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {mdAbove ? (
                  <Fragment>
                    <IconButton size='small' sx={{ color: 'text.secondary' }}>
                      <Icon icon='bx:phone' fontSize='1.25rem' />
                    </IconButton>
                    <IconButton size='small' sx={{ color: 'text.secondary' }}>
                      <Icon icon='bx:video' fontSize='1.25rem' />
                    </IconButton>
                    <IconButton size='small' sx={{ color: 'text.secondary' }}>
                      <Icon icon='bx:search' fontSize='1.25rem' />
                    </IconButton>
                  </Fragment>
                ) : null}

                <OptionsMenu
                  menuProps={{ sx: { mt: 2 } }}
                  icon={<Icon icon='bx:dots-vertical-rounded' fontSize='1.25rem' />}
                  iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
                  options={['View Contact', 'Mute Notifications', 'Block Contact', 'Clear Chat', 'Report']}
                />
              </Box>
            </Box>

            {selectedChat && store.userProfile ? (
              <ChatLog hidden={hidden} data={{ ...selectedChat, userContact: store.userProfile }} />
            ) : null}

            <SendMsgForm store={store} dispatch={dispatch} sendMsg={sendMsg} />

            <UserProfileRight
              store={store}
              hidden={hidden}
              statusObj={statusObj}
              getInitials={getInitials}
              sidebarWidth={sidebarWidth}
              userProfileRightOpen={userProfileRightOpen}
              handleUserProfileRightSidebarToggle={handleUserProfileRightSidebarToggle}
            />
          </Box>
        )
      }
    } else {
      return null
    }
  }

  return renderContent()
}

export default ChatContent
