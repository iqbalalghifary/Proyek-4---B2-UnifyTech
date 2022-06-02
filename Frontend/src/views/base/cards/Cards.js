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
  CRow,
  CFormInput,
  CFormLabel,
} from '@coreui/react'

import { useParams } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
} from '@coreui/icons'

function Cards(props){
  const {type} = useParams();
  console.log(type);
  const [peserta, setPeserta] = useState([])
  const [jabatan, setJabatan] = useState([])
  const [nama, setNama] = useState([])
  const [grade, setGrade] = useState([])
  const readPeserta = () => axios.get(`${url}/api/pegawais?filters[nip][$eq]=${type}&populate=*`)
  const readPegawai = () => 
  axios.get(
    `${url}/api/pesertas?populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade`)
  // const edit = () => {
  //   const article = { nama_jabatan: 'React Put Request Example',
  //  };
  //   const response = await axios.put(`${url}/api/jabatan`, article);
  //   this.setState({ updatedAt: response.data.updatedAt });
  // }

  const uri = `${url}/api/pegawais?filters[nip][$eq]=${type}&populate=*`
    
  function submit(e) {
    axios.put(uri,{
      data : {
        nama :document.getElementById("nama").value,
        nip : document.getElementById("nip").value,
        jabatan : document.getElementById("jabatan").value,
        grade : document.getElementById("grade").value,
        jenjang : document.getElementById("jenjang").value,
        bidang : document.getElementById("bidang").value,
        sub_bidang : document.getElementById("sub_bidang").value,
        unit : document.getElementById("unit").value
    }
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
      
            {peserta.map((item,index) => (
              <>
              <CCardHeader style={{textAlign:"center"}}>
              <h4>Edit data {item.attributes.nama}</h4>
            </CCardHeader>
            <CCardBody>
            <CRow className="mb-3">
            <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">NIP</CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id='NIP' placeholder="Grade" value={item.attributes.nip} disabled />
            </CCol>
          </CRow><CRow className="mb-3">
                <CFormLabel htmlFor="nama" className="col-sm-2 col-form-label">Nama</CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="text" id='nama' placeholder="nama"  value={item.attributes.nama} />
                </CCol>
              </CRow><CRow className="mb-3">
                  <CFormLabel htmlFor="jabatan" className="col-sm-2 col-form-label">Jabatan</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id="jabatan" placeholder="Jabatan" value={item.attributes.jabatan.data.attributes.nama_jabatan} />
                  </CCol>
                </CRow><CRow className="mb-3">
                  <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Grade</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id='grade' placeholder="Grade" value={item.attributes.grade.data.attributes.nama_grade}/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Jenjang</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id='jenjang' placeholder="Grade" value={item.attributes.jenjang.data.attributes.nama_jenjang}  />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Bidang</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id='bidang' placeholder="Grade" value={item.attributes.bidang.data.attributes.nama_bidang} />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Sub Bidang</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id='sub_bidang' placeholder="Grade" value={item.attributes.sub_bidang.data.attributes.nama_subBidang}  />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="grade" className="col-sm-2 col-form-label">Unit</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="text" id='unit' placeholder="Grade" value={item.attributes.unit.data.attributes.nama_unit} />
                  </CCol>
                </CRow>
                <CRow>
            <CCol>
            </CCol>
              <CCol className='mb-3'>
            <CButton style={{width:120, alignSelf:"right"}} onClick={submit}>Save</CButton>
            </CCol>
            </CRow>       
            <CRow>
      <CCol xs>
        <CCard className="mb-4">
       
          
        </CCard>
      </CCol>
    </CRow>
      </CCardBody></>
            ))}
     
    </CCard>
  </CRow>
  )
}

export default Cards
