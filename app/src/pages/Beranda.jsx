import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items: dt, loading: muat } = useKoleksi()
  const jmlKat = new Set(dt.map((t) => t.kategori)).size

  return (
    <section id="hero" className="hero">
      <p className="hero-tema">Tema: {mahasiswa.tema}</p>
      <h1>Koleksi Tanaman Hias</h1>
      <p className="hero-deskripsi">
        Lihat, cari, dan kelola daftar tanaman hias dalam satu tempat.
      </p>
      {muat ? (
        <p className="ringkasan">Menyiapkan daftar tanaman...</p>
      ) : (
        <p className="ringkasan">
          Ada {dt.length} tanaman dalam {jmlKat} kategori.
        </p>
      )}
      <Link to="/koleksi" className="tombol">
        Jelajahi semua tanaman
      </Link>
    </section>
  )
}