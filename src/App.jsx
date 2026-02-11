import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { nombre: 'Enero', valor: 40 },
  { nombre: 'Febrero', valor: 55 },
  { nombre: 'Marzo', valor: 30 },
  { nombre: 'Abril', valor: 70 },
]

export default function App() {
  return (
    <div className="container">
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Analiza tus archivos CSV en segundos</h1>
        <p>Carga, visualiza y entiende tus datos con una interfaz moderna y profesional.</p>
      </motion.div>

      <motion.div 
        className="card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Cargar archivo CSV</h2>
        <p>Selecciona un archivo desde tu dispositivo para comenzar el análisis automático.</p>
        <button className="button">Seleccionar archivo</button>
      </motion.div>

      <motion.div 
        className="card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2>Visualización de datos</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valor" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      <footer style={{ textAlign: "center", marginTop: "60px", color: "#64748B" }}>
        © 2026 DataVista — Plataforma profesional de análisis CSV
      </footer>
    </div>
  )
}
