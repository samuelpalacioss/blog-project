import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Nav() {
  return (
    <header className='sticky top-0 inset-x-0 h-fit py-3 border-b bg-white dark:bg-gray-950 z-[10]'>
      {/* Need mobile nav */}
      <div className='container max-w-7xl flex items-center justify-between gap-2'>
        {/* Logo and links */}
        <div className='flex items-center gap-10'>
          <Link
            href={'/'}
            className='text-xl font-semibold border-2 border-b-4 rounded-md border-r-2 border-gray-900 px-2 py-1 transition-all hover:-translate-y-[2px] dark:border-white'
          >
            samu
          </Link>
          <nav className='hidden text-base font-medium md:flex items-center gap-6'>
            <Link
              href={'/'}
              className='text-foreground/70 transition-colors hover:text-foreground/90'
            >
              Projects
            </Link>

            <Link
              href={'/'}
              className='text-foreground/70 transition-colors hover:text-foreground/90'
            >
              Posts
            </Link>
            <Link
              href={'/'}
              className='text-foreground/70 transition-colors hover:text-foreground/90'
            >
              Latest
            </Link>
          </nav>
        </div>
        <div className='dropdown'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
