import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <div>
            <h1>Sobre nós</h1>
            <p className="subtitle">Nossa história e missão</p>
          </div>
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Sobre</span>
          </nav>
        </div>
      </div>

      <div className="page-container">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-num">01</div>
            <h2>Por que nós?</h2>
            <p>
              Nascemos da vontade de transformar a experiência de compra online em algo simples,
              confiável e prazeroso. Nossa plataforma foi construída com foco total no cliente,
              do primeiro clique até a entrega na sua porta.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-num">02</div>
            <h2>Nossa missão</h2>
            <p>
              Conectar pessoas aos melhores produtos do mercado, com transparência total nos
              preços, agilidade na entrega e um suporte humano que resolve de verdade.
              Acreditamos que comprar online deve ser uma experiência memorável.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-num">03</div>
            <h2>O que fazemos</h2>
            <p>
              Curadoria rigorosa de produtos de tecnologia, moda, acessórios e lifestyle.
              Cada item passa por verificação de qualidade antes de entrar no nosso catálogo,
              garantindo que você receba sempre o melhor.
            </p>
          </div>
        </div>

        {/* CTA section */}
        <div style={{
          marginTop: '64px',
          background: 'linear-gradient(135deg, var(--dark), var(--gray-900))',
          borderRadius: 'var(--radius-xl)',
          padding: '60px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(92,59,255,0.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'white', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              Pronto para explorar?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
              Mais de 15 produtos esperando por você.
            </p>
          </div>
          <Link
            to="/products"
            className="btn-hero-primary"
            style={{ position: 'relative', zIndex: 1 }}
          >
            Ver catálogo →
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
