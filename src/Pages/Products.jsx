import { useState } from 'react'
import { Link } from 'react-router-dom'
import PRODUCTS from '../data.js'
import { useCart } from '../CartContext'

const Products = () => {
  const [search, setSearch] = useState('')
  const [added, setAdded] = useState({})
  const { addToCart } = useCart()

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleAdd(product) {
    addToCart(product)
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <div>
            <h1>Catálogo</h1>
            <p className="subtitle">Explore nossa coleção completa</p>
          </div>
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Produtos</span>
          </nav>
        </div>
      </div>

      <div className="page-container">
        <div className="products-toolbar">
          <p className="products-count">
            <strong>{filtered.length}</strong> produtos encontrados
          </p>
          <div className="search-bar">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="products-grid">
          {filtered.map((product, i) => (
            <div className="product-card" key={product.id} style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}>
              <div className="product-img-wrap">
                <img src={product.image} alt={product.name} />
                <Link to={`/products/${product.id}`} className="quick-view-btn">Ver detalhes</Link>
              </div>
              <div className="product-info">
                <p className="product-category">Produto</p>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <div className="product-price">{product.price}</div>
                  <Link to={`/products/${product.id}`} className="btn-details">Ver →</Link>
                </div>
                <button
                  className="btn-add-cart"
                  onClick={() => handleAdd(product)}
                  style={{
                    marginTop: '12px', width: '100%',
                    background: added[product.id] ? 'var(--success)' : 'var(--black)',
                    color: 'white', border: 'none', borderRadius: '8px',
                    padding: '10px', fontFamily: 'var(--font-display)',
                    fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                    transition: 'background 0.3s, transform 0.2s',
                    transform: added[product.id] ? 'scale(0.98)' : 'scale(1)'
                  }}
                >
                  {added[product.id] ? '✓ Adicionado!' : '+ Adicionar ao carrinho'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--gray-500)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, color: 'var(--black)', marginBottom: '8px' }}>
              Nenhum produto encontrado
            </p>
            <p>Tente buscar por outro termo.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Products
