
export default function Home() {
  return (
    <main className="flex min-h-screen ">
      {/* TODO header with menu button */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <img
            src="/headshot.jpeg"
            width={2100/8}
            height={1925/8}
          />
          {/* TODO paragraph about me */}
      </div>

      <div className="flex flex-col items-center justify-center p-6 md:w-2/5 md:px-28 md:py-12">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-lg text-gray-700">
          I am a [Your Profession/Role] with a passion for [Your Interests]. 
          Welcome to my personal website!
        </p>
        {/* TODO quick links */}
        
      </div>

    </main>
  );
}
