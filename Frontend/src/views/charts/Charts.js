import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from 'src/api'
import { 
  CCard, 
  CCardBody, 
  CCol, 
  CCardHeader, 
  CRow,
  CFormInput,
  CFormLabel,
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import {
  cilSearch
  
} from "@coreui/icons";
// import {
//   CChartBar,
//   CChartDoughnut,
//   CChartLine,
//   CChartPie,
//   CChartPolarArea,
//   CChartRadar,
// } from '@coreui/react-chartjs'
// import { DocsCallout } from 'src/components'

const Charts = () => {
//   const random = () => Math.round(Math.random() * 100)
  const [pendaftar, setPendaftar] = useState([])
  const [nip, setNIP] = useState("")
  const readPendaftar = () => 
  axios.get(
    `${url}/api/pendaftars?populate[peserta][populate]=pegawai&populate=penilaians`)

  useEffect(() => {
    const fetchData = async () => {
      const result = await readPendaftar();
      const arr = result.data.data;
    console.log(arr)
      setPendaftar(arr);
    };
    fetchData();
  }, []);
  
  function dataPeserta() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("nip");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabel");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
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
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
          <CIcon icon={cilSearch}/>
            <strong>  Cari Fit & Proper</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CFormLabel htmlFor="nip" className="col-sm-3 col-form-label"><strong>Input NIP Peserta</strong></CFormLabel>
            </CRow>
            <CRow className="mb-1">
              <CCol>
                <CFormInput type="text" id="nip" placeholder="Input NIP" 
                  value={nip}
                  onChange={(e) => {
                  setNIP(e.target.value);
                  console.log(nip)
              }}/>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CButton type="submit" color="primary" variant="" id="cek" onClick={() => dataPeserta()}>
                  Cari Peserta
                </CButton>
              </CCol>
            </CRow>
            
          </CCardBody>
        </CCard>
        
        <CCard className="mb-4">
            <CCardBody>
              <CTable id="tabel" align="middle" className="mb-0 border" hover responsive bordered>
                <CTableHead color="secondary">
                  <tr>
                    <th className="text-center">
                      No
                    </th>
                    <th className="text-center">
                      NIP
                    </th>
                    <th className="text-center">Nama</th>
                    <th className="text-center">Jabatan Proyeksi</th>
                    <th className="text-center">
                      Tgl Uji
                    </th>
                    <th className="text-center">Hasil Nilai</th>
                    <th className="text-center">Lihat Report Nilai</th>
                  </tr>
                </CTableHead>
                <CTableBody>
                  {pendaftar.map((item,index) => (
                    <tr v-for="item in tableItems">
                     <td className="text-center">
                      <div>{index+1}</div>
                      </td>
                      <td>
                      <div>{item.attributes.peserta.data.attributes.pegawai.data.attributes.nip}</div>
                      </td>
                      <td>
                      <div>{item.attributes.peserta.data.attributes.pegawai.data.attributes.nama}</div>
                      </td>
                      <td>
                      <div>{item.attributes.proyeksi_jabatan}</div>
                      </td>
                      <td className="text-center">
                      <div>{item.attributes.tangal}</div>
                      </td>
                      <td>
                      {/* <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</div> */}
                      </td>
                      <td>
                      {/* <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</div> */}
                      </td>
                    </tr>
                  ))}
                </CTableBody>
                </CTable>
                </CCardBody>
                </CCard>
      </CCol>
    </CRow>
    // <CRow>
    //   {/* <CCol xs={12}>
    //     <DocsCallout
    //       name="Chart"
    //       href="components/chart"
    //       content="React wrapper component for Chart.js 3.0, the most popular charting library."
    //     />
    //   </CCol> */}
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Pencarian FIt & Proper</CCardHeader>
    //       <CCardBody>
    //         <CChartBar
    //           data={{
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [
    //               {
    //                 label: 'GitHub Commits',
    //                 backgroundColor: '#f87979',
    //                 data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
    //               },
    //             ],
    //           }}
    //           labels="months"
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Line Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartLine
    //           data={{
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [
    //               {
    //                 label: 'My First dataset',
    //                 backgroundColor: 'rgba(220, 220, 220, 0.2)',
    //                 borderColor: 'rgba(220, 220, 220, 1)',
    //                 pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    //                 pointBorderColor: '#fff',
    //                 data: [random(), random(), random(), random(), random(), random(), random()],
    //               },
    //               {
    //                 label: 'My Second dataset',
    //                 backgroundColor: 'rgba(151, 187, 205, 0.2)',
    //                 borderColor: 'rgba(151, 187, 205, 1)',
    //                 pointBackgroundColor: 'rgba(151, 187, 205, 1)',
    //                 pointBorderColor: '#fff',
    //                 data: [random(), random(), random(), random(), random(), random(), random()],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Doughnut Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartDoughnut
    //           data={{
    //             labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    //             datasets: [
    //               {
    //                 backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
    //                 data: [40, 20, 80, 10],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Pie Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartPie
    //           data={{
    //             labels: ['Red', 'Green', 'Yellow'],
    //             datasets: [
    //               {
    //                 data: [300, 50, 100],
    //                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Polar Area Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartPolarArea
    //           data={{
    //             labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    //             datasets: [
    //               {
    //                 data: [11, 16, 7, 3, 14],
    //                 backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    //   <CCol xs={6}>
    //     <CCard className="mb-4">
    //       <CCardHeader>Radar Chart</CCardHeader>
    //       <CCardBody>
    //         <CChartRadar
    //           data={{
    //             labels: [
    //               'Eating',
    //               'Drinking',
    //               'Sleeping',
    //               'Designing',
    //               'Coding',
    //               'Cycling',
    //               'Running',
    //             ],
    //             datasets: [
    //               {
    //                 label: 'My First dataset',
    //                 backgroundColor: 'rgba(220, 220, 220, 0.2)',
    //                 borderColor: 'rgba(220, 220, 220, 1)',
    //                 pointBackgroundColor: 'rgba(220, 220, 220, 1)',
    //                 pointBorderColor: '#fff',
    //                 pointHighlightFill: '#fff',
    //                 pointHighlightStroke: 'rgba(220, 220, 220, 1)',
    //                 data: [65, 59, 90, 81, 56, 55, 40],
    //               },
    //               {
    //                 label: 'My Second dataset',
    //                 backgroundColor: 'rgba(151, 187, 205, 0.2)',
    //                 borderColor: 'rgba(151, 187, 205, 1)',
    //                 pointBackgroundColor: 'rgba(151, 187, 205, 1)',
    //                 pointBorderColor: '#fff',
    //                 pointHighlightFill: '#fff',
    //                 pointHighlightStroke: 'rgba(151, 187, 205, 1)',
    //                 data: [28, 48, 40, 19, 96, 27, 100],
    //               },
    //             ],
    //           }}
    //         />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow>
  )
}

export default Charts
