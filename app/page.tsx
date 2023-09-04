import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <section className='space-y-6'>
        <div className='container text-center flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold max-w[64rem]'>
            Welcome to my blog :)
          </h1>
          <p className='text-muted-foreground leading-4 lg:leading-normal'>
            This is a blog project built with Next.js, Tailwind and MDX
          </p>
        </div>
      </section>
    </main>
  );
}
