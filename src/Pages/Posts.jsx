import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(data => {
        setPosts(data)
        setLoader(false)
      })
  }, [])

  return (
    <>
      <div className="pg-header">
        <div className="pg-header-inner">
          <div>
            <h1>Blog & Posts</h1>
            <p className="subtitle">{loader ? 'Carregando...' : `${posts.length} artigos publicados`}</p>
          </div>
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Posts</span>
          </nav>
        </div>
      </div>

      <div className="page-container">
        {loader ? (
          <div className="posts-loader">
            <div className="spinner"></div>
            <p>Carregando artigos...</p>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map((post, i) => (
              <div
                className="post-card"
                key={post.id}
                style={{ animationDelay: `${Math.min(i, 12) * 0.04}s` }}
              >
                <p className="post-num">Post #{String(post.id).padStart(3, '0')}</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Posts
