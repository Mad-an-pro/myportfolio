import Link from 'next/link';

const Navlink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="text-[#ADB7BE] hover:text-[#00FF41] transition-colors duration-300 text-lg font-medium"
        >
            {title}
        </Link>
    );
};

export default Navlink;
