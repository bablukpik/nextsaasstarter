import { cn } from '@/lib/utils';

function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-block h-4 w-4 animate-spin rounded-full border-3 border-solid',
        'animate-[spinner-colors_3s_linear_infinite,spin_1s_linear_infinite]',
        className,
      )}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
