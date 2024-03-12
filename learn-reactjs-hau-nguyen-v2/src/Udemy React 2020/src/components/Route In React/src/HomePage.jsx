import './HomePage.css'

function HomePage() {
  return (
    <div className='home-page'>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Find the best deals on your favorite products!</p>
      </header>
      <main>
        <section className='featured-products'>
          <h2>Featured Products</h2>
          <div className='product-list'>
            <div className='product'>
              <h3>Product 1</h3>
              <p>
                Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <span>$19.99</span>
            </div>
            <div className='product'>
              <h3>Product 2</h3>
              <p>
                Description of Product 2. Nulla facilisi. Integer tempus, lorem eget luctus sodales.
              </p>
              <span>$29.99</span>
            </div>
            <div className='product'>
              <h3>Product 3</h3>
              <p>
                Description of Product 3. Fusce rhoncus odio nec ante ultrices, eget feugiat lorem
                euismod.
              </p>
              <span>$39.99</span>
            </div>
          </div>
        </section>
        <section className='about-us'>
          <h2>About Us</h2>
          <p>
            We are committed to providing our customers with high-quality products at affordable
            prices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida justo nec
            turpis fringilla convallis.
          </p>
        </section>
      </main>
      <footer>
        <p>Contact us: contact@duynghiadev.com</p>
        <p>Follow us on social media: @duynghiadevstore</p>
      </footer>
    </div>
  )
}

export default HomePage
