'use client';

import { useEffect, useState } from "react";

export default function NavBar() {
  // Intersection Observer state (for the hide/show on scroll effect)
  const [visible, setVisible] = useState(false);

  // Toggle states for the interactive menus
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById("video-header");
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-150px 0px 0px 0px"
      }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        bg-red-500
      `}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/imgs/logoS4N.png" className="h-10" alt="S4N Logo" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Setups 4 Newbies
          </span>
        </a>

        {/* Right Side: User Dropdown & Hamburger Toggle */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          
          {/* User Profile Button */}
          <button
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            type="button"
            className="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
            id="user-menu-button"
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="user photo" />
          </button>

          {/* User Dropdown Menu */}
          <div
            className={`
              z-50 ${isUserDropdownOpen ? "block" : "hidden"} 
              absolute top-full right-0 mt-2 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44
            `}
            id="user-dropdown"
          >
            <div className="px-4 py-3 text-sm border-b border-default">
              <span className="block text-heading font-medium">Joseph McFall</span>
              <span className="block text-body truncate">name@flowbite.com</span>
            </div>
            <ul className="p-2 text-sm text-body font-medium">
              <li><a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a></li>
              <li><a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a></li>
              <li><a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a></li>
              <li><a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a></li>
            </ul>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        {/* Main Navigation Links */}
        <div 
          className={`
            items-center justify-between w-full md:flex md:w-auto md:order-1 
            ${isMobileMenuOpen ? "block" : "hidden"}
          `} 
          id="navbar-user"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li><a href="#" className="block py-2 px-3 text-white hover:text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a></li>
            <li><a href="#" className="block py-2 px-3 text-heading rounded hover:text-black hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">Tutorials</a></li>
            <li><a href="#" className="block py-2 px-3 text-heading rounded hover:text-black hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">Setups</a></li>
            <li><a href="#" className="block py-2 px-3 text-heading rounded hover:text-black hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">Pricing</a></li>
            <li><a href="#" className="block py-2 px-3 text-heading rounded hover:text-black hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand md:p-0">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}