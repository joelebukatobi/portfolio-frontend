import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Copyright from '@/components/Copyright';

export default function Layout({ children, title, project, resume, blog, works }) {
  return (
    <>
      <Navbar project={project} resume={resume} blog={blog} works={works} />
      <Header title={title} />
      {children}
      <Copyright />
    </>
  );
}
