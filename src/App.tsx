import './App.css'

function FormEventCreate() {
  return (
    <form className='form-event-create'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="name">
          Qual o nome do evento?
        </label>

        <input type="text" id="name" placeholder='Summer dev hits' />
      </fieldset>
    </form>
  )
}

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <section>
        <img src="/banner.png" alt="" />
      </section>

      <FormEventCreate />
    </main>
  )
}

export default App
