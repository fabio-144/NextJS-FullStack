"use client"

const { useContext,useEffect, useState } = require("react")
const { ThemeContext } = require("../context/ThemeContext")

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);

    if (mounted) {
        return <div className={theme}>{children}</div>
    }
}

export default ThemeProvider;