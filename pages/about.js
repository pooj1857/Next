import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Welcome to the About Page</h1>
        <p> This is a simple page. </p>
      </main>
    </>
  );
}
