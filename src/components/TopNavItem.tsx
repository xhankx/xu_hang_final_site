import React from 'react';
import { Link } from 'react-router-dom';

interface TopNavItemProps {
    href: string;
    text: string;
}

const TopNavItem: React.FC<TopNavItemProps> = ({ href, text }) => {
    return (
        <Link to={href} className="top-nav-link">
            {text}
        </Link>
    );
};

export default TopNavItem;
