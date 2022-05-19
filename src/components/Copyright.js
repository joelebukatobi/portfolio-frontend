import Link from 'next/link';
export default function Copyright() {
  return (
    <section className="copyright container">
      <div className="copyright__design">
        <p>
          Designed and Develop by
          <Link href="" className="">
            <span> JetDev</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
