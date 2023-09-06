import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[]; // Display technologies as text opt 2
  //   children: React.ReactNode; // Displaying icons for technologies opt 1
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
}: //   children,
ProjectCardProps) {
  return (
    <Card className='flex flex-col sm:flex-row sm:items-center max-w-2xl justify-between pb-6 sm:pt-6'>
      <div className='project-info sm:order-2 sm:flex-grow'>
        <CardHeader className='space-y-2'>
          <CardTitle className='text-2xl'>{title}</CardTitle>
          <CardDescription className='max-w-[95%] leading-normal'>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className='max-w-[90%] gap-4 md:gap-6'>
          <ul className='flex flex-wrap'>
            {technologies.map((tech) => (
              <li
                key={tech}
                className='rounded-full px-3 py-1 bg-gray-900 text-white dark:bg-zinc-300 dark:text-gray-950 text-xs font-medium mr-2 last:mr-0'
              >
                {tech}
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
      <div className='project-image px-6 sm:order-1'>
        <Image
          alt={`${title} project`}
          src={image}
          className='object-contain rounded border-2 border-slate-500/10 transition-colors hover:border-slate-500/30'
          width={200}
          height={48}
        />
      </div>
    </Card>
    // <Card className='container flex max-w-2xl items-center justify-between gap-2 p-6 '>
    //   {/* Project image*/}
    //   {/* <Image
    //     alt={`${title} project`}
    //     src={image}
    //     className='object-contain rounded border-2 border-slate-500/10 transition-colors hover:border-slate-500/30'
    //     width={200}
    //     height={48}
    //   /> */}
    //   <CardHeader className='flex flex-col gap-2'>
    //     <CardTitle>{title}</CardTitle>
    //     <CardDescription>{description}</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <div className='flex flex-row max-w[90%]'>
    //       {technologies.map((tech) => (
    //         <span
    //           key={tech}
    //           className='px-3 py-1 bg-gray-900 dark:bg-zinc-300 font-semibold'
    //         >
    //           {tech}
    //         </span>
    //       ))}
    //     </div>
    //   </CardContent>
    // </Card>
  );
}
