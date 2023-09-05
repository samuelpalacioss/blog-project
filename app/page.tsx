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
        <div className='container max-w-5xl flex flex-col gap-4'>
          <span className='text-2xl font-semibold tracking-tight'>Hi, I'm</span>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold'>
            Samuel Palacios
          </h1>
          <p className='max-w-[41rem] sm:text-lg text-muted-foreground sm:leading-8'>
            A software engineer student who loves to build things for the web.
            Here I share my journey as a developer, what I'm learning and the
            things I build.
          </p>
          <div className='flex items-center'>
            <GithubButton text='Github' />
          </div>
        </div>
      </section>

      <section className='space-y-8 pt-16 pb-28 md:py-16 lg:py-[7rem]'>
        <div className='container max-w-5xl flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
            My stack
          </h2>
          <p className='max-w-[80%] sm:text-lg text-muted-foreground leading-normal sm:leading-6'>
            Here's some of the technologies I've been working with recently:
          </p>
          <div className='flex mt-4 gap-4 md:gap-6'>
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
        </div>
      </section>

      <section className='space-y-6 py-16 md:pt-0 lg:pb-24'>
        <div className='container max-w-5xl flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
            About me
          </h2>
          <div className='flex flex-col gap-4 sm:text-lg'>
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground'>
              Hello! I'm Samuel, a 20-year-old software engineer student who
              loves building things with code. My first experience with web
              development started in early 2020, when I decided to create a
              website for my mom's business.
            </p>
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground'>
              Since then I've been honing my skills, constantly practicing and
              learning different technologies from frontend to backend.{' '}
              <span className='font-semibold'>
                Lately I've also been interested in data science
              </span>
              .
            </p>
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground'>
              On 2022 I gratuated from 4Geeks Academy 12-week intensive Full
              Stack Developer Bootcamp program. I'm seeking a full-time role
              where I can help a company achieve its goals while I keep learning
              and growing as a developer.
            </p>
          </div>
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
