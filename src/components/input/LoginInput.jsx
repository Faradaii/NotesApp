import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useContext } from 'react';

import { localization } from '../../utils/localization';
import LocaleContext from '../../contexts/LocaleContext';
import useInput from '../../hooks/useInput';

function LoginInput({ login }){
    const { locale } = useContext(LocaleContext);
    const [ email, setEmail ] = useInput();
    const [ password, setPassword ] = useInput();
    const [ isHide, setIsHide ] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        login({ email, password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="w-5/6 font-poppins flex flex-col gap-4 m-auto">
            <div className="text-start">
                <label className="block mb-2">Email</label>
                <input type="email" autoComplete="username" value={email} required onChange={setEmail} className="w-full px-3 py-1 rounded-lg border-gray-200 border bg-white-light dark:bg-white-dark"/>
            </div>
            <div className="text-start">
                <label className="block mb-2">Password</label>
                <div className="relative">
                    <input type={isHide? "password" : "text" } autoComplete="current-password" value={password} required onChange={setPassword} className="w-full px-3 py-1 rounded-lg border-gray-200 border bg-white-light dark:bg-white-dark"/>
                    <button type="button" className="absolute right-2 top-0 translate-y-1/2" onClick={() => setIsHide(!isHide)}>{isHide? <RiEyeOffLine/> : <RiEyeLine/>}</button>
                </div>
            </div>
            <button type="submit" className="bg-primary rounded-lg py-1 text-lg my-2">{localization[locale].authpage.login.buttontitle}</button>
        </form>    
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;