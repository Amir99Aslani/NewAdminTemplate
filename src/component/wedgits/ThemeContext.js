import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./GlobalStyles";
import {lightTheme, darkTheme} from "./Theme"

export const Theme = React.createContext();

const local = localStorage.getItem("themeMode") || 'dark'

function ThemeContext(props) {

    const [themName, setThemName] = useState(localStorage.getItem("themeMode") != undefined ? localStorage.getItem("themeMode") : 'dark');
    const [theme, setTheme] = useState(local);

    const themeChanger = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        if (theme === 'light') {
            localStorage.setItem("themeMode", "dark");
            setThemName('Dark');
        } else {
            localStorage.setItem("themeMode", "light");
            setThemName('Light');
        }
    }


    return (
        <Theme.Provider value={{theme, themeChanger, themName}}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <>
                    <GlobalStyles/>
                    {props.children}
                </>
            </ThemeProvider>
        </Theme.Provider>
    );
}

export default ThemeContext;
