// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  id: string | undefined
  toggleAddPaymentDrawer: () => void
  toggleSendInvoiceDrawer: () => void
}

const PreviewActions = ({
  id,
  toggleSendInvoiceDrawer,
  toggleAddPaymentDrawer
}: Props) => {
  return (
    <Card>
      <CardContent>
        <Button
          fullWidth
          sx={{ mb: 4 }}
          variant="contained"
          onClick={toggleSendInvoiceDrawer}
          startIcon={<Icon icon="bx:paper-plane" />}
        >
          Send Invoice
        </Button>
        <Button fullWidth sx={{ mb: 4 }} variant="outlined" color="secondary">
          Download
        </Button>
        <Link href={`/apps/invoice/print/${id}`} passHref>
          <Button
            fullWidth
            sx={{ mb: 4 }}
            target="_blank"
            component="a"
            variant="outlined"
            color="secondary"
          >
            Print
          </Button>
        </Link>
        <Link href={`/apps/invoice/edit/${id}`} passHref>
          <Button
            fullWidth
            component="a"
            sx={{ mb: 4 }}
            color="secondary"
            variant="outlined"
          >
            Edit Invoice
          </Button>
        </Link>
        <Button
          fullWidth
          variant="contained"
          onClick={toggleAddPaymentDrawer}
          startIcon={<Icon icon="bx:dollar" />}
        >
          Add Payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default PreviewActions
