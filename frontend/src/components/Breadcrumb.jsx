import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((item) => item);


    return (
        <nav className="flex justify-between space-x-2 text-gray-600 font-medium pl-4 md:pl-20 text-lg">
            <div className='flex'>
                <NavLink to="/" className="hover:text-black">
                    Home
                </NavLink>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <div key={index} className="flex items-center">
                            <span className="mx-1">{'>'}</span>
                            {isLast ? (
                                <span className="text-black">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                            ) : (
                                <NavLink to={routeTo} className="hover:text-black">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </NavLink>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumb;
