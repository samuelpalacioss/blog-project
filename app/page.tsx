import GithubButton from '@/components/GithubButton';
import { SiNextdotjs, SiTypescript, SiPrisma } from 'react-icons/si';

export default function Home() {
  return (
    <main className=''>
      <section className='space-y-6 pt-20 md:pt-24 lg:py-32'>
        <div className='container max-w-[64rem] text-center flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold'>
            Welcome to my blog :)
          </h1>
          <p className='max-w-[41rem] sm:text-xl text-muted-foreground sm:leading-8'>
            Hi! I'm Samuel, a software engineer who loves to build things for
            the web. Here i share what I'm learning and the things I build.
          </p>
          <div className='flex items-center'>
            <GithubButton text='Github' />
          </div>
        </div>
      </section>

      <section className='space-y-6 pt-16 md:py-24 lg:py-28'>
        <div className='container max-w-[56rem] text-center flex flex-col gap-4 items-center'>
          <h2 className='text-3xl font-semibold'>My stack</h2>
          <p className='max-w-[80%] sm:text-xl text-muted-foreground leading-normal sm:leading-6'>
            Here's some of the technologies I've been working with recently:
          </p>
        </div>
        <div className='container flex items-center justify-center gap-4 max-w-[70%]'>
          {/* Nextjs icon */}
          <SiNextdotjs className='h-9 w-9 sm:h-12 sm:w-12' />

          {/* Tailwind icon */}
          <SiTypescript className='h-9 w-9 sm:h-12 sm:w-12' />
          {/* Prisma icon */}
          <SiPrisma className='h-9 w-9 sm:h-12 sm:w-12' />
        </div>
      </section>
    </main>
  );
}
