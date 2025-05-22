import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            My Blog
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link
                            href="/"
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                        >
                            Home
                        </Link>
                        <Link
                            href="/posts"
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                        >
                            Posts
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
} 