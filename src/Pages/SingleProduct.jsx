import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PRODUCTS from '../data.js'
import { useCart } from '../CartContext'

const SingleProduct = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const product = PRODUCTS.find(p => p.id === parseInt(productId))
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="page-container">
        <div className="error-page">
          <div className="error-code">404</div>
          <h2>Produto não encontrado</h2>
          <p>O produto que você está procurando não existe.</p>
          <button className="btn-error-home" onClick={() => navigate('/products')}>Ver todos os produtos</button>
        </div>
      </div>
    )
  }

  const { name, price, image, details } = product
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3)

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <div><h1>Detalhe do Produto</h1></div>
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/products">Produtos</Link>
            <span className="sep">/</span>
            <span className="current">{name.slice(0, 24)}…</span>
          </nav>
        </div>
      </div>

      <div className="page-container">
        <div className="single-product-layout">
          <div className="single-product-gallery">
            <img src={image} alt={name} />
          </div>

          <div className="single-product-info">
            <span className="single-category-tag">✦ Produto verificado</span>
            <h1 className="single-product-name">{name}</h1>
            <p className="single-product-id">Ref. #{String(product.id).padStart(4, '0')}</p>

            <div className="single-price-block">
              <span className="single-price">{price}</span>
              <span className="single-price-note">à vista · frete grátis</span>
            </div>

            <p className="single-description">{details} {details}</p>
            <div className="single-divider"></div>

            <div className="single-actions">
              <button
                className="btn-buy"
                onClick={handleAdd}
                style={{ background: added ? 'var(--success)' : undefined, transition: 'background 0.3s, transform 0.2s' }}
              >
                {added ? '✓ Adicionado ao carrinho!' : '🛒 Adicionar ao carrinho'}
              </button>
              <button className="btn-back" onClick={() => navigate(-1)}>← Voltar</button>
            </div>

            <div className="single-features">
              <div className="feature-pill"><span className="icon">🚀</span> Entrega em 24h</div>
              <div className="feature-pill"><span className="icon">🔒</span> Compra segura</div>
              <div className="feature-pill"><span className="icon">↩️</span> 30 dias p/ troca</div>
              <div className="feature-pill"><span className="icon">⭐</span> Garantia inclusa</div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-header">
            <p className="section-eyebrow">Relacionados</p>
            <h2 className="section-title">Você também pode gostar</h2>
          </div>
          <div className="products-grid">
            {related.map((p, i) => (
              <div className="product-card" key={p.id} style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="product-img-wrap">
                  <img src={p.image} alt={p.name} />
                  <Link to={`/products/${p.id}`} className="quick-view-btn">Ver detalhes</Link>
                </div>
                <div className="product-info">
                  <p className="product-category">Produto</p>
                  <h3 className="product-name">{p.name}</h3>
                  <div className="product-footer">
                    <div className="product-price">{p.price}</div>
                    <Link to={`/products/${p.id}`} className="btn-details">Ver →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
