import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
          <span className="ml-3 text-xl">최수영의 포트폴리오</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-700" href="/">Main</Link>
          <Link className="mr-5 hover:text-gray-700" href="/about">About</Link>
          <Link className="mr-5 hover:text-gray-700" href="/project">Project</Link>      
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>

)}