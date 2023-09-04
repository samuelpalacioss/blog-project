import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <section className='space-y-6 pt-12'>
        <div className='container max-w-[64rem] text-center flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold'>
            Welcome to my blog :)
          </h1>
          <p className='max-w-[40rem] sm:text-xl text-muted-foreground sm:leading-8'>
            Hey there, I'm Samuel, a software engineer who loves to build things
            for the web. Here i share what I'm learning and the things I build.
          </p>
        </div>
      </section>
    </main>
  );
}
