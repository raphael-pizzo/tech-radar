import Image from "next/image";

export const Logo = () => (
  <div>
    <div >
      <Image
        src="/locaweb.svg"
        alt="Locaweb Logo"
        width={171}
        height={34}
        priority
      />
    </div>
  </div>
);
export const dynamic = "force-static";
