import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { AiFillGithub } from 'react-icons/ai';

type GithubButtonProps = {
  text: string;
};

export default function GithubButton({ text }: GithubButtonProps) {
  return (
    <Link
      href={siteConfig.githubProfile}
      target='_blank'
      rel='noreferrer'
      className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
    >
      <div className='flex items-center gap-2 justify-between'>
        <span className='text-base'>{text}</span>
        <AiFillGithub size={24} />
      </div>
    </Link>
  );
}
