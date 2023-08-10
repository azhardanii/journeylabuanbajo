import './globals.css';
import { Poppins } from '@next/font/google';

const pop = Poppins({ weight: ['300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className={pop.className}>{children}</body>
        </html>
    );
}
