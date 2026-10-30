import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Galat from './components/Galat.jsx'
import Muat from './components/Muat.jsx'
import KartuItem from './components/KartuItem.jsx'
import Tentang from './pages/Tentang.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'

describe('komponen dan halaman', () => {
  it('Galat menampilkan pesan dengan role alert', () => {
    render(<Galat pesan="Judul wajib diisi" />)
    expect(screen.getByRole('alert').textContent).toBe('Judul wajib diisi')
  })

  it('Muat menerima teks khusus lewat prop', () => {
    render(<Muat teks="Tunggu sebentar" />)
    expect(screen.getByText('Tunggu sebentar')).toBeTruthy()
  })

  it('KartuItem menampilkan judul sebagai tautan ke halaman detail', () => {
    const item = {
  id: '1',
  judul: 'Aglaonema',
  kategori: 'Daun',
  namaLatin: 'Aglaonema commutatum',
  frekuensiSiram: '2x seminggu',
  kebutuhanCahaya: 'sedang',
}
    render(
      <MemoryRouter>
        <KartuItem item={item} />
      </MemoryRouter>,
    )
    const tautan = screen.getByRole('link', { name: 'Aglaonema' })
    expect(tautan.getAttribute('href')).toBe('/koleksi/1')
  })

  it('Tentang menampilkan NIM', () => {
    render(<Tentang />)
    expect(screen.getByText(/124140018/)).toBeTruthy()
  })

  it('halaman 404 menampilkan teks 404', () => {
    render(
      <MemoryRouter>
        <TidakDitemukan />
      </MemoryRouter>,
    )
    expect(screen.getByText('404')).toBeTruthy()
  })
})