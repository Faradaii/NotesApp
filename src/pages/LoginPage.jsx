import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { localization } from '../utils/localization';
import { login } from '../utils/network-data';
import noteapp from '../assets/noteapp.svg'
import LocaleContext from '../contexts/LocaleContext';
import LoginInput from '../components/input/LoginInput';

function LoginPage({ loginSuccess }){
    const { locale } = useContext(LocaleContext);
    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password });
        if(!error) loginSuccess(data);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 sm:h-5/6">
            <div className="flex justify-center items-center">
                <img src={noteapp} alt="Note-app-image" width={450} className="m-auto"/>
            </div>
            <div className="m-auto sm:w-4/6 font-geologica flex flex-col justify-center items-center text-center gap-5 md:gap-14 ">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl">{localization[locale].authpage.welcome}</h2>
                    <h6 className="text-base font-light md:text-lg">{localization[locale].authpage.desc}</h6>
                </div>
                <div className="w-full">
                    <LoginInput login={onLogin}/>
                    <small>{localization[locale].authpage.login.haveAcc}<Link to={"register"} className="text-primary">{localization[locale].authpage.login.descLink}</Link></small>
                </div>
            </div>
        </div>    
    );
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;