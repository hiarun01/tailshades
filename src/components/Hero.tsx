"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Beautiful Box Shadows
          <br />
          <span className="text-gray-600">for Tailwind CSS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Create stunning visual depth with our curated collection of box
          shadows. Copy, customize, and implement beautiful shadows in your
          projects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
          <button className="group bg-gray-900 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-black transition-all duration-200 flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Contribute Here!</span>
          </button>

          <button className="group bg-gray-100 text-gray-700 px-6 py-3 rounded-xl text-base font-medium hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>Browse Shadows</span>
          </button>
        </div>

        {/* Clean B&W Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          <div className="group bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <div className="text-3xl font-black text-black mb-1">25+</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-xs">
              Box Shadows
            </div>
          </div>

          <div className="group bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="text-3xl font-black text-black mb-1">100%</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-xs">
              Free
            </div>
          </div>

          <div className="group bg-white p-6 rounded-lg border border-gray-200 text-center hover:border-black hover:shadow-lg transition-all duration-300">
            <div className="w-10 h-10 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
            </div>
            <div className="text-2xl font-black text-black mb-1">Only for</div>
            <div className="text-gray-600 font-medium uppercase tracking-wide text-xs">
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
