import React, { useState, useEffect } from "react";
import url from '../../../api';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  CRow,
  CCol,
  CButton,
  CInputGroup,
  CFormInput,
  CCard,
  CCardHeader,
  CCardBody,
  CTable,
  CTableHead,
  CTableBody,

}from '@coreui/react'
import CIcon from "@coreui/icons-react";
import {
  cilUserFollow,
  cilPeople,
  cilFile,
  cilPen,
} from "@coreui/icons";

const DaftarFP = () => {
    const navigate = useNavigate();
    const [pendaftar, setPendaftar] = useState([])
    const readPendaftar = () => 
    axios.get(
      `${url}/api/pendaftars?populate[peserta][populate]=pegawai&populate[pengujis][populate]=pegawai&populate=penilaians`)
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await readPendaftar();
        const arr = result.data.data;
      console.log(arr)
        setPendaftar(arr);
      };
      fetchData();
    }, []);
    function getJadwal() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("jadwal");
      filter = input.value.toUpperCase();
      table = document.getElementById("tabel");
      tr = table.getElementsByTagName("tr");
    
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }

    return (
        <>
        <CRow>
            <CCol style={{flex:1}}> Pilih Bulan Tahun : </CCol>
            <CCol style={{flex:1}}>
            <CInputGroup className="mb-3">
              <CFormInput
                id="jadwal" color="secondary" variant="outline" style={{ width:350}} type="month"
              />
            </CInputGroup>
              </CCol>
              <CCol style={{flex:1}}>
                <CButton type="submit" id="go" onClick={() => getJadwal()}>
                  Go</CButton>
              </CCol>
              </CRow>
              <CRow>
              <CIcon icon="cilCalendar" size="xl"/>
              </CRow>
          <CRow className="mb-3">
            <CCol>
              <Link to={'/forms/input-group'}>
                <CButton color="secondary">
                <CIcon icon={cilUserFollow}></CIcon>
                   Pendaftaran FP
                </CButton>
              </Link>
            </CCol> 
          </CRow>
          <CCard className="mb-4">
            <CCardHeader>Jadwal Fit & Proper</CCardHeader>
            <CCardBody>
              <CTable id="tabel" align="middle" className="mb-0 border" hover responsive bordered>
                <CTableHead color="secondary">
                  <tr>
                    <th className="text-center">
                      No
                    </th>
                    <th className="text-center">Nama</th>
                    <th className="text-center">
                      NIP
                    </th>
                    <th className="text-center">Jabatan</th>
                    <th className="text-center">
                      Proyeksi
                    </th>
                    <th className="text-center">Tanggal</th>
                    <th className="text-center">Penguji</th>
                    <th className="text-center">Lampiran File</th>
                    <th className="text-center">Edit</th>
                  </tr>
                </CTableHead>
                <CTableBody>
                  {pendaftar.map((item,index) => (
                    <tr v-for="item in tableItems">
                     <td className="text-center">
                      <div>{index+1}</div>
                      </td>
                      <td>
                      <div>{item.attributes.peserta.data.attributes.pegawai.data.attributes.nama}</div>
                      </td>
                      <td>
                      <div>{item.attributes.peserta.data.attributes.pegawai.data.attributes.nip}</div>
                      </td>
                      <td>
                      <div>{item.attributes.jenjang_jabatan}</div>
                      </td>
                      <td>
                      <div>{item.attributes.proyeksi_jabatan}</div>
                      </td>
                      <td className="text-center">
                      <div>{item.attributes.tangal}</div>
                      </td>
                      <td align="center">
                        <CButton color="#ffffff">
                          <CIcon icon={cilPeople} 
                            title=
                            {item.attributes.pengujis.data[0].attributes.pegawai.data.attributes.nama + ", " 
                            + item.attributes.pengujis.data[1].attributes.pegawai.data.attributes.nama}></CIcon>
                        </CButton> 
                      </td>
                      <td align="center">
                        <CButton color="#ffffff">
                          <CIcon icon={cilFile}></CIcon>
                        </CButton>
                      </td>
                      <td align="center">
                        <CButton color="#ffffff">
                          <CIcon icon={cilPen}></CIcon>
                        </CButton>
                      </td>
                    </tr>
                  ))}
                </CTableBody>
                </CTable>
            </CCardBody>
          </CCard>
        </>
    );
};

export default DaftarFP