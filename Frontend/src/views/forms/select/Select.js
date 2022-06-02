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

const daftarWawancara = () => {
  const [peserta, setPeserta] = useState([])
  const [penguji, setPenguji] = useState([])
  const [grade, setGrade] = useState([])
  const [nip, setNIP] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  const [selectedFile2, setSelectedFile2] = useState("")
  const readPeserta = () => 
    axios.get(
      `${url}/api/pesertas?populate[pegawai][populate][0]=jabatan&populate[pegawai][populate][1]=grade`)
  const readGrade = () => axios.get(`${url}/api/grades?populate=jenjangs`)
  const readPenguji = () => axios.get(`${url}/api/pengujis?populate[pegawai][populate]=grade`)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await readPeserta();
      const arr = result.data.data;
    console.log(arr)
     setPeserta(arr);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await readGrade();
      const arr2 = result2.data.data;
    console.log(arr2);
    console.log(arr2.length);
     setGrade(arr2);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result3 = await readPenguji();
      const arr3 = result3.data.data;
    console.log(arr3)
     setPenguji(arr3);
    };
    fetchData();
  }, []);  

  function dataPeserta() { 
    let Penguji = []
    const idx = peserta.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    console.log(idx)
    const value = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.value
    const nama_grade = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.nama_grade
    console.log(value)
    console.log(nama_grade)
    document.getElementById("nama").value = peserta[idx].attributes.pegawai.data.attributes.nama
    document.getElementById("jabatan").value = peserta[idx].attributes.pegawai.data.attributes.jabatan.data.attributes.nama_jabatan
    document.getElementById("grade").value = peserta[idx].attributes.pegawai.data.attributes.grade.data.attributes.tingkat_grade
    dataJenjang()
    Penguji = penguji.filter(x => 
      (x.attributes.pegawai.data.attributes.grade.data.attributes.nama_grade != nama_grade) &&
      (x.attributes.pegawai.data.attributes.grade.data.attributes.value > value))
    console.log(Penguji)
    for (let i = 0; i < Penguji.length; i++){
      var opt = document.createElement("option")
      opt.text = Penguji[i].attributes.pegawai.data.attributes.nama + " - " + Penguji[i].attributes.pegawai.data.attributes.nip
      opt.value = Penguji[i].id
      document.getElementById("wan1").options.add(opt)
      console.log(opt.text)
      console.log(opt.value)
    }
    for (let i = 0; i < Penguji.length; i++){
      var opt = document.createElement("option")
      opt.text = Penguji[i].attributes.pegawai.data.attributes.nama + " - " + Penguji[i].attributes.pegawai.data.attributes.nip
      opt.value = Penguji[i].id
      document.getElementById("wan2").options.add(opt)
      console.log(opt.text)
      console.log(opt.value)
    }
    for (let i = 0; i < Penguji.length; i++){
      var opt = document.createElement("option")
      opt.text = Penguji[i].attributes.pegawai.data.attributes.nama + " - " + Penguji[i].attributes.pegawai.data.attributes.nip
      opt.value = Penguji[i].id
      document.getElementById("wan3").options.add(opt)
      console.log(opt.text)
      console.log(opt.value)
    }
  }

  function dataJenjang(){
    const idx = grade.findIndex(x => 
      x.attributes.tingkat_grade === document.getElementById("grade").value)
    console.log(idx)
    console.log(grade[idx].attributes.jenjangs.data[0].attributes.nama_jenjang)
    for (let i = 0; i < grade[idx].attributes.jenjangs.data.length; i++){
      var opt = document.createElement("option")
      opt.text = grade[idx].attributes.jenjangs.data[i].attributes.nama_jenjang
      opt.value = grade[idx].attributes.jenjangs.data[i].attributes.nama_jenjang
      document.getElementById("jenjab").options.add(opt)
      console.log(opt.text)
      console.log(opt.value)
    }
  }

  const uri = `${url}/api/pendaftaran-wawancaras`
  const upload = `${url}/api/upload`
  //const [idPendaftar, setIdPendaftar] = useState("")
  function submit(e) {
    const idx = peserta.findIndex(x => 
      x.attributes.pegawai.data.attributes.nip === document.getElementById("nip").value)
    e.preventDefault();
    axios.post(uri,{
      data : {
        uraian_jabatan_wwc :document.getElementById("urjab").value,
        tanggal_wwc : document.getElementById("date").value,
        proyeksi_jabatan_wwc : document.getElementById("proyeksi").value,
        jenjang_jabatan_wwc : document.getElementById("jenjab").value,
        peserta: peserta[idx].id,
        pengujis: [document.getElementById("wan1").value, document.getElementById("wan2").value],
    }
    })
    .then(res=>{
      //setIdPendaftar(res.data.data.id)
      console.log(res.data)
      console.log(res.data.data.id)

      let formData = new FormData()
      formData.append('files', selectedFile)
      formData.append('ref', 'api::pendaftaran-wawancara.pendaftaran-wawancara')
      formData.append('refId', res.data.data.id)
      formData.append('field', 'file_cv_wwc')

      console.log(formData)
      axios({
        method: "post",
        url: upload,
        data: formData,
      })
        .then(function (response) {
          //handle success
          console.log(response);
        });

        let formData2 = new FormData()
        formData2.append('files', selectedFile2)
        formData2.append('ref', 'api::pendaftaran-wawancara.pendaftaran-wawancara')
        formData2.append('refId', res.data.data.id)
        formData2.append('field', 'file_ppt_wwc')
  
        console.log(formData)
        axios({
          method: "post",
          url: upload,
          data: formData2,
        })
          .then(function (response) {
            //handle success
            console.log(response);
          });
    });
    //console.log(document.getElementById("ppt").value)
   
  }

  const handleFileCV = (e) => {
    console.log(e.target.files)
    setSelectedFile(e.target.files[0])
  }

  const handleFilePPT = (e) => {
    console.log(e.target.files)
    setSelectedFile2(e.target.files[0])
  }

  const pindah = useNavigate();

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">  
          <CCardHeader>
            <strong>Pendaftaran/Updating</strong> <small>Peserta Wawancara Fit Proper</small>
          </CCardHeader>
          <CCardBody>
          <p id="demo"></p>
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
                  value={nip}
                  onChange={(e) => {
                  setNIP(e.target.value);
                  console.log(nip)
              }}/>
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
                  <option disabled>Pilih...</option>
                  <CDropdownDivider />
                </CFormSelect>              
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel htmlFor="fp" className="col-sm-2 col-form-label">Jenis Fit & Proper</CFormLabel>
              <CCol sm={5}>
                <CFormSelect id="fp" className="mb-3" >
                  <option disabled>Pilih...</option>
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
                <CButton type="submit" color="primary" variant="" id="button-addon2" onClick={(e)=>submit(e) & pindah("/forms/pendaftaranWWC")}>
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
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default daftarWawancara
