import Image from 'next/image';
import { permanentRedirect } from 'next/navigation';
import { title } from 'process';

export default function Home() {
  permanentRedirect('/journey');
}
