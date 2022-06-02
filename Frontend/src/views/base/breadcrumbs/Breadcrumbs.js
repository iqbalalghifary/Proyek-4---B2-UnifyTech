import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import { Link, useNavigate } from "react-router-dom";
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
  CFormLabel,
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
  cilArrowLeft,
  cilText,
} from '@coreui/icons'

const Breadcrumbs = () => {
  const [peserta, setPeserta] = useState([])
  const [nip, setNIP] = useState("")
  const readPeserta = () => axios.get(`${url}/api/pegawais?filters[nip][$eq]=${nip}&populate=*`)

  const uri = `${url}/api/pesertas`

  function submit() {
   peserta.map((item)=>{
    axios.post(uri,{
      data : {
        pegawai:item.id
    }
    })
    .then(res=>{
      console.log(res.data)
      alert("Peserta berhasil ditambahkan")
    })
  })
  }

    const dataPeserta = async () => {
      const result = await readPeserta();
      const arr = result.data.data;
     setPeserta(arr);
     console.log(peserta)
    };
    useEffect(()=>{
     dataPeserta();
    },[]);

  return (
    <CRow>
    <CCard>
    <Link to={'/buttons/buttons'}>
    <CButton style={{width:120}} color="secondary" className='m-3'>
        <CIcon icon={cilArrowLeft}></CIcon> Kembali
        </CButton>
      </Link>
      <CCardHeader style={{textAlign:"center"}}>
        <h4>Tambah data peserta</h4>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol> Input NIP : </CCol>
          <CCol style={{flex:1}}>
          <CInputGroup className="mb-3">
            <CFormInput
              color="secondary" style={{ width:350}} type="number"
              id="nip" placeholder="NIP"
              value={nip}
              onChange={(e) => {
              setNIP(e.target.value);
              console.log(nip)
          }}
            />
          </CInputGroup>
            </CCol>
            <CCol style={{flex:1}}>
              <CButton type="submit" color="warning" variant="outline" id="cek" onClick={() => dataPeserta()}>CEK</CButton>
            </CCol>
            </CRow>
            {peserta.map((item,index) => (
            <><CRow className="mb-3">
                <CFormLabel htmlFor="nama" className="col-sm-2 col-form-label">Nama</CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="text" id='nama' placeholder="nama" value={item.attributes.nama} disabled />
                </CCol>
              </CRow><CRow className="mb-3">
                  <CFormLabel htmlFor="jabatan" className="col-sm-2 col-form-label">Jabatan</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id="jabatan" placeholder="Jabatan" value={item.attributes.jabatan.data.attributes.nama_jabatan}disabled />
                  </CCol>
                </CRow><CRow className="mb-3">
                  <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Grade</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id='grade' placeholder="Grade" value={item.attributes.grade.data.attributes.nama_grade} disabled />
                  </CCol>
                </CRow></>
            ))}
            <CRow>
            <CCol style={{width:250}}>
            </CCol>
              <CCol>
            <CButton style={{width:120, alignSelf:"right"}}  onClick={() => submit()}>Tambah</CButton>
            </CCol>
            <CCol style={{width:400}}>
            </CCol>
            </CRow>
            <CRow>
      <CCol xs>
        <CCard className="mb-4">
       
          
        </CCard>
      </CCol>
    </CRow>
      </CCardBody>
    </CCard>
  </CRow>
  )
}

export default Breadcrumbs
