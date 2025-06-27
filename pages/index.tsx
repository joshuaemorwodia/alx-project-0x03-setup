export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-32 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Welcome to Splash App
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Your one-stop platform for all your needs — connecting people and creating opportunities.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/about"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Learn More
        </a>
        <a
          href="/contact"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
