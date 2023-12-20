import { useContext } from 'react';

import { localization } from '../utils/localization';
import LocaleContext from '../contexts/LocaleContext';
import noteapp from '../assets/noteapp.svg';
import RegisterInput from '../components/input/RegisterInput';
import { register } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage(){
    const navigate = useNavigate();
    const { locale } = useContext(LocaleContext);

    async function onRegister({ name, email, password }){
        const {error} = await register({name, email, password});
        if(!error) navigate("/");
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 sm:h-5/6 m-auto">
            <div className="flex justify-center items-center">
                <img src={noteapp} alt="Note-app-image" width={450} className="m-auto"/>
            </div>
            <div className="m-auto sm:w-4/6 font-geologica flex flex-col justify-center items-center text-center gap-5 md:gap-14">
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl md:text-3xl">{localization[locale].authpage.welcome}</h2>
                    <h6 className="text-base font-light md:text-lg">{localization[locale].authpage.desc}</h6>
                </div>
                <div className="w-full">
                    <RegisterInput register={onRegister} />
                    <small>{localization[locale].authpage.register.haveAcc}<Link to={"/"} className="text-primary">{localization[locale].authpage.register.descLink}</Link></small>
                </div>
                
            </div>
        </div>    
    );
}

export default RegisterPage;