function CardJSX({ title, body, action }) {
  return (
    <section className='card'>
      <br />
      <hr />
      <nav className='header'>{title}</nav>
      <main className='main'>{body}</main>
      <footer className='footer'>{action}</footer>
    </section>
  )
}

export default CardJSX
