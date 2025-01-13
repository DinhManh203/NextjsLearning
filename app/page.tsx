
import Index from "@/app/index/page"
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  
  return (
      <main className="bg-white">
        <Index />
      </main>
  );
}
