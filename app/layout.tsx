import '@/app/style/globals.css';
import Header from '@/app/components/Header'
import Footer from '@/app/components/footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <Header />
        <main>{children}</main>
        <WhatsAppButton /> s
      <Footer />
      </body>
    </html>
  );
}
