import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='sticky top-0 inset-x-0 h-fit py-3 border-b bg-white dark:bg-gray-950 z-[10]'>
      <div className='container max-w-7xl flex items-center justify-between gap-2'>
        <Link
          href={'/'}
          className='text-xl font-semibold border-2 border-b-4 rounded-md border-r-2 border-gray-900 px-2 py-1 transition-all hover:-translate-y-[2px] dark:border-white'
        >
          samu
        </Link>
        <div className='dropdown'>dropdwon</div>
      </div>
    </nav>
  );
}
