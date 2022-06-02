import React, { useState, useEffect } from "react";
import url from '../../../api';
import axios from "axios";

import {
  CAvatar,
  CButton,
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  //CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
//import { CChartLine } from '@coreui/react-chartjs'
//import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from "@coreui/icons-react";
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  // cibGoogle,
  // cibFacebook,
  // cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  // cibTwitter,
  // cilCloudDownload,
  cilPeople,
  // cilUser,
  // cilUserFemale,
  cilUserFollow,
  cilPen,
} from "@coreui/icons";
import { Link, useNavigate } from "react-router-dom";


const ButtonGroups = () => {

  const [penguji, setPenguji] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${url}/api/pengujis?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][populate][2]=jenjang`);
      console.log(result.data.data);
      const arr = result.data.data;
      setPenguji(arr);
    };
    fetchData();
  }, []);

  return (
    <>
      <CRow className="mb-3">
        <CCol>
          <Link to={'/buttons/dropdowns'}>
            <CButton color="secondary">
            <CIcon icon={cilUserFollow}></CIcon>
              Tambah Data Penguji
            </CButton>
          </Link>
        </CCol> 
      </CRow>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Data Penguji</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      No
                    </CTableHeaderCell>
                    <CTableHeaderCell>Nama</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      NIP
                    </CTableHeaderCell>
                    <CTableHeaderCell>Jabatan</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Grade
                    </CTableHeaderCell>
                    <CTableHeaderCell>Jenjang</CTableHeaderCell>
                    <CTableHeaderCell>Edit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {penguji.map((item,index) => (
                    <CTableRow v-for="item in tableItems">
                     <CTableDataCell className="text-center">
                      <div>{index+1}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.nama}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.pegawai.data.attributes.nip}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <Link to={{
                        pathname:`/base/cards/${item.attributes.pegawai.data.attributes.nip}`,
                        state: {nip:item.attributes.pegawai.data.attributes.nip }
                      }}>
                      <CButton color="#ffffff">
                      <CIcon icon={cilPen}></CIcon>
                      </CButton>
                      </Link>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};


export default ButtonGroups
