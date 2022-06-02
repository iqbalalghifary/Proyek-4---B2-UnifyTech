import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))
const administrasi_users = React.lazy(() => import('./views/buttons/administrasiUser/administrasi_users'))
const Pegawai= React.lazy(() => import('./views/buttons/pegawai/pegawai'))
//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const NilaiFP = React.lazy(() => import('./views/forms/checks-radios/NilaiFP'))
const PenilaianWwc = React.lazy(() => import('./views/forms/checks-radios/PenilaianWwc'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/Input-group/InputGroup'))
const PendaftaranFP = React.lazy(() => import('./views/forms/Input-group/PendaftaranFP'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const PendaftaranWwc = React.lazy(() => import('./views/forms/select/PendaftaranWwc'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))
const rekapnilaifitproper = React.lazy(() => import('./views/forms/rekap-nilai-fit-proper/rekapnilaifitproper'))
const Charts = React.lazy(() => import('./views/charts/Charts'))
const ReportCetakFitProper = React.lazy(() => import('./views/forms/ReportCetakFitProper/ReportCetakFitProper'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
 
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/forms/rekap-nilai-fit-proper', element: rekapnilaifitproper },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Tambah Data Peserta', element: Breadcrumbs },
  { path: '/base/cards/:type', name: 'Edit', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Masters', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Peserta', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Tambah Data Penguji', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Penguji', element: ButtonGroups },
  { path: '/buttons/adminsitrasiUsers', name: 'Administrasi User', element:administrasi_users},
  { path: '/charts', name: 'Cari Fit & Proper', element: Charts },
  { path: '/forms', name: 'Fit & Proper', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Form Pendaftaran Wawancara', element: Select },
  { path: '/forms/pendaftaranWWC', name: 'Pendaftaran Wawancara', element: PendaftaranWwc },
  { path: '/forms/checks-radios', name: 'Penilaian Fit & Proper', element: ChecksRadios },
  { path: '/forms/nilaiFP', name: 'Penilaian Fit & Proper', element: NilaiFP },
  { path: '/forms/penilaianWawancara', name: 'Penilaian Wawancara', element: PenilaianWwc },
  { path: '/forms/range', name: 'Penilaian Wawancara  ', element: Range },
  { path: '/forms/input-group', name: 'Form Pendaftaran Fit & Proper', element: InputGroup },
  { path: '/forms/pendaftaranFP', name: 'Pendaftaran Fit & Proper', element: PendaftaranFP },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/forms/ReportCetakFitProper', name: 'Report Cetak Fit Proper', element: ReportCetakFitProper },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/buttons/pegawai', name: 'List Pegawai', element: Pegawai },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
