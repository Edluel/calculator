import React from 'react'

export default function Screen(props) {
    const theme = props.theme;
    return (
        <div className={`calculator-screen ${theme === 1 ? 'theme-1' : theme === 2 ? 'theme-2' : 'theme-3'}`}>
            0
        </div>
    )
}
