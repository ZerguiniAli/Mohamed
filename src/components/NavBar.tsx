'use client'
import React, { useState, MouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signOut, SessionProvider,getSession } from 'next-auth/react' // Import SessionProvider
import { ConnexionDialog } from './ConnexionDialog'
import { InscriptionDialog } from './InscriptionDialog'
import { NavigationMenuDemo } from './NavMenu'
import { Button } from './ui/button'
import { authOptions } from '@/app/lib/auth'

const NavBar = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState<string>('/')

  const handleOnclick = (page: string) => (e: MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault()
    setActivePage(page)
    router.push(page)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow top-0 sticky z-50">
      <div className="mx-auto px-4 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1
                className="font-semibold cursor-pointer"
                onClick={handleOnclick('/')}
              >
                LO<br />GO
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-10">
                <NavigationMenuDemo/>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 gap-3">
              {session ? (
                <>
                <p>{session.user?.name}</p>
                <Button onClick={() => signOut()}>LogOut</Button>
                </>
              ) : (
                <ConnexionDialog />
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <NavigationMenuDemo/>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              {session ? (
                <Button onClick={() => signOut()}>LogOut</Button>
              ) : (
                <ConnexionDialog />
              )}
            </div>
            <div className="ml-4">
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Wrap the NavBar component with SessionProvider
const NavBarWithSessionProvider = () => (
  <SessionProvider>
    <NavBar />
  </SessionProvider>
)

export default NavBarWithSessionProvider
