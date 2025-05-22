import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] opacity-50"></div>
      <nav className="bg-black bg-opacity-50 backdrop-blur-md shadow-lg relative z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">My Blog</div>
          <div className="space-x-6">
            <a href="/" className="text-white hover:text-blue-400 transition-colors duration-300">首页</a>
            <a href="/blog" className="text-white hover:text-blue-400 transition-colors duration-300">博客</a>
            <a href="/about" className="text-white hover:text-blue-400 transition-colors duration-300">关于</a>
          </div>
        </div>
      </nav>
      <main className="p-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 transition-all duration-300 hover:scale-105">Welcome to My Blog</h1>
          <div className="space-y-8">
            <article className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h2 className="text-3xl font-bold mb-4 text-white">Getting Started with Next.js</h2>
              <p className="text-lg text-gray-200 mb-4">
                Next.js is a powerful React framework that makes building full-stack web applications simple and efficient.
              </p>
              <div className="text-base text-gray-300">Posted on March 19, 2024</div>
            </article>

            <article className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h2 className="text-3xl font-bold mb-4 text-white">The Power of Tailwind CSS</h2>
              <p className="text-lg text-gray-200 mb-4">
                Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.
              </p>
              <div className="text-base text-gray-300">Posted on March 18, 2024</div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
