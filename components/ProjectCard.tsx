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
    <>
      <div className='flex flex-col gap-6 sm:flex-row sm:gap-12 sm:py-10 sm:items-center max-w-2xl justify-between p-6 rounded-lg transition-all border '>
        <div className='project-info sm:order-2 sm:flex-grow'>
          <div className='project-header space-y-2 pb-6'>
            <h3 className='text-2xl sm:text-3xl font-semibold'>{title}</h3>
            <p className='text-sm sm:text-base text-muted-foreground max-w-[95%] leading-normal'>
              {description}
            </p>
          </div>
          <div className='project-content max-w-[90%] gap-4 md:gap-6'>
            <ul className='flex flex-wrap'>
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className='rounded-full px-3 py-1 bg-muted text-xs sm:text-sm font-medium mr-2 last:mr-0'
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='project-image sm:order-1'>
          <Image
            alt={`${title} project`}
            src={image}
            className='object-contain rounded border-2 border-slate-500/10 transition-colors hover:border-slate-500/30'
            width={200}
            height={48}
          />
        </div>
      </div>
    </>
  );
}
