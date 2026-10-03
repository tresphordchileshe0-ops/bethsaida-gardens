import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { navigation, site } from '../../data/site';

/** Header sits over each page's hero image, turning solid once you scroll. */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;
  const textMain = solid ? 'text-ink' : 'text-surface';
  const textNav = solid ? 'text-muted hover:text-ink' : 'text-surface/80 hover:text-surface';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
      solid ? 'border-b border-line/70 bg-canvas/95 shadow-[0_8px_30px_-20px_rgba(31,42,30,0.35)] backdrop-blur' : 'border-b border-transparent bg-transparent'}`
      }>
      
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 ease-out md:px-8 ${scrolled ? 'h-[68px]' : 'h-[84px]'}`}>
        <Link to="/" className="flex items-baseline gap-2" aria-label={`${site.name} — home`}>
          <span className={`font-display text-[26px] font-semibold leading-none transition-colors duration-300 ${textMain}`}>
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navigation.slice(1).map((item) =>
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
            `relative rounded-full px-4 py-2 text-[15px] transition-colors duration-200 ease-out ${
            isActive ? `${textMain} font-medium` : textNav}`

            }>
            
              {({ isActive }) =>
            <>
                  {item.label}
                  {isActive &&
              <motion.span
                layoutId="nav-underline"
                className={`absolute inset-x-4 -bottom-0.5 h-px ${solid ? 'bg-clay' : 'bg-surface'}`}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />

              }
                </>
            }
            </NavLink>
          )}
          <Link
            to="/contact"
            className="ml-3 whitespace-nowrap rounded-full bg-clay px-5 py-2.5 text-[15px] font-medium text-surface transition-[transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-claydeep">
            
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${textMain}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}>
          
          {open ? <XIcon className="h-6 w-6" strokeWidth={1.5} /> : <MenuIcon className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-line bg-canvas px-5 pb-6 pt-2 lg:hidden">
          
            <ul className="divide-y divide-line">
              {navigation.map((item, i) =>
            <motion.li
              key={item.to}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22, delay: 0.03 * i, ease: [0.23, 1, 0.32, 1] }}>
              
                  <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `block py-4 font-display text-2xl ${isActive ? 'text-clay' : 'text-ink'}`}>
                
                    {item.label}
                  </NavLink>
                </motion.li>
            )}
            </ul>
            <Link
            to="/contact"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-clay px-6 py-3.5 font-medium text-surface">
            
              Enquire About a Booking
            </Link>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}