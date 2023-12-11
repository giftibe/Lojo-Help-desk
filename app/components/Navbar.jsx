import Image from "next/image";
import Link from "next/link";
import Logo from './lojo-logo.png';

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt="Help desk Logo"
                width={70}
                quality={100}
                placeholder="blur"
            />
            <h1>Lojo Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets" >Tickets</Link>
        </nav>
    )
}

