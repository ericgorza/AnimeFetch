import Image from "next/image";
import Link from "next/link";
import styles from './footer.module.css'

function Footer() {
  return (
    <footer className='sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921] fixed bottom-0 w-full'>
      <p className="text-base font-bold text-white">@2024 Anime Fetch</p>
      {/* <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      /> */}
      <div className="flex items-center gap-6">
        <Link href={'https://www.linkedin.com/in/eric-pires-gorza-a164b7191/'}>
          <Image
            src="./logo-linkedin.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"/>
        </Link>
        <Link href={'https://www.instagram.com/ericgorza'}>
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href={'https://www.github.com/ericgorza'}>
          <Image
            src="./logo-github.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
