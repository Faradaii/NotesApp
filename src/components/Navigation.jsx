import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ currentLocation }){
    return (
        <div className="bg-white opacity-90 z-10 font-geologica grid sm:grid-cols-2 grid-cols-1 pt-6 w-screen px-16 my-4">
            <div>
                <h1 className="font-semibold text-4xl text-center sm:text-start mb-3">Notes</h1>
            </div>
            <div className="flex justify-center sm:justify-end sm:gap-6 mt-4 sm:mt-0 gap-16 text-xl">
                <Link to={"/"} className={`${currentLocation === "/"? "border-b-4 border-primary rounded-sm" : "rounded-sm pb-1 text-gray-1"} pb-1`}>Active</Link>
                <Link to={"/archives"} className={`${currentLocation === "/archives"? "border-b-4 border-primary rounded-sm" : "rounded-sm pb-1 text-gray-1"} pb-1`}>Archive</Link>
            </div>
            
        </div>
    );
}

Navigation.propTypes = {
    currentLocation: PropTypes.string.isRequired,
};

export default Navigation;