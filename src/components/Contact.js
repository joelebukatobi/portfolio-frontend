import { useState } from 'react';
import { API_URL } from '@/config/index';
import Success from '@/components/Success';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/email/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
        to: 'me@joelebukatobi.dev',
        subject: subject,
        from: email,
      }),
    });

    if (res.status === 200) {
      setOpen(true);
      window.location.reload(true);
    }
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <section id="contact" className="form container">
        <div className="form__content">
          <div className="form__text">
            <h1>
              Interested in <span>working</span> on a project together?
            </h1>
            <p>
              I’m open to work on both a contract or permanent basis, especially ambitious or large projects. However,
              if you have other request or question, don’t hesitate to reach out.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form__input">
            <div className="group">
              <input
                type="text"
                placeholder="First Name"
                id="fname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                id="fname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name=""
              placeholder="Hey Joel I've got a project I'd like to work with you on...."
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submits">Send</button>
          </form>
        </div>
      </section>
      <Success toggle={toggle} className={open ? '' : 'hide'} />
    </>
  );
}
