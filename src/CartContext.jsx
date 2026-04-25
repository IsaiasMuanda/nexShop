import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(product) {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id, qty) {
    if (qty < 1) return removeFromCart(id)
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  const total = items.reduce((sum, i) => sum + parseFloat(i.price.replace('$', '')) * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
