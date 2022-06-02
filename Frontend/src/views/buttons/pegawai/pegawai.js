import React, { useState, useEffect } from "react";
import url from 'src/api';
import axios from "axios";
import {
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
  //CCardFooter,
  CCardHeader,
  CCol,
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
import { useNavigate } from "react-router-dom";

const Pegawai = ({navigation}) => {
  const [peserta, setPeserta] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${url}/api/pegawais`);
      console.log(result.data.data);
      const arr = result.data.data;
      setPeserta(arr);
    };
    fetchData();
  }, []);

  return (
    <>
     <CRow className="mb-3">
      </CRow>
    <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Data Pegawai</CCardHeader>
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
                    <CTableHeaderCell>Religion</CTableHeaderCell>
                    <CTableHeaderCell  >
                      Pendidikan
                    </CTableHeaderCell>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                    <CTableHeaderCell>Gender</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {peserta.map((item, index) => (
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                      <div>{index+1}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.nama}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.attributes.nip}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.religion}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.pendidikan}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.email}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>{item.attributes.gender}</div>
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

export default Pegawai;
