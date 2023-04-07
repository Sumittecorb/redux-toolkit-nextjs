import { useAppSelector } from "@/store/hooks"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

export default function Navbar() {
    const items = useAppSelector((state) => state.cart)
    const router = useRouter()

    const hanldeSubmit = () => {
        router.push("/")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className='logo'>Redux Store</span>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div style={{ display: "flex", justifyContent: 'space-between' }} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={hanldeSubmit}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" type="button" onClick={() => router.push('/cart')}>Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page">Your Cart: {items.length}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

