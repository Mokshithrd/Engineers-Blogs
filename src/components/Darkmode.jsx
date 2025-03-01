import React, {useContext, useState } from 'react'
import {MdLightMode, MdOutlineLightMode} from 'react-icons/md';
import '../index.css'
import { AppContext } from '../context/AppContext';

const Darkmode = () => {

    const {theme, switchTheme} = useContext(AppContext)

    // Using useState hook to set the mode as we need to render lightmode or darkmode based on the mode
    const [mode, setMode] = useState(theme);

    // Function to handle the toogle switch
    function clickHandler(){
        if (mode === 'light'){
            switchTheme();
            setMode('dark');
        }
        else{
            switchTheme();
            setMode('light');
        }
    }

    return (
        <div className='top-[20%]'>
            <button className='flex gap-x-2 mr-3' onClick={clickHandler}>
            {/* If mode is set to light mode then show dark mode button else show light mode button */}
                {
                    (mode === 'light') ? 
                    (
                        <><span className='font-medium text-textColor'> Dark</span><span className='mt-1'><MdLightMode/></span></>
                    ) : 
                    (
                        <><span className='font-medium text-textColor'> Light</span><span className='mt-1'><MdOutlineLightMode/></span></>
                    )
                }
            </button>
        </div>
    )
}

export default Darkmode