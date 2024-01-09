import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <header className="App-header">
                <h1>Tanuljunk angolul!</h1>
            </header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/valaszto" className="nav-link">Válaszd ki!</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gepel" className="nav-link">Egészítsd ki!</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/rendez" className="nav-link">Rakd sorba!</Link>
                    </li>
                </ul>
            </nav>
            <article>
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
