import { useEffect, useState } from 'react';

function NoteListLoading(){
    const [ numberOfItems, setNumberOfItems ] = useState(0);
    useEffect(() => {
        const containerlist = document.getElementById('container-list');
        const maxItemInContainer = containerlist.clientWidth;
        setNumberOfItems(Math.floor(maxItemInContainer/100));
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-pulse h-full">
            {[...Array(numberOfItems).keys()].map((index) => (  
                <div key={index} className="relative dark:bg-dark-2 bg-gray-100 m-3 px-7 py-5 rounded-md font-poppins h-48">
                    <div className="flex flex-col gap-2 h-full">
                        <div className="dark:bg-dark-2-light bg-gray-200 h-5 rounded-lg"></div>
                        <div className="dark:bg-dark-2-light bg-gray-200 h-5 rounded grow my-3"></div>
                        <div className="dark:bg-dark-2-light bg-gray-200 h-3 rounded w-2/4"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 z-20 dark:bg-dark-2-light bg-gray-200 h-7 rounded-tl-lg w-1/4">
                    </div>
                </div>
            ))}
        </div>  
    );
}

export default NoteListLoading;