import Image from 'next/image';
import { redirect } from 'next/navigation';
import { title } from 'process';

export default function Home() {
  redirect('/journey');
}
