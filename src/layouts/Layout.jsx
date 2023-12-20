import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';

function Layout({ user, logoutHandler }){
    return (
        <div className="h-screen overflow-auto flex flex-col items-center gap-5 bg-white-light dark:bg-white-dark text-black-light dark:text-black-dark">
            <header className="sticky top-0 z-40 w-full bg-white-light dark:bg-white-dark">
                <Navigation user={user} logoutHandler={logoutHandler}/>
            </header>
            <main className="w-full grow">
                <Outlet />
            </main>
        </div>
    )
}

Layout.propTypes = {
    user: PropTypes.string,
    logoutHandler: PropTypes.func,
}

export default Layout;