import React, { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Sidebar } from "phosphor-react"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen font-sans text-[#ececec] bg-[#212121]">
      <style>{`
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
          sidebar fixed top-0 left-0 h-full w-[260px] bg-[#171717] text-sm p-3 pt-2 flex flex-col
          ${sidebarOpen ? '' : 'closed'}
        `}
      >
        <button
          className="mb-2 w-10 h-10 flex items-center justify-center rounded-lg text-[#b4b4b4] hover:bg-[#2f2f2f] transition-colors"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <Sidebar size={24} weight="fill" />


        </button>

        {/* Social Links */}
        <div className="space-y-3 p-2 mb-4">
          <a href="https://github.com/Apeirion" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#2f2f2f]">
              <Github strokeWidth={1.5} className="w-4 h-4 text-[#b4b4b4]" />
            </span>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/andrew-j-kim-me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#2f2f2f]">
              <Linkedin strokeWidth={1.5} className="w-4 h-4 text-[#b4b4b4]" />
            </span>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:personal@apeirion.com" className="flex items-center gap-2 hover:underline">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#2f2f2f]">
              <Mail strokeWidth={1.5} className="w-4 h-4 text-[#b4b4b4]" />
            </span>
            <span>Email</span>
          </a>
        </div>

        <nav className="space-y-0 p-2">
          <span class="text-xs font-semibold text-ellipsis overflow-hidden break-all pt-1 mb-2 text-token-text-primary block">Apeirion</span>
          <a href="#about" className="pt-2 pb-2 block hover:underline">About</a>
          <a href="#resume" className="pt-2 pb-2 block hover:underline">Resume</a>
          <a href="#projects" className="pt-2 pb-2 block hover:underline">Projects</a>
          <a href="#contact" className="pt-2 pb-2 block hover:underline">Contact</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="flex-1 p-6 transition-all duration-500 ease-in-out relative"
        style={{ marginLeft: sidebarOpen ? '260px' : '0' }}
      >
        {!sidebarOpen && (
          <button
            className="mb-2 w-10 h-10 flex items-center justify-center rounded-full text-[#b4b4b4] hover:bg-[#2f2f2f] transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-window-sidebar" viewBox="0 0 16 16">
            <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"/>
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