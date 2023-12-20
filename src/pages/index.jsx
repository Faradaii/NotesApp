import ArchivedPageWrapper from "./ArchivedPage";
import HomePageWrapper from "./HomePage";
import DetailPageWrapper from './DetailPage';
import AddPageWrapper from './AddPage';
import ErrorPage from './ErrorPage';
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const pages = [
    {
        name : 'homepage',
        path : '',
        mustAuth : true,
        elem : () => (<HomePageWrapper />)
    },
    {
        name : 'archivepage',
        path : 'archives',
        mustAuth : true,
        elem : () => (<ArchivedPageWrapper />)
    },
    {
        name : 'detailpage',
        path : 'notes/:id',
        mustAuth : true,
        elem : () => (<DetailPageWrapper />)
    },
    {
        name : 'addpage',
        path : 'notes/new',
        mustAuth : true,
        elem : () => (<AddPageWrapper />)
    },
    {
        name : 'loginpage',
        path : '*',
        mustAuth : false,
        elem : ({ loginSuccess: loginSuccess }) => (<LoginPage loginSuccess={loginSuccess}/>)
    },
    {
        name : 'registerpage',
        path : 'register',
        mustAuth : false,
        elem : () => (<RegisterPage />)
    },
    {
        name : 'errorpage',
        path : '*',
        mustAuth :true,
        elem : () => (<ErrorPage />)
    },
];

const getPages = (mustAuth) => {
    if (mustAuth) {
        return pages.filter((page) => page.mustAuth == true);
    } 
    else {
        return pages.filter((page) => page.mustAuth == false);
    }
}

export { getPages };