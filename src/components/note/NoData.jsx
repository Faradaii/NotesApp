import { useContext } from 'react';

import { localization } from '../../utils/localization';
import LocaleContext from '../../contexts/LocaleContext';
import ilustEmpty from '../../assets/empty.svg';

function NoData(){
    const { locale } = useContext(LocaleContext);
    return (
        <div className="font-poppins flex flex-col items-center gap-5 mt-5">
            <img src={ilustEmpty} alt="emptyimage" width={400}/>
            <p className="text-lg md:text-xl">{localization[locale].nodata.desc}</p>
        </div>    
    );
}

export default NoData;