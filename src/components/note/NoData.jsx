import ilustEmpty from '../../assets/empty.png';

function NoData(){
    return (
        <div className="font-poppins flex flex-col items-center gap-5 mt-5">
            <img src={ilustEmpty} alt="emptyimage" width={400}/>
            <p className="text-lg md:text-xl">Oops... Belum ada note nih!</p>
        </div>    
    );
}

export default NoData;