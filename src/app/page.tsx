import Image from "next/image";
import Link from "next/link";

const posts = [
  { id: '1', title: 'Post 1', content: 'This is the content of post 1.' },
  { id: '2', title: 'Post 2', content: 'This is the content of post 2.' },
  { id: '3', title: 'Post 3', content: 'This is the content of post 3.' },
  { id: '4', title: 'Post 4', content: 'This is the content of post 4.' },
  { id: '5', title: 'Post 5', content: 'This is the content of post 5.' },
  { id: '6', title: 'Post 6', content: 'This is the content of post 6.' },
  { id: '7', title: 'Post 7', content: 'This is the content of post 7.' },
  { id: '8', title: 'Post 8', content: 'This is the content of post 8.' },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Blog</h1>

      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
            <p className="text-gray-700 mb-4">
              Discover our latest and most popular post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, omnis?
            </p>
            <Link
              href="/posts/1"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Read Featured Post
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src="./favicon.ico"
              alt="Featured Post"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Technology', 'Lifestyle', 'Travel', 'Health'].map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <p className="text-gray-700">
                Explore our latest posts in the {category} category.
              </p>
              <Link
                href={`/categories/${category.toLowerCase()}`}
                className="text-blue-500 mt-4 inline-block"
              >
                View Posts →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-200 mb-6">
          Stay updated with the latest posts. Subscribe now!
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}