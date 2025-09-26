import React from 'react';
import Container from '../Conatainer/Container';
const Navbar = () => {
    return (
        <div className="shadow-md border-b-[0.5px] border-gray-300">
            <Container>
                <nav className="py-4 flex justify-between items-center">
                <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
                <div className="md:flex hidden items-center gap-6">
                    <a href="#" className="text-[#000000]   text-[14px]">
                        Home
                    </a>
                    <a href="#" className="text-[#000000] text-[14px]">
                        FAQ
                    </a>
                    <a href="#" className="text-[#000000] text-[14px]">
                        Changelog
                    </a>

                    <a href="#" className="text-[#000000] text-[14px]">
                        Blog
                    </a>
                    <a href="#" className="text-[#000000] text-[14px]">
                        Download
                    </a>
                    <a href="#" className="text-[#000000] text-[14px]">
                        Contact
                    </a>
                    <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 text-[13px] hover:cursor-pointer">
                        + New Ticket
                    </button>
                </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;