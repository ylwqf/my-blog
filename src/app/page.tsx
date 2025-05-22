export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A place where I share my thoughts, experiences, and knowledge about technology, programming, and more.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder for blog posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-600">
              Stay tuned for my first blog post!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
