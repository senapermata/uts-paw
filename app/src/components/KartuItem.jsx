import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, namaLatin, frekuensiSiram, kebutuhanCahaya } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {namaLatin}
      </p>
       <p>
        {kategori} . siram {frekuensiSiram} . cahaya {kebutuhanCahaya}
      </p>
    </article>
  )
}