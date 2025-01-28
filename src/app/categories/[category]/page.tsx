import Link from 'next/link';

// Mock data
const categoryPosts = {
  technology: [
    { id: '1', title: 'Tech Post 1', content: 'This is a post about technology.' },
    { id: '2', title: 'Tech Post 2', content: 'Another post about technology.' },
  ],
  lifestyle: [
    { id: '3', title: 'Lifestyle Post 1', content: 'This is a post about lifestyle.' },
    { id: '4', title: 'Lifestyle Post 2', content: 'Another post about lifestyle.' },
  ],
  travel: [
    { id: '5', title: 'Travel Post 1', content: 'This is a post about travel.' },
    { id: '6', title: 'Travel Post 2', content: 'Another post about travel.' },
  ],
  health: [
    { id: '7', title: 'Health Post 1', content: 'This is a post about health.' },
    { id: '8', title: 'Health Post 2', content: 'Another post about health.' },
  ],
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = categoryPosts[category as keyof typeof categoryPosts] || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
      <Link href="/" className="text-blue-500 mt-6 inline-block">
        ← Back to Home
      </Link>
    </div>
  );
}