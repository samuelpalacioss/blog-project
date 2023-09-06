import GithubButton from '@/components/GithubButton';
import ProjectCard from '@/components/ProjectCard';
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
          <span className='text-2xl font-semibold tracking-tight'>
            Hi, I&apos;m
          </span>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold'>
            Samuel Palacios
          </h1>
          <p className='max-w-[41rem] sm:text-lg text-muted-foreground sm:leading-8'>
            A software engineer student who loves to build things for the web.
            Here I share my journey as a developer, what I&apos;m learning and
            the things I build.
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
          <p className='max-w-[80%] sm:text-lg text-muted-foreground sm:leading-6'>
            Here&apos;s some of the technologies I&apos;ve been working with
            recently:
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
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground sm:leading-8'>
              Hi there! I&apos;m Samuel and I love building exceptional things
              for the web. My first experience with web development started in
              early 2020, when I decided to create a website for my mom&apos;s
              business and I&apos;ve been hooked ever since.
            </p>
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground sm:leading-8'>
              Over the years I&apos;ve been honing my skills, constantly
              practicing and learning different technologies ranging from
              front-end to back-end. Lately, I&apos;ve also been interested in
              data science.
            </p>
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground sm:leading-8'>
              In 2022, I gratuated from 4Geeks Academy 12-week intensive Full
              Stack Developer Bootcamp program, solidifying my skills and
              commitment to this exciting field. I&apos;m seeking a full-time
              role where I can help a company achieve its goals while continuing
              my personal and professional growth.
            </p>
            <p className='max-w-[95%] sm:max-w-[40rem] text-muted-foreground sm:leading-8'>
              So, if you&apos;re searching for a dynamic developer who brings
              boundless energy and a dash of humor to the table, look no
              further! Let&apos;s connect and make some digital magic happen
              together. 🚀💻✨
            </p>
          </div>
        </div>
      </section>
      <section className='space-y-6 py-16 md:py-24'>
        <div className='container max-w-5xl flex flex-col gap-4'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold'>
            Some things I&apos;ve built
          </h2>

          <ProjectCard
            title='Psicoreinventar'
            description='Psychology appointment app'
            image='https://fakeimg.pl/600x400/60ab7b/e8e8e8?text=hola'
            technologies={['React', 'SQLAlchemy']}
          />
        </div>
      </section>
    </main>
  );
}
