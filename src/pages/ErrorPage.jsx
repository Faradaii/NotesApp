import RoundedButton from '../components/button/RoundedButton';
import ilust404 from '../assets/404.png';

function ErrorPage(){
    return (
        <div className="h-full flex flex-col items-center">
            <img src={ilust404} alt="error-404" width={400}/>
            <div className="font-poppins text-center flex flex-col gap-2">
                <h1 className="font-black text-5xl md:text-7xl text-primary">404</h1>
                <h4 className="font-extrabold text-2xl md:text-4xl">Not Found</h4>
                <p className="text-sm md:text-lg">Oops, Alamat yang kamu  kunjungi tidak tersedia</p>
            </div>
            <RoundedButton address={"/"} className={"bg-dark-1 text-white my-5"} text={"Kembali ke Beranda"}/>
        </div>    
    );
}

export default ErrorPage;