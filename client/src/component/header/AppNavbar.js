import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const AppNavbar = () => {
    const active = usePathname()
    return (
        <div className="fixed w-full z-9999999">
            <div className="flex items-center justify-between px-5 py-3 bg-white shadow">
                <div>
                    <Link href={'/'}>NavLogo</Link>
                </div>
                <ul className="flex items-center gap-5">
                    <li>
                        <Link className={active === '/'?"font-bold" : 'font-normal'} href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className={active === '/counter'?"font-bold" : 'font-normal'} href={'/counter'}>Counter</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AppNavbar;