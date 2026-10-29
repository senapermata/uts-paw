import useKoleksi from '../hooks/useKoleksi.js'
import './Statistik.css'

export default function Statistik() {
  const { items:daftar } = useKoleksi()
  const rekap = daftar.reduce((hasil, { kategori }) => ({ ...hasil, [kategori]: (hasil[kategori] ?? 0) + 1 }), {})

  return (
    <section>
      <h1>Statistik</h1>
      <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rekap).map(([nama, banyak]) => (
              <tr key={nama}>
                <td>{nama}</td>
                <td>{banyak}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>{daftar.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}