import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import { Link, useNavigate } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
  CButton,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import CIcon from "@coreui/icons-react";
import {
  cilUserFollow,
  cilPeople,
  cilFile,
  cilPen,
} from "@coreui/icons";

const penilaianFitProper = () => {
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

  return (
    <CCard className="mb-4">
            <CCardHeader>Penilaian Fit & Proper</CCardHeader>
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
                    <th className="text-center">Penilaian</th>
                    <th className="text-center">Nilai</th>
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
                        belum ada
                      </td>
                      <td align="center">
                      <Link to={{
                        pathname:`/forms/nilaiFP/${item.attributes.peserta.data.attributes.pegawai.data.attributes.nip}`,
                        state: {nip:item.attributes.peserta.data.attributes.pegawai.data.attributes.nip}
                        }}>
                        <CButton color="#ffffff">
                          <CIcon icon={cilPen}></CIcon>
                        </CButton>
                      </Link>
                      </td>
                    </tr>
                  ))}
                </CTableBody>
                </CTable>
            </CCardBody>
          </CCard>
  )
}

export default penilaianFitProper
