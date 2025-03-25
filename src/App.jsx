import React, { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen font-sans text-[#ececec] bg-[#212121]">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[260px] bg-[#171717] text-sm p-4 flex flex-col
          transform transition-transform duration-500 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button
          className="mb-4 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
          onClick={() => setSidebarOpen(false)}
        >
          Close
        </button>
        <nav className="space-y-2">
          <a href="#about" className="block hover:underline">About</a>
          <a href="#resume" className="block hover:underline">Resume</a>
          <a href="#projects" className="block hover:underline">Projects</a>
          <a href="#contact" className="block hover:underline">Contact</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 p-6 transition-all duration-500 ease-in-out relative"
        style={{ marginLeft: sidebarOpen ? '260px' : '0' }}
      >
        {!sidebarOpen && (
          <button
            aria-label="Open sidebar"
            className="absolute top-4 left-4 h-10 rounded-lg px-2 text-[#a9a9a9] hover:bg-[#2a2a2a] focus-visible:outline-none z-10"
            onClick={() => setSidebarOpen(true)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-xl-heavy"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}

        <section id="about" className="mb-16">
          <h1 className="text-2xl font-bold mb-4">About</h1>
          <p>This is the about section.</p>
        </section>

        <section id="resume" className="mb-16">
          <h1 className="text-2xl font-bold mb-4">Resume</h1>
          <p>This is the resume section.</p>
        </section>

        <section id="projects" className="mb-16">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <p>This is the projects section.</p>
        </section>

        <section id="contact">
          <h1 className="text-2xl font-bold mb-4">Contact</h1>
          <p>This is the contact section.</p>
        </section>
      </main>
    </div>
  )
}

export default App
