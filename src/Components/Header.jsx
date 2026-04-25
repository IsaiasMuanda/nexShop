import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../CartContext'
import CartDrawer from './CartDrawer'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="brand" onClick={closeMenu}>
            NexShop <span></span>
          </Link>

          <nav className="header-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Produtos</NavLink>
            <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''}>Posts</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink>
          </nav>

          <div className="header-actions">
            <button className="cart-btn" onClick={() => setCartOpen(true)}>
              🛒 Carrinho
              {count > 0 && <span className="cart-badge">{count}</span>}
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Produtos</NavLink>
        <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Posts</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Sobre</NavLink>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Header
