import { Link } from 'react-router-dom'
import { useState } from 'react'
import PRODUCTS from '../data.js'
import { useCart } from '../CartContext'

const CATEGORIES = [
  { icon: '🎧', label: 'Áudio', count: 3 },
  { icon: '📱', label: 'Smartphones', count: 3 },
  { icon: '⌚', label: 'Wearables', count: 3 },
  { icon: '🎮', label: 'Games', count: 2 },
  { icon: '👟', label: 'Moda', count: 2 },
  { icon: '📷', label: 'Câmeras', count: 1 },
]

const TESTIMONIALS = [
  { name: 'Ana Sousa', role: 'Cliente desde 2023', text: 'Chegou rapidíssimo e o produto é exatamente como descrito. Recomendo muito!', stars: 5, avatar: '👩‍💼' },
  { name: 'Carlos Melo', role: 'Cliente fiel', text: 'Melhor loja online que já usei. Atendimento impecável e devolução sem dor de cabeça.', stars: 5, avatar: '👨‍💻' },
  { name: 'Patrícia Lima', role: 'Compradora verificada', text: 'Os preços são imbatíveis e a qualidade dos produtos superou minhas expectativas.', stars: 5, avatar: '👩‍🎨' },
]

const FEATURES = [
  { icon: '🚀', title: 'Entrega Rápida', desc: 'Receba seus produtos em até 24h nas principais cidades do país.' },
  { icon: '🔒', title: 'Compra Segura', desc: 'Seus dados protegidos com criptografia SSL de ponta a ponta.' },
  { icon: '↩️', title: 'Devolução Fácil', desc: '30 dias para devolver sem perguntas, sem burocracia.' },
  { icon: '💬', title: 'Suporte 24/7', desc: 'Nossa equipe pronta para resolver qualquer situação.' },
]

export default function Home() {
  const featured = PRODUCTS.slice(0, 6)
  const { addToCart } = useCart()
  const [added, setAdded] = useState({})

  function handleAdd(product) {
    addToCart(product)
    setAdded(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [product.id]: false })), 1500)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="dot"></span>
            Novidades de 2025
          </div>
          <h1>Explore o <em>futuro</em><br />do shopping online</h1>
          <p>Produtos premium selecionados com curadoria. Tecnologia, moda e lifestyle com preços que fazem sentido.</p>
          <div className="hero-cta">
            <Link to="/products" className="btn-hero-primary">Ver catálogo →</Link>
            <Link to="/about" className="btn-hero-secondary">Saiba mais</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-item"><div className="value">15+</div><div className="label">Produtos disponíveis</div></div>
          <div className="stat-divider"></div>
          <div className="stat-item"><div className="value">98%</div><div className="label">Clientes satisfeitos</div></div>
          <div className="stat-divider"></div>
          <div className="stat-item"><div className="value">24h</div><div className="label">Prazo de entrega</div></div>
          <div className="stat-divider"></div>
          <div className="stat-item"><div className="value">4.9★</div><div className="label">Avaliação média</div></div>
        </div>
      </div>

      <div className="page-container">

        {/* ── CATEGORIES ── */}
        <div style={{ marginBottom: '72px' }}>
          <div className="section-header">
            <p className="section-eyebrow">Explorar</p>
            <h2 className="section-title">Categorias em destaque</h2>
            <p className="section-desc">Encontre o que procura por categoria.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
            {CATEGORIES.map((cat, i) => (
              <Link
                to="/products"
                key={i}
                style={{
                  background: 'var(--white)', border: '1.5px solid var(--gray-100)',
                  borderRadius: '16px', padding: '24px 16px', textAlign: 'center',
                  transition: 'all 0.25s', cursor: 'pointer', textDecoration: 'none',
                  color: 'inherit', animation: `fadeUp 0.4s ${i * 0.06}s ease both`,
                  display: 'block'
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--gray-100)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{cat.icon}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px', color: 'var(--black)', marginBottom: '4px' }}>{cat.label}</p>
                <p style={{ fontSize: '11px', color: 'var(--gray-500)' }}>{cat.count} itens</p>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FEATURED PRODUCTS ── */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p className="section-eyebrow">Destaques</p>
              <h2 className="section-title">Produtos em alta 🔥</h2>
              <p className="section-desc">Os itens mais procurados da semana.</p>
            </div>
            <Link to="/products" style={{
              fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
              color: 'var(--brand)', border: '1.5px solid var(--brand-ultra-light)',
              background: 'var(--brand-ultra-light)', padding: '9px 18px',
              borderRadius: '8px', transition: 'all 0.2s', textDecoration: 'none'
            }}>Ver todos →</Link>
          </div>

          <div className="products-grid">
            {featured.map((product, i) => (
              <div className="product-card" key={product.id} style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="product-img-wrap">
                  <img src={product.image} alt={product.name} />
                  {i < 2 && <span className="product-badge">⚡ Top</span>}
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
        </div>

        {/* ── PROMO BANNER ── */}
        <div style={{
          background: 'linear-gradient(120deg, #FF6B35 0%, #ff9a5c 100%)',
          borderRadius: '24px', padding: '48px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px', marginBottom: '72px',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', right: '-40px', top: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ position: 'absolute', right: '60px', bottom: '-60px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
              Oferta especial
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Frete grátis em todos<br />os pedidos hoje! 🎉
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>
              Aproveite e monte seu carrinho sem se preocupar com entrega.
            </p>
          </div>
          <Link to="/products" style={{
            background: 'white', color: '#FF6B35',
            padding: '14px 32px', borderRadius: '10px',
            fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 800,
            textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-block', position: 'relative', zIndex: 1,
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            Aproveitar agora →
          </Link>
        </div>

        {/* ── WHY US / FEATURES ── */}
        <div style={{ marginBottom: '72px' }}>
          <div className="section-header">
            <p className="section-eyebrow">Por que nós</p>
            <h2 className="section-title">Comprar aqui é diferente</h2>
            <p className="section-desc">Pensamos em cada detalhe para você ter a melhor experiência.</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="icon-wrap">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div style={{ marginBottom: '72px' }}>
          <div className="section-header">
            <p className="section-eyebrow">Avaliações</p>
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                background: 'var(--white)', border: '1px solid var(--gray-100)',
                borderRadius: '20px', padding: '28px',
                animation: `fadeUp 0.4s ${i * 0.1}s ease both`,
                transition: 'box-shadow 0.25s, transform 0.25s'
              }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ color: '#FFB800', fontSize: '16px', marginBottom: '14px', letterSpacing: '2px' }}>
                  {'★'.repeat(t.stars)}
                </div>
                <p style={{ color: 'var(--gray-700)', fontSize: '15px', lineHeight: '1.65', marginBottom: '20px', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'var(--brand-ultra-light)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0
                  }}>{t.avatar}</div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px', color: 'var(--black)' }}>{t.name}</p>
                    <p style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA FINAL ── */}
        <div style={{
          background: 'linear-gradient(135deg, var(--dark), var(--gray-900))',
          borderRadius: '24px', padding: '64px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '24px', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(92,59,255,0.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Pronto para começar?
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 800, color: 'white', letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: '10px' }}>
              Mais de 15 produtos<br />esperando por você
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
              Explore o catálogo completo e encontre o que você precisa.
            </p>
          </div>
          <Link to="/products" className="btn-hero-primary" style={{ position: 'relative', zIndex: 1 }}>
            Ver catálogo completo →
          </Link>
        </div>

      </div>
    </>
  )
}
