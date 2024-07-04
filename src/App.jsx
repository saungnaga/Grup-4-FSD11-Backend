import { useState, useEffect } from 'react'
import './App.css'
import { CatalogCard } from './components/CatalogCard'
import { TestMiddleware } from './middleware/TestMiddleware';
import { getProducts } from './services/Products';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data)).catch(console.log);
  }, [])

  return (
    <TestMiddleware>
      <main className='container'>
        <div className='header'>
          <h2>Katalog</h2>
          <span className='header-span'>
            Daftar katalog
          </span>
        </div>
        <div className='body'>
          <div className='catalog-container'>
            {
              products.length ? products.map(product => <CatalogCard 
                key={product.id} 
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating}
              />) : <p>Loading...</p>
            }
          </div>
        </div>
        <div className='footer'>

        </div>
      </main>
    </TestMiddleware>
  )
}

export default App
