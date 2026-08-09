import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    alert('Thank you for contacting us!');
  }

  return (
    <main className="page">
      <h1 className="page-title">Contact Us</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>

          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;