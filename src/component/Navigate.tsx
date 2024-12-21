import {Link} from "react-router";
import "../style/Navigation.css"
export function Navigation() {
    return (
        <>
            <header className="bg-slate-500 w-full	">
                <nav className="px-4 px-py text-xl	shadow-lg">
                    <ul className="flex text-white space-x-4 ">
                        <Link className="class-lint" to='/'>Dashboard</Link>
                        <Link className="class-lint" to='/add'>Add</Link>
                        <Link className="class-lint" to='/delete'>Delete</Link>
                        <Link className="class-lint" to='/update'>Update</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}