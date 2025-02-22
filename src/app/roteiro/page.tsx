import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Roteiro() {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header />
      <Image
        className="mt-0"
        src="/timeline.png"
        width={715}
        height={1000}
        alt="Linha do tempo"
        quality={100}
      />
      <Link
        className="text-3xs text-gray-300"
        href="https://www.flaticon.com/free-icons/marriage"
        target="_blank"
        title="marriage icons"
      >
        icons by Freepik - Flaticon
      </Link>
    </div>
  );
}
