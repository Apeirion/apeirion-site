import React, { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { GithubLogo, LinkedinLogo, Envelope, Sidebar } from "phosphor-react"

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
        .toggle-btn-hidden {
          display: none;
        }
        .main-content-transition {
          transition: margin-left 0.5s ease-in-out;
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={`
          sidebar fixed top-0 left-0 h-full w-[260px] bg-[#171717] text-sm p-3 pt-2 flex flex-col
          ${sidebarOpen ? '' : 'closed'}
        `}>
        <button
          className="mb-1.5 w-10 h-10 flex items-center justify-center rounded-lg text-[#b4b4b4] hover:bg-[#424242] transition-colors"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar">
          <Sidebar size={24} weight="fill" />
        </button>

        {/* Social Links */}
        <div>
          <a href="https://github.com/Apeirion" target="_blank" rel="noopener noreferrer">
            <button
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 
                        text-[#ececec] hover:bg-[#212121] 
                        transition-all duration-150 ease-in-out 
                        active:scale-[0.98]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#444]">
                <Github strokeWidth={1.5} className="w-4 h-4 text-[#ececec]" />
              </div>
              <span className="text-sm">GitHub</span>
            </button>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/andrew-j-kim-me/" target="_blank" rel="noopener noreferrer">
            <button
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 
                        text-[#ececec] hover:bg-[#212121] 
                        transition-all duration-150 ease-in-out 
                        active:scale-[0.98]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#444]">
                <Linkedin strokeWidth={1.5} className="w-4 h-4 text-[#ececec]" />
              </div>
              <span class="text-sm">Linkedin</span>
            </button>
          </a>
        </div>
        <div>
          <a href="mailto:personal@apeirion.com" target="_blank" rel="noopener noreferrer">
            <button
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 
                        text-[#ececec] hover:bg-[#212121] 
                        transition-all duration-150 ease-in-out 
                        active:scale-[0.98]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#444]">
                <Mail strokeWidth={1.5} className="w-4 h-4 text-[#ececec]" />
              </div>
              <span className="text-sm">Email</span>
            </button>
          </a>
        </div>
        {/* Website Content */}
        <div>
              <span className="mt-7 flex h-[26px] w-full items-center px-2 
                        text-[#ececec] text-xs font-semibold">
                          Apeirion
              </span>
        </div>
        <div>
          <a href="#about">
            <button
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 
                        text-[#ececec] hover:bg-[#212121] 
                        transition-all duration-150 ease-in-out 
                        active:scale-[0.98]">
              <span className="text-sm">About Me</span>
            </button>
          </a>
        </div>
        <div>
          <a href="#resume">
            <button
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 
                        text-[#ececec] hover:bg-[#212121] 
                        transition-all duration-150 ease-in-out 
                        active:scale-[0.98]">
              <span className="text-sm">Resume</span>
            </button>
          </a>
        </div>
        <div>
          <a href="#portfolio">
            <button
              className="flex h-9 w-full items-center gap-2.5 rounded-lg px-2 
                        text-[#ececec] hover:bg-[#212121] 
                        transition-all duration-150 ease-in-out 
                        active:scale-[0.98]">
              <span className="text-sm">Portfolio</span>
            </button>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`main-content-transition flex-1 p-3 pt-2 relative`}
        style={{ marginLeft: sidebarOpen ? '260px' : '0' }}
      >
        <div className="flex gap-2">
          
          <button
            className={`mb-1.5 w-10 h-10 flex items-center justify-center rounded-lg text-[#b4b4b4] hover:bg-[#424242] transition-colors ${sidebarOpen ? 'toggle-btn-hidden' : ''}`}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar">
            <Sidebar size={24} weight="fill" />
          </button>
          <span
            className={`mb-1.5 w-10 h-10 flex items-center text-lg font-semibold px-3 text-[#b4b4b4]`}>
            Apeirion
          </span>
        </div>
        
        {/* About */}
        <div id = "about">
          <div className="flex justify-center px-6 py-5">
            <div className="w-full max-w-3xl flex justify-end">
              <div className=" rounded-3xl bg-[#323232d9] px-5 py-2.5 whitespace-pre-wrap">
                ABOUT ME
              </div>
            </div>
          </div>
          <div className="flex justify-center px-6 py-5">
            <div className="w-full max-w-3xl flex justify-start">
              <div className="max-w-[100%] px-5 py-2.5 whitespace-pre-wrap">
                <p>This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.</p>
                <p>This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.This is the about section.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resume */}
        <div id = "resume">
          <div className="flex justify-center px-6 py-5">
            <div className="w-full max-w-3xl flex justify-end">
              <div className=" rounded-3xl bg-[#323232d9] px-5 py-2.5 whitespace-pre-wrap">
                RESUME
              </div>
            </div>
          </div>
          <div className="flex justify-center px-6 py-5">
            <div className="w-full max-w-3xl flex justify-start">
              <div className="max-w-[100%] px-5 py-2.5 whitespace-pre-wrap">
                <p>This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.</p>
                <p>This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.This is the resume section.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div id = "portfolio">
          <div className="flex justify-center px-6 py-5">
            <div className="w-full max-w-3xl flex justify-end">
              <div className=" rounded-3xl bg-[#323232d9] px-5 py-2.5 whitespace-pre-wrap">
                PORTFOLIO
              </div>
            </div>
          </div>
          <div className="flex justify-center px-6 py-5">
            <div className="w-full max-w-3xl flex justify-start">
              <div className="max-w-[100%] px-5 py-2.5 whitespace-pre-wrap">
                <p>This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.</p>
                <p>This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.This is the portfolio section.</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>
  )
}

export default App
