export default function Aside({ className }) {
  return (
    <>
      <div className={`blog__categories ${className}`}>
        <h6>Categories</h6>
        <hr />
        <ul>
          <li>Web Dev</li>
          <li>Cloud Computing</li>
          <li>Career</li>
        </ul>
      </div>
    </>
  );
}
