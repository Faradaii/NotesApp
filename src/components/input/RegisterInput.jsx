import PropTypes from 'prop-types';
import { useContext } from 'react';

import { localization } from '../../utils/localization';
import LocaleContext from '../../contexts/LocaleContext';
import useInput from '../../hooks/useInput';

function RegisterInput({ register }){
    const { locale } = useContext(LocaleContext);
    const [ email, setEmail ] = useInput();
    const [ password, setPassword ] = useInput();
    const [ name, setName ] = useInput();
    const [ confirmPassword, setConfirmPassword ] = useInput();


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert('Password tidak cocok!');
        }
        register({ name, email ,password });
    }

    return (
        <form onSubmit={onSubmitHandler} className="w-5/6 font-poppins flex flex-col gap-4 m-auto">
            <div className="text-start">
                <label className="block mb-2">{localization[locale].authpage.register.name}</label>
                <input type="text" value={name} required onChange={setName} className="w-full px-3 py-1 rounded-lg border-gray-200 border bg-white-light dark:bg-white-dark"/>
            </div>
            <div className="text-start">
                <label className="block mb-2">Email</label>
                <input type="email" autoComplete="username" value={email} required onChange={setEmail} className="w-full px-3 py-1 rounded-lg border-gray-200 border bg-white-light dark:bg-white-dark"/>
            </div>
            <div className="text-start">
                <label className="block mb-2">Password</label>
                <input type="password" autoComplete="new-password" value={password} required onChange={setPassword} className="w-full px-3 py-1 rounded-lg border-gray-200 border bg-white-light dark:bg-white-dark"/>
            </div>
            <div className="text-start">
                <label className="block mb-2">{localization[locale].authpage.register.confirm} Password</label>
                <input type="password" autoComplete="new-password" value={confirmPassword} required onChange={setConfirmPassword} className="w-full px-3 py-1 rounded-lg border-gray-200 border bg-white-light dark:bg-white-dark"/>
            </div>
            <button type="submit" className="bg-primary rounded-lg py-1 text-lg my-2">{localization[locale].authpage.register.buttontitle}</button>
        </form>   
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;