import { Collapse, IconButton } from '@material-tailwind/react';
import React, { FC, useState } from 'react';

const MenuButton: FC<{ navList: any }> = ({ navList }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <IconButton
                variant="text"
                className=""
                ripple={false}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </IconButton>
            {isOpen ? (
                <div>
                    <Collapse open={isOpen}>
                        {navList}
                    </Collapse>
                </div>
            ) : (
                <div></div>
            )}

        </div>
    );
}

export default MenuButton;