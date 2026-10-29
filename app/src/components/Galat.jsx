// src/components/Galat.jsx
export default function Galat({ pesan }) {
  if (!pesan) return null
  return <p role="alert">{pesan}</p>
}