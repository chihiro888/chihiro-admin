// ** Mock Adapter
import mock from 'src/@fake-db/mock'

export type IconsDataType = {
  icon: string
}

const icons: IconsDataType[] = [
  { icon: 'rocket' },
  { icon: 'atom' },
  { icon: 'crown' },
  { icon: 'cricket-ball' },
  { icon: 'aperture' }
]

mock.onGet('/api/icons/data').reply(() => {
  return [200, icons]
})
