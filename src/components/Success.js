export default function Success({ toggle, className }) {
  return (
    <section className={`${className} success `} onClick={toggle}>
      <div className="success__main">
        <svg>
          <use href="/images/sprite.svg#icon-github" />
        </svg>
        <h5>Your email is on its way</h5>
        <hr />
        <p>Thank you for reaching out. I will get back to you forthwith .</p>
      </div>
    </section>
  );
}
