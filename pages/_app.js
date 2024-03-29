import 'tailwindcss/tailwind.css';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation/>
    <Component {...pageProps} />
    </ThemeProvider>
    <Footer/>
  </>
}

export default MyApp
