import { useState } from 'react'
import socialLinks from '../socialLinks'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/xoeezeer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Thank you! Your message has been sent.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Have a project in mind or just want to say hello? Send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}

      <div className="social-links">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact