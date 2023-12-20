import { useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getPages } from './pages/index';
import Layout from './layouts/Layout';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import { getAccessToken, getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [ theme, setTheme ] = useState(() => localStorage.getItem('theme') || 'light');
  const [ locale, setLocale ] = useState(() => localStorage.getItem('locale') || 'id');
  const [ authedUser, setAuthedUser ] = useState(() => null);
  const [ initializing, setInitializing ] = useState(true);
  const [ pages, setPages ] = useState(() => getPages(false));

  const loginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { error, data: user} = await getUserLogged();
    if(!error) {
      setAuthedUser(() => user.name);
      setPages(getPages(true));
    }
    setInitializing(false);
  }

  const logoutHandler = () => {
    setAuthedUser(null);
    localStorage.removeItem('accessToken');
    setPages(() => getPages(false));
  }

  useEffect(() => {
    async function getLogged() {
      if (getAccessToken() !== null) {
        const { error, data: user} = await getUserLogged();
        if(!error) {
          setAuthedUser(() => user.name);
          setPages(getPages(true));
        }
      }
      setInitializing(false);
    }
    getLogged();
  }, []);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const themeContextValue = useMemo(() => {
    return {
      theme, 
      toggleTheme,
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'));
  }

  const localeContextValue = useMemo(() => {
    return {
      locale, 
      toggleLocale,
    }
  }, [locale]);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);


  if(initializing){
    return null;
  }

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <Routes>
          <Route path='/*' element={<Layout user={authedUser} logoutHandler={logoutHandler}/>}>
            {
              pages.map((page) => (
                <Route 
                  key={page.name}
                  path={page.path}
                  element={page.elem({ loginSuccess: loginSuccess })}
                />
              ))
            }
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
  
}

export default App;
