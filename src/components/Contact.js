export default function Contact() {
  return (
    <section id="contact" className="form container">
      <div className="form__content">
        <div className="form__text">
          <h1>
            Interested in <span>working</span> on a project together?
          </h1>
          <p>
            I’m open to work on both a contract or permanent basis, especially ambitious or large projects. However, if
            you have other request or question, don’t hesitate to reach out.
          </p>
        </div>
        <form action="" className="form__input">
          <div className="group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <textarea name="" placeholder="Hey Joel I've got a project I'd like to work with you on...."></textarea>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
}
