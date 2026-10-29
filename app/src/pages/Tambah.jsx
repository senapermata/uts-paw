import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Daun', namaLatin: '', frekuensiSiram: '', kebutuhanCahaya:'' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form id="form-tambah" className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tanaman</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Daun</option>
        <option>Bunga</option>
        <option>Sukulen</option>
        <option>Gantung</option>
      </select>

      <label htmlFor="namaLatin">Nama Latin</label>
      <input id="namaLatin" name="namaLatin" value={form.namaLatin} onChange={ubah} />

      <label htmlFor="frekuensiSiram">frekuensi Siram</label>
      <input id="frekuensiSiram" name="frekuensiSiram" value={form.frekuensiSiram} onChange={ubah} />

      <label htmlFor="kebutuhanCahaya">kebutuhan Cahaya</label>
      <select id="kebutuhanCahaya" name="kebutuhanCahaya" value={form.kebutuhanCahaya} onChange={ubah}>
        <option>teduh</option>
        <option>sedang</option>
        <option>penuh</option>
      </select>


      <button type="submit">Simpan</button>
    </form>
  )
}