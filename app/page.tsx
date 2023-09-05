import GithubButton from '@/components/GithubButton';
import TechIcon from '@/components/TechIconTooltip';
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

export default function Home() {
  return (
    <main className=''>
      <section className='space-y-6 pt-24 lg:py-40'>
        <div className='container max-w-5xl text-center flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold'>
            Welcome to my blog :)
          </h1>
          <p className='max-w-[41rem] sm:text-lg md:text-xl text-muted-foreground sm:leading-8'>
            Hi! I'm Samuel, a software engineer who loves to build things for
            the web. Here i share my journey as a developer, what I'm learning
            and the things I build.
          </p>
          <div className='flex items-center'>
            <GithubButton text='Github' />
          </div>
        </div>
      </section>

      <section className='space-y-8 pt-16 md:py-24 lg:py-32'>
        <div className='container max-w-[56rem] text-center flex flex-col gap-4 items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
            My stack
          </h2>
          <p className='max-w-[80%] sm:text-lg md:text-xl text-muted-foreground leading-normal sm:leading-6'>
            Here's some of the technologies I've been working with recently:
          </p>
        </div>
        <div className='container flex items-center justify-center gap-4 md:gap-6 max-w-[85%]'>
          <TechIcon label='Nextjs'>
            <SiNextdotjs className='h-9 w-9 sm:h-12 sm:w-12' />
          </TechIcon>
          <TechIcon label='Typescript'>
            <SiTypescript className='h-9 w-9 sm:h-12 sm:w-12' />
          </TechIcon>
          <TechIcon label='Prisma'>
            <SiPrisma className='h-9 w-9 sm:h-12 sm:w-12' />
          </TechIcon>
          <TechIcon label='Tailwind'>
            <SiTailwindcss className='h-9 w-9 sm:h-12 sm:w-12' />
          </TechIcon>
          <TechIcon label='Express'>
            <SiExpress className='h-9 w-9 sm:h-12 sm:w-12' />
          </TechIcon>
        </div>
      </section>

      <section className='space-y-6 pt-16 md:py-24 lg:py-32'>
        <div className='container max-w-5xl flex flex-col gap-4 text-center items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
            About me
          </h2>
          <p className='max-w-[80%] sm:text-lg md:text-xl text-muted-foreground leading-normal sm:leading-6'>
            You may be wondering who I am, so here's a little bit about me.
          </p>
        </div>
      </section>

      {/*<section className='space-y-6 pt-16 md:py-24 lg:py-32'>
        <div className='container max-w-5xl flex flex-col items-center gap-4'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
            Some things I've built
          </h2>
          <p className='max-w-[80%] sm:text-lg md:text-xl text-muted-foreground leading-normal sm:leading-6'>
            Hope you like them!
          </p>
         <ProjectCard /> 
        </div>
      </section>/*/}
    </main>
  );
}
