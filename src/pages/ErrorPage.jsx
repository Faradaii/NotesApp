import { useContext } from 'react';

import { localization } from '../utils/localization';
import LocaleContext from '../contexts/LocaleContext';
import RoundedButton from '../components/button/RoundedButton';
import ilust404 from '../assets/404.svg';

function ErrorPage(){
    const { locale } = useContext(LocaleContext);
    return (
        <div className="h-full flex flex-col items-center">
            <img src={ilust404} alt="error-404" width={400}/>
            <div className="font-poppins text-center flex flex-col gap-2">
                <h1 className="font-black text-5xl md:text-7xl text-primary">404</h1>
                <h4 className="font-extrabold text-2xl md:text-4xl">{localization[locale].errorpage.title}</h4>
                <p className="text-sm md:text-lg">{localization[locale].errorpage.desc}</p>
            </div>
            <RoundedButton address={"/"} className={"bg-dark-1 text-white my-5"} text={localization[locale].errorpage.backbutton}/>
        </div>    
    );
}

export default ErrorPage;