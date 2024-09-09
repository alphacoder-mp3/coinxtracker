import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { Linkedin, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full mt-10  shadow-xl rounded-xl border  hover:shadow-4xl transition-all duration-300 px-10">
      {/* <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-4 rounded-t-xl "> */}
      <div className="rounded-t-xl ">
        <div className="text-xl font-bold">Contact Us</div>
        <div className="text-sm dark:text-gray-300 text-gray-600">
          Connect with us on our social handles
        </div>
      </div>
      <div className=" space-y-4">
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center space-x-2"
            href={siteConfig.links.github}
            target="_blank"
          >
            <Icons.gitHub className="w-6 h-6" />
            <div className="hover:underline">GitHub</div>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Linkedin className="w-6 h-6" />
            <div className="hover:underline">LinkedIn</div>
          </Link>
          <Link
            href={siteConfig.links.x}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <div className="hover:underline">Twitter</div>
          </Link>
          <Link
            href={siteConfig.links.youtube}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <YoutubeIcon className="h-6 w-6" />
            <div className="hover:underline">YouTube</div>
          </Link>
        </div>

        <div className="rounded-md px-4 text-blue-400">
          <Link href={siteConfig.links.TGChat} target="_blank">
            Chat with us on Telegram
          </Link>
        </div>
        <div className="rounded-md px-4 text-blue-400 ">
          <Link href={siteConfig.links.TGChannel} target="_blank">
            Join our Telegram channel
          </Link>
        </div>
        <div className="rounded-md px-4 text-gray-400 ">
          <Link
            href={`mailto:${siteConfig.email}`}
            className=" hover:underline text-blue-400"
          >
            {/* {siteConfig.email} */}
            Write us through an email
          </Link>
        </div>
      </div>
      {/* <CardFooter className="flex justify-between p-4 rounded-b-xl"></CardFooter> */}
    </footer>
  );
}
