import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Blog</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil perferendis, ipsum eveniet obcaecati quisquam delectus hic fugit magni adipisci laudantium voluptate culpa natus odit, fuga ex, deserunt dolores quibusdam.
       </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eius, tenetur laudantium aliquid sequi dolorum, ratione obcaecati ex repellat reprehenderit fuga numquam corrupti id architecto labore voluptas quasi officiis assumenda.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ipsa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">Content Strategist</p>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, nisi?
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600">Designer & Developer</p>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nostrum?
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tenetur?
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum!
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, error!
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-6">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, culpa.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}