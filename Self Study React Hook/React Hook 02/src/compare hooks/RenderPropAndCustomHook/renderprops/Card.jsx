function Card({ title, body, action }) {
  return (
    <section className='card'>
      <hr />
      <br />
      <nav className='header'>{title()}</nav>
      <main className='main'>{body()}</main>
      <footer className='footer'>{action()}</footer>
    </section>
  )
}

export default Card
