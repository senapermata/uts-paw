import { useState } from 'react'
import useKoleksi from '../hooks/useKoleksi.js'
import KotakPencarian from '../components/KotakPencarian.jsx'
import KartuItem from '../components/KartuItem.jsx'

export default function Koleksi() {
  const { items, loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kat, setKat] = useState('Semua')

  if (loading) return <p>Memuat data...</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>

  const daftarKat = ['Semua', ...new Set(items.map((i) => i.kategori))]
  const tampil = items.filter(
    (i) =>
      i.judul.toLowerCase().includes(cari.toLowerCase()) &&
      (kat === 'Semua' || i.kategori === kat),
  )

  return (
    <section>
      <h1>Koleksi</h1>
      <div className="alat-koleksi">
        <KotakPencarian nilai={cari} onUbah={setCari} />
        <select aria-label="Kategori" value={kat} onChange={(e) => setKat(e.target.value)}>
          {daftarKat.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      {tampil.length === 0 ? (
        <p>Tidak ada item yang cocok.</p>
      ) : (
        <div className="daftar-kartu">
          {tampil.map((i) => (
            <KartuItem key={i.id} item={i} />
          ))}
        </div>
      )}
    </section>
  )
}