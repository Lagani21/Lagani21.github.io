// src/app/page.js
import ScrambleText from '../components/ScrambleText';

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">
        <ScrambleText text="Welcome to My Portfolio" />
      </h1>
      <p className="mt-4">
        Hi, I'm Lagani Patel. I build intelligent systems and interactive applications.
      </p>
    </div>
  );
}
