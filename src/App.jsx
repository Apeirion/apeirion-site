import React, { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    
    <div className="flex min-h-screen font-sans text-[#ececec] bg-[#212121]">
      {/* Sidebar */}
      
      {sidebarOpen && (
        <aside className="w-[260px] bg-[#171717] text-sm p-4 flex flex-col">
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
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 relative">
        {!sidebarOpen && (
          <button
            className="absolute top-4 left-4 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            Open Sidebar
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