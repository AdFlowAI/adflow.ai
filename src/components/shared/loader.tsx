import { cn } from "@/lib";

interface Props {
  className?: string;
}

export const Loader = ({ className }: Props) => {
  return (
    <div className={cn("z-9999! grid h-screen w-screen place-items-center", className)}>
      <div></div>
    </div>
  );
};
