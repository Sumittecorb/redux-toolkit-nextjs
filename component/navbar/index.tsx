import { useAppSelector } from "@/redux/store/hooks"
import { useRouter } from "next/router"

export default function Navbar() {
    const items = useAppSelector((state) => state.cart)
    const router = useRouter()
    const hanldeSubmit = () => {
        router.push("/")
    }
    return (
        <>
            <nav className="nav flex flex-wrap items-center justify-between px-4 bg-teal-400 py-3 ">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
                    <span className="font-semibold text-xl tracking-tight">Redux Store</span>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>
                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li className="border-t md:border-none">
                        <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold cursor-pointer" onClick={hanldeSubmit}>Home</a>
                    </li>

                    <li className="border-t md:border-none">
                        <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker cursor-pointer" onClick={() => router.push('/cart')}>Cart</a>
                    </li>

                    <li className="border-t md:border-none">
                        <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker cursor-pointer">Your Cart: {items.length}</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

