import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { SiMaildotru } from 'react-icons/si';
import { siteConfig } from '@/config/siteConfig';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

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
        <div className='flex items-center gap-2'>
          <Link
            href={`mailto:${siteConfig.email}`}
            target='_blank'
            rel='noreferrer'
            aria-abel='Send me an email'
            className={cn(
              buttonVariants({ size: 'icon', variant: 'outline' }),
              'border-0 hover:border'
            )}
          >
            <SiMaildotru className='h-5 w-5' />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
