import { Link, useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="page-container">
      <div className="error-page">
        <div className="error-code">404</div>
        <h2>Página não encontrada</h2>
        <p>A página que você tentou acessar não existe ou foi movida para outro endereço.</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-error-home" onClick={() => navigate(-1)}>← Voltar</button>
          <Link to="/" className="btn-error-home" style={{ display: 'inline-block' }}>Ir para Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Error
