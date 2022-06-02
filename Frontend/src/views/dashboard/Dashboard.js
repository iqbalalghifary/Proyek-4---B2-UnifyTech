import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from 'src/api'

import {
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CDropdownItem,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine, CChartPie } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilCalendar,
} from '@coreui/icons'


const Dashboard = () => {

  const [pendaftar, setPendaftar] = useState([])
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

  return(
    <CRow>
      <CCard>
        <CCardHeader style={{textAlign:"center"}}>
          <h4>Welcome To Fit and Proper Dahsboard</h4>
        </CCardHeader>
        <CCardBody>
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
              <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Jadwal Fit Proper</CCardHeader>
            <CCardBody>
              <CTable id="tabel" align="middle" className="mb-0 border" hover responsive>
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
                      <td>
                      {/* <div>{item.attributes.pegawai.data.attributes.jenjang.data.attributes.nama_jenjang}</div> */}
                      </td>
                    </tr>
                  ))}
                </CTableBody>
                {/* <CTableBody> */}
                  {/* {peserta.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon
                          size="xl"
                          icon={item.country.flag}
                          title={item.country.name}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">
                              {item.usage.period}
                            </small>
                          </div>
                        </div>
                        <CProgress
                          thin
                          color={item.usage.color}
                          value={item.usage.value}
                        />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">
                          Last login
                        </div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody> */}
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        </CCardBody>
      </CCard>
    </CRow>

  )
}

export default Dashboard
