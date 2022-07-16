import {Link, Outlet} from "react-router-dom";

export default function App() {
    return (
        <>
            <h1>Just hi</h1>
            <nav>
                <Link to="/invoices">Invoices</Link>
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet/>
        </>
    );
}
