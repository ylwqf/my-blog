import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Getting Started with Next.js</h2>
            <p className="text-gray-600 mb-4">
              Next.js is a powerful React framework that makes building full-stack web applications simple and efficient.
            </p>
            <div className="text-sm text-gray-500">Posted on March 19, 2024</div>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">The Power of Tailwind CSS</h2>
            <p className="text-gray-600 mb-4">
              Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.
            </p>
            <div className="text-sm text-gray-500">Posted on March 18, 2024</div>
          </article>
        </div>
      </div>
    </main>
  );
}
