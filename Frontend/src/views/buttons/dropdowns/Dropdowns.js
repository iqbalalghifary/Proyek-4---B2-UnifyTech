import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CFormLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
} from '@coreui/icons'

const Dropdowns = () => {
  const [penguji, setpenguji] = useState([])
  const [nip, setNIP] = useState("")
  const readpenguji = () => axios.get(`${url}/api/pegawais?filters[nip][$eq]=${nip}&populate=*`)
  const uri = `${url}/api/pengujis`

  function submit() {
   penguji.map((item)=>{
    axios.post(uri,{
      data : {
        pegawai:item.id
    }
    })
    .then(res=>{
      console.log(res.data);
      alert("Penguji berhasil ditambahkan");
    })
  })
  }
    const datapenguji = async () => {
      const result = await readpenguji();
      const arr = result.data.data;
     setpenguji(arr);
     console.log(penguji)
    };
    useEffect(()=>{
     datapenguji();
    },[]);

  return (
    <CRow>
    <CCard>
    <Link to={'/buttons/button-groups'}>
    <CButton style={{width:120}} color="secondary" className='m-3'>
        <CIcon icon={cilArrowLeft}></CIcon> Kembali
        </CButton>
    </Link>
      <CCardHeader style={{textAlign:"center"}}>
        <h4>Tambah data penguji</h4>
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
              <CButton type="submit" color="warning" variant="outline" id="cek" onClick={() => datapenguji()}>CEK</CButton>
            </CCol>
            </CRow>
            {penguji.map((item,index) => (
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
            <CCol style={{width:400}}>
            </CCol>
            <CCol>
            <CButton style={{width:120, alignSelf:"center"}}  onClick={() => submit()}>Tambah</CButton>
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

export default Dropdowns
