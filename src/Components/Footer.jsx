import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link to="/" className="brand">NexShop <span></span></Link>
            <p>A melhor experiência de compra online. Produtos selecionados com qualidade garantida.</p>
          </div>

          <div>
            <p className="footer-col-title">Navegação</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Produtos</Link></li>
              <li><Link to="/about">Sobre nós</Link></li>
              <li><Link to="/posts">Blog</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Categorias</p>
            <ul className="footer-links">
              <li><Link to="/products">Eletrônicos</Link></li>
              <li><Link to="/products">Acessórios</Link></li>
              <li><Link to="/products">Moda</Link></li>
              <li><Link to="/products">Esportes</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Suporte</p>
            <ul className="footer-links">
              <li><Link to="/">Central de ajuda</Link></li>
              <li><Link to="/">Trocas e devoluções</Link></li>
              <li><Link to="/">Rastrear pedido</Link></li>
              <li><Link to="/">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 <Link to="/">NexShop</Link>. Todos os direitos reservados.
          </p>
          <div className="footer-social">
            <button className="social-btn">𝕏</button>
            <button className="social-btn">in</button>
            <button className="social-btn">ig</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
