import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TbLogout } from 'react-icons/tb';
import PropTypes from 'prop-types';

import ThemeContext from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import Toggle from './toggle/Toggle';
import { localization } from '../utils/localization';

function Navigation({ user, logoutHandler }){
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {locale, toggleLocale} = useContext(LocaleContext);
    
    return (
        <div className="opacity-90 font-geologica pt-6 mb-3">
            <div className="flex sm:flex-row flex-nowrap flex-col sm:gap-6 mt-4 sm:mt-0 text-xl px-10 text-center">
                <div className="pb-4 col-span-7 sm:text-start text-center sm:grow grow-0">
                    <span className="font-semibold text-4xl mb-4">{localization[locale].navigation.appname}</span>
                </div>
                <div className="flex sm:flex-row flex-wrap mt-4 sm:gap-8">
                    <div className={`order-3 sm:w-fit ${user !== null? "w-1/3" : "w-1/2"}`}><Toggle onToggleHandler={toggleTheme} content={theme}/></div>
                    <div className={`order-3 sm:w-fit ${user !== null? "w-1/3" : "w-1/2"}`}><Toggle onToggleHandler={toggleLocale} content={locale}/></div>
                    {   user !== null && 
                    <>
                        <div className="order-3 w-1/3 sm:w-fit"><button className="flex justify-center items-center m-auto gap-2" onClick={logoutHandler}><span>{user}</span><TbLogout/></button></div>
                        <div className="order-3 sm:order-2 flex gap-8 w-full sm:w-fit">
                            <NavLink to={"/"} end className={({isActive}) => (isActive? "border-b-4 border-primary rounded-sm" : "rounded-sm pb-1 text-gray-1").concat(" inline-block mt-3 sm:mt-0 sm:w-fit w-1/2")}>{localization[locale].navigation.active}</NavLink>
                            <NavLink to={"/archives"} end className={({isActive}) => (isActive? "border-b-4 border-primary rounded-sm" : "rounded-sm pb-1 text-gray-1").concat(" inline-block mt-3 sm:mt-0 sm:w-fit w-1/2")}>{localization[locale].navigation.archive}</NavLink>
                        </div>
                    </>
                    }
                </div>
            </div>
            
        </div>
    );
}

Navigation.propTypes = {
    user: PropTypes.string,
    logoutHandler: PropTypes.func,
}

export default Navigation;