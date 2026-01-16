interface Props {
  title: string;
  inverted?: boolean;
}

export const TagHeader = ({ title, inverted = false }: Props) => {
  if (inverted) {
    return (
      <div className="flex w-fit items-center border-l-2 border-white bg-white/25 px-3 text-white">
        <p className="text-sm font-medium uppercase sm:text-base">{title}</p>
      </div>
    );
  }

  return (
    <div className="border-primary-500 bg-primary-50/25 text-primary-500 flex w-fit items-center border-l-2 px-3">
      <p className="text-sm font-medium uppercase sm:text-base">{title}</p>
    </div>
  );
};
