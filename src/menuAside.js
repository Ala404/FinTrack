import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiHandCoin,
  mdiSwapVerticalBold
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  //expenses
  {
    to: '/expenses',
    icon: mdiViewList,
    label: 'Expenses'
  },
  // Assets & Liabilities
  {
    to: '/transactions',
    icon: mdiSwapVerticalBold,
    label: 'Transactions'
  },

  {
    to: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle
  },
  {
    to: '/login',
    label: 'Login',
    icon: mdiLock
  }

]
