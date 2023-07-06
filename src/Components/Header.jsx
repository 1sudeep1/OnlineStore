import React, { useRef } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductDetails from '../Pages/ProductDetails'
import Search from '../Pages/Search'
import "./header.scss"
function Header() {
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const submitSearch = () => {
        let search_text = searchRef.current.value;
        navigate('/search?s=' + search_text, { replace: true });
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand fs-2 text-light" href="#">OnlineStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 me-4">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active fs-5 text-light" aria-current="page">Home</Link>
                            </li>

                            {/* <button type="button" className="btn position-relative">
                                <i className="bi bi-cart fs-5 text-light"></i>
                                <span className="position-absolute top-1 start-100 translate-middle px-2 bg-danger border border-light rounded-circle text-light">
                                    0
                                </span>
                            </button> */}

                        </ul>
                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <input type="text" ref={searchRef} className="form-control" placeholder="Search..."/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-light bg-danger" type="button" onClick={submitSearch}>
                                        <i className="{bi bi-search text-light"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:pid" element={<ProductDetails />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </>
    )
}



export default Header
