import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type TechIconTooltipProps = {
  label: string;
  children: React.ReactNode;
};

export default function TechIcon({ label, children }: TechIconTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger aria-label={`${label} icon`}>{children}</TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
