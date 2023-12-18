import React, { FC } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    Collapse
} from "@material-tailwind/react"
import MenuButton from './MenuButton.tsx';

const Bar: FC = () => {
    const [showMenuButton, setShowMenuButton] = React.useState(false);

    function handleResize() {
        window.innerWidth > 960 ? setShowMenuButton(false) : setShowMenuButton(true);
    }

    React.useEffect(() => {
        window.addEventListener("resize", event => handleResize())
    });

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="w-[calc(100%+48px)] overflow-scroll">
            <Navbar className='flex items-center sticky justify-start'>
                <div className='flex items-start text-blue-gray-900'>
                    <div className='flex items-center gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                        </svg>
                        <Typography
                            as="a"
                            href="/#"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            t63065488
                        </Typography>
                    </div>
                </div>
                <div className='flex'>
                    {showMenuButton ? (
                    <MenuButton navList={navList} />
                    ) : (
                        <div>{navList}</div>
                    )}
                </div>
            </Navbar>
        </div>
    );
}

export default Bar;