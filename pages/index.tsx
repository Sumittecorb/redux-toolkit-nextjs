import Navbar from '@/component/navbar'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import Products from './product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="mt-5" style={{ textAlign: "center" }}>
        <h2>Welcome to the toolkit store</h2>
        <section>
          <h3>Products</h3>
          <div className="mt-5">
            <Products />
          </div>
        </section>
      </div>
    </>
  )
}
