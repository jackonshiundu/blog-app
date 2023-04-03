import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

export default function StudioNavbar(props: any) {
  console.log(props);
  return (
    <div>
      <div className="flex items-center justify-bet">
        <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-[#2b6777]" />
        <Link href="/" className="text-[#2b6777] flex items-center">
          Visit The Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
