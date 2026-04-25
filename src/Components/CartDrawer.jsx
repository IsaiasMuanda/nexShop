import { useCart } from '../CartContext'

export default function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, updateQty, total, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
          zIndex: 200, opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease', backdropFilter: 'blur(4px)'
        }}
      />

      {/* Drawer */}
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(420px, 100vw)',
        background: 'var(--white)',
        zIndex: 201,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.15)'
      }}>

        {/* Header */}
        <div style={{
          padding: '24px', borderBottom: '1px solid var(--gray-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.4px' }}>
              Carrinho
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginTop: '2px' }}>
              {count} {count === 1 ? 'item' : 'itens'}
            </p>
          </div>
          <button onClick={onClose} style={{
            background: 'var(--gray-100)', border: 'none', borderRadius: '8px',
            width: '36px', height: '36px', cursor: 'pointer', fontSize: '18px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s'
          }}>×</button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-500)' }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🛒</div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--black)', fontSize: '16px' }}>
                Carrinho vazio
              </p>
              <p style={{ fontSize: '14px', marginTop: '6px' }}>Adicione produtos para continuar</p>
            </div>
          ) : items.map(item => (
            <div key={item.id} style={{
              display: 'flex', gap: '14px', padding: '16px 0',
              borderBottom: '1px solid var(--gray-100)'
            }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '10px',
                overflow: 'hidden', flexShrink: 0, background: 'var(--gray-100)'
              }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600,
                  color: 'var(--black)', marginBottom: '4px',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                }}>{item.name}</p>
                <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--brand)', marginBottom: '8px' }}>
                  {item.price}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0', border: '1px solid var(--gray-100)', borderRadius: '8px', overflow: 'hidden' }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={{
                      background: 'var(--gray-50)', border: 'none', width: '30px', height: '30px',
                      cursor: 'pointer', fontSize: '16px', color: 'var(--gray-700)',
                      transition: 'background 0.2s'
                    }}>−</button>
                    <span style={{ padding: '0 10px', fontSize: '14px', fontWeight: 600 }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={{
                      background: 'var(--gray-50)', border: 'none', width: '30px', height: '30px',
                      cursor: 'pointer', fontSize: '16px', color: 'var(--gray-700)',
                      transition: 'background 0.2s'
                    }}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--gray-300)', fontSize: '13px', fontWeight: 500,
                    transition: 'color 0.2s'
                  }}>Remover</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid var(--gray-100)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '15px', color: 'var(--gray-500)' }}>Subtotal</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800 }}>
                ${total.toFixed(2)}
              </span>
            </div>
            <button style={{
              width: '100%', background: 'var(--brand)', color: 'white',
              border: 'none', borderRadius: '10px', padding: '15px',
              fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 700,
              cursor: 'pointer', transition: 'background 0.2s, transform 0.2s'
            }}
            onMouseOver={e => e.target.style.background = 'var(--brand-light)'}
            onMouseOut={e => e.target.style.background = 'var(--brand)'}
            >
              Finalizar compra →
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
