import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormCheck,
  CFormGroup,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const nilaiFP = () => {
const {nip} = useParams()
console.log(nip);
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

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
            <CRow className="mb-3">
                <CCol sm={4}>
                    <CFormInput type="text" id="nama" placeholder="Nama" disabled/>
                </CCol>
                <CCol sm={3}>
                    <CFormInput type="text" id="nip" placeholder="NIP" value={nip} disabled/>
                </CCol>
                <CCol sm={2}>
                    <CFormInput type="date" id="tanggal" placeholder="Tanggal" disabled/>
                </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
          {/* <p id="demo"></p>
          <CForm
                // onSubmit={submitHandler}
                // method="post"
                // encType="multipart/form-data"
                // className="form-horizontal"
              >
            <CRow className="mb-3">
              <CFormLabel htmlFor="nip" className="col-sm-2 col-form-label">NIP</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="nip" placeholder="NIP" 
            //       value={nip}
            //       onChange={(e) => {
            //       setNIP(e.target.value);
            //       console.log(nip)
            //   }}
            />
              </CCol>
              <CCol>
                <CButton type="submit" color="warning" variant="outline" id="cek" onClick={() => dataPeserta()}>
                  CEK
                </CButton>
              </CCol>
            </CRow>
            
            <CRow className="mb-3">
            <CFormLabel htmlFor="nama" className="col-sm-2 col-form-label">Nama</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="nama" placeholder="Nama" disabled/>
            </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="jabatan" className="col-sm-2 col-form-label">Jabatan</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="jabatan" placeholder="Jabatan" disabled/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Grade</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="grade" placeholder="Grade" disabled/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="date" className="col-sm-2 col-form-label">Date</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="date" id="date" />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="proyeksi" className="col-sm-2 col-form-label">Proyeksi</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="text" id="proyeksi" placeholder="Jabatan Proyeksi"/>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="jenjab" className="col-sm-2 col-form-label">Jenjang Jabatan</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="jenjab" className="mb-3">
                  <option defaultChecked>Pilih...</option>
                  <CDropdownDivider />
                </CFormSelect>              
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="fp" className="col-sm-2 col-form-label">Jenis Fit & Proper</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="fp" className="mb-3" >
                  <option defaultChecked>Pilih...</option>
                  <CDropdownDivider />
                  <option value="Regular">Reguler</option>
                  <option value="Vicon">Vicon</option>
                </CFormSelect>              
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="urjab" className="col-sm-2 col-form-label">Pilih Urjab</CFormLabel>
              <CCol sm={5}>
                <CFormInput type="text" id="urjab" placeholder="Uraian Jabatan"/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="ppt" className="col-sm-2 col-form-label">Upload PPT *.ppt/.pptx</CFormLabel>
              <CCol sm={10}>
                <CFormInput type="file" id="ppt" onChange={handleFilePPT}/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="doc" className="col-sm-2 col-form-label">Upload CV *.doc/.docx</CFormLabel>
              <CCol sm={10}>
              <CFormInput type="file" id="doc" onChange={handleFileCV}/>            
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan1" className="col-sm-2 col-form-label">Pewawancara 1</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="wan1" className="mb-3">
                  <option defaultChecked> </option>
                  <CDropdownDivider />
                </CFormSelect>          
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan2" className="col-sm-2 col-form-label">Pewawancara 2</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="wan2" className="mb-3">
                  <option defaultChecked> </option>
                  <CDropdownDivider />
                </CFormSelect> 
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="wan3" className="col-sm-2 col-form-label">Pewawancara 3</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="wan3" className="mb-3">
                  <option defaultChecked> </option>
                  <CDropdownDivider />
                </CFormSelect>             
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol sm={1}>
                <Link to="/forms/pendaftaranFP" >
                <CButton type="submit" color="primary" variant="" id="button-addon2" onClick={(e)=>submit(e) & pindah("/forms/pendaftaranFP")}>
                  SAVE
                </CButton>
                </Link>
              </CCol>
              <CCol>
                <CButton type="button" color="secondary" variant="" id="button-addon2">
                  BATAL
                </CButton>
              </CCol>
            </CRow>
            </CForm> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default nilaiFP
