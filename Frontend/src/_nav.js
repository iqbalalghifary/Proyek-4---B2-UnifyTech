import React from "react";
import CIcon from "@coreui/icons-react";
import {
  // cilBell,
  // cilCalculator,
  cilChartPie,
  // cilCursor,
  // cilDrop,
  cilLaptop,
  cilNotes,
  // cilPencil,
  // cilPuzzle,
  cilSearch,
  cilSpeedometer,
  //cilStar,
  cilInfo,
  cilUser,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Masters",
    to: "/buttons",
    icon: <CIcon icon={cilLaptop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Peserta",
        to: "/buttons/buttons",
      },
      {
        component: CNavItem,
        name: "Penguji",
        to: "/buttons/button-groups",
      },
      {
        component: CNavItem,
        name: "Pegawai",
        to: "/buttons/pegawai",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Fit & Proper",
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Pendaftaran Fit & Proper",
        to: "/forms/PendaftaranFP",
      },
      {
        component: CNavItem,
        name: "Pendaftaran Wawancara",
        to: "/forms/PendaftaranWwc",
      },
      {
        component: CNavItem,
        name: "Penilaian Fit & Proper",
        to: "/forms/checks-radios",
      },
      {
        component: CNavItem,
        name: "Penilaian Wawancara",
        to: "/forms/penilaianWawancara",
      },
      
    ],
  },

  {
    component: CNavGroup,
    name: "Report",
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Rekap Nilai Fit & Proper",
        to: "/forms/rekap-nilai-fit-proper",
      },
      {
        component: CNavItem,
        name: "Rekap Manual Nilai Fit & Proper",
        to: "/forms/rekap-manual-fit-proper",
      },
      {
        component: CNavItem,
        name: "Cetak Nilai Fit & Proper",
        to: "/views/forms/ReportCetakFitProper",
      },
      {
        component: CNavItem,
        name: "Rekap Nilai Wawancara",
        to: "/forms/rekap-nilai-wawancara",
      },
      {
        component: CNavItem,
        name: "Cetak Nilai Wawancara",
        to: "/forms/cetak-nilai-wawancara",
      },
    ],
  },

  {
    component: CNavItem,
    name: "Pencarian Fit & Proper",
    to: "/charts",
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Administrasi User",
    to: "/buttons/adminsitrasiUsers",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // // {
  // //   component: CNavTitle,
  // //   name: 'Extras',
  // // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
];

export default _nav;
