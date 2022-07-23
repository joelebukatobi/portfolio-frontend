import Link from 'next/link';

export default function Share({ className }) {
  return (
    <div className={`blog__share ${className}`}>
      <h6>Share</h6>
      <hr />
      <ul>
        <li>
          <Link href="">Facebook</Link>
        </li>
        <li>
          <Link href="">Twitter</Link>
        </li>
        <li>
          <Link href="">LinkedIn</Link>
        </li>
      </ul>
    </div>
  );
}
