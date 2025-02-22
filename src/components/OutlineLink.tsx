import Link from "next/link";

type OutlineLinkProps = {
  url: string;
  title: string;
};
const OutlineLink = ({ url, title }: OutlineLinkProps) => {
  return (
    <Link href={url}>
      <div className="font-tan text-3xl border-slate-900 border-solid border-2 rounded-xl p-2 mt-4 text-stone-950 text-center min-w-60 max-w-60 bg-white bg-opacity-60">
        {title}
      </div>
    </Link>
  );
};

export default OutlineLink;
