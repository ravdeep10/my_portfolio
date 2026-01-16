import { useState } from "react";
import { submitContact } from "../../services/contact.service";
import './contact.css'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section>
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>

      {status === 'loading' && <p>Sending…</p>}
      {status === 'success' && <p>Message sent successfully.</p>}
      {status === 'error' && <p>Failed to send message.</p>}
    </section>
  );
};

export default ContactForm;