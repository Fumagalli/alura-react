import type { JSX } from 'react/jsx-runtime';
import './App.css'
import type { ClassAttributes, HTMLAttributes, ReactNode, LabelHTMLAttributes, InputHTMLAttributes } from 'react';

function FormTitle(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 {...props}>
      {props.children}
    </h2>
  )
}

function FormField({ children }: { children: ReactNode }) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function FormLabel(props: JSX.IntrinsicAttributes & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props}>
      {props.children}
    </label>
  )
}

function FormInput(props: JSX.IntrinsicAttributes & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} />
  )
}

function FormEventCreate() {
  return (
    <form className='form-event-create'>
      <FormTitle>
        Preencha para criar um evento:
      </FormTitle>

      <FormField>
        <FormLabel htmlFor="name">
          Qual o nome do evento?
        </FormLabel>

        <FormInput type="text" id="name" placeholder='Summer dev hits' />
      </FormField>
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
