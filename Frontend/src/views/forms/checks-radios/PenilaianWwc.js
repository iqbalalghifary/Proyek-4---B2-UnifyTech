import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../api'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableHead,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const penilaianFitProper = () => {
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
                    <th className="text-center">Penguji</th>
                    <th className="text-center">Lampiran File</th>
                    <th className="text-center">Isi Nilai</th>
                  </tr>
                </CTableHead>
                <CTableBody>
                  {/* {pendaftar.map((item,index) => (
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

                      </td>
                      <td>
                      </td>
                      <td>
                      </td>
                    </tr>
                  ))} */}
                </CTableBody>
                </CTable>
            </CCardBody>
          </CCard>
  )
}

export default penilaianFitProper
