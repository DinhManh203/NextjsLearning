
import Login from '@/app/(auth)/login/page'
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  
  return (
      <main className="bg-white">
        <Login />
      </main>
  );
}
