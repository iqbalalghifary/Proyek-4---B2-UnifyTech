import React, { useState, useEffect } from "react";
import {
  // CButton,
  // CButtonGroup,
  CCard,
  CCardBody,
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
import CIcon from "@coreui/icons-react";
import {
  cilPen,
} from "@coreui/icons";
import { useNavigate } from "react-router-dom";

const administrasi_users = () => {
  const [peserta, setPeserta] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      //const result = await axios.get(`${url}/api/pesertas?populate[pegawai][fields][0]=nama&populate[pegawai][fields][1]=nip&populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade&populate[pegawai][populate][2]=jenjang`);
      console.log(result.data.data);
      const arr = result.data.data;
      setPeserta(arr);
    };
    fetchData();
  }, []);

  return (
    <>
     
    <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      No
                    </CTableHeaderCell>
                    <CTableHeaderCell>Edit Hak Akses</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      NIP
                    </CTableHeaderCell>
                    <CTableHeaderCell>Nama</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Password
                    </CTableHeaderCell>
                    <CTableHeaderCell>Akses</CTableHeaderCell>
                    <CTableHeaderCell>Administrasi User</CTableHeaderCell>
                    <CTableHeaderCell>Master</CTableHeaderCell>
                    <CTableHeaderCell>Daftar FP</CTableHeaderCell>
                    <CTableHeaderCell>Nilai FP</CTableHeaderCell>
                    <CTableHeaderCell>Report</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {peserta.map((item, index) => (
                    <CTableRow v-for="item in tableItems">
                      <CTableDataCell className="text-center">
                      <div>{index+1}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.edit_hak_akses}</div>
                          <CIcon icon={cilPen}></CIcon>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                          <div>{item.attributes.pegawai.data.attributes.nip}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jabatan.data.attributes.nama}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                          <div>{item.attributes.pegawai.data.attributes.grade.data.attributes.password}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.akses}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.administrasi_users}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.master}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.daftar_fp}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.nilai_fp}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                          <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.report}</div>
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

export default administrasi_users;
