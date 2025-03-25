import React, { useState } from 'react'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen font-sans text-[#ececec] bg-[#212121]">
      {/* Google Fonts Material Symbols */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu"
      />
      <style>{`
        .material-symbols-outlined {
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }
        .sidebar {
          clip-path: inset(0 0 0 0);
          transition: clip-path 0.5s ease-in-out;
        }
        .sidebar.closed {
          clip-path: inset(0 100% 0 0);
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={`
          sidebar fixed top-0 left-0 h-full w-[260px] bg-[#171717] text-sm p-4 flex flex-col
          ${sidebarOpen ? '' : 'closed'}
        `}
      >
        <button
          className="mb-4 w-10 h-10 flex items-center justify-center rounded-full text-[#b4b4b4] hover:bg-[#2f2f2f] transition-colors"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <span className="material-symbols-outlined text-xl">menu</span>
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
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full text-[#b4b4b4] hover:bg-[#2f2f2f] transition-colors focus-visible:outline-none z-10"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="material-symbols-outlined text-xl">menu</span>
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
