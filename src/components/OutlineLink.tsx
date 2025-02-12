import Link from 'next/link';

type OutlineLinkProps = {
  url: string;
  title: string;
};
const OutlineLink = ({ url, title }: OutlineLinkProps) => {
  return (
    <Link href={url}>
      <div className='font-tan text-3xl border-slate-900 border-solid border-2 rounded-xl p-2 mt-4 text-slate-700 min-w-60 text-center'>
        {title}
      </div>
    </Link>
  );
}

export default OutlineLink;