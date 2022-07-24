export interface CommonResponse {
  statusCode: number
  message: string
  data: any
}

export interface AuthModel {
  isSignIn: boolean
}

export interface UserAddressModel {
  addressLine: string
  city: string
  state: string
  postCode: string
}

export interface UserCommunicationModel {
  email: boolean
  sms: boolean
  phone: boolean
}

export interface UserEmailSettingsModel {
  emailNotification?: boolean
  sendCopyToPersonalEmail?: boolean
  activityRelatesEmail?: {
    youHaveNewNotifications?: boolean
    youAreSentADirectMessage?: boolean
    someoneAddsYouAsAsAConnection?: boolean
    uponNewOrder?: boolean
    newMembershipApproval?: boolean
    memberRegistration?: boolean
  }
  updatesFromKeenthemes?: {
    newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
    tipsOnGettingMoreOutOfKeen?: boolean
    thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
    newsAboutStartOnPartnerProductsAndOtherServices?: boolean
    tipsOnStartBusinessProducts?: boolean
  }
}

export interface UserSocialNetworksModel {
  linkedIn: string
  facebook: string
  twitter: string
  instagram: string
}

export interface UserModel {
  id: number
  account: string
  username: string
  password: string | undefined
  signInAt: string | null
  signOutAt: string | null
  createdAt: string | null
  updatedAt: string | null
  deletedAt: string | null
  /*
  id: number
  username: string
  password: string | undefined
  email: string
  first_name: string
  last_name: string
  fullname?: string
  occupation?: string
  companyName?: string
  phone?: string
  roles?: Array<number>
  pic?: string
  language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
  timeZone?: string
  website?: 'https://keenthemes.com'
  emailSettings?: UserEmailSettingsModel
  auth?: AuthModel
  communication?: UserCommunicationModel
  address?: UserAddressModel
  socialNetworks?: UserSocialNetworksModel
  */
}
