import React from 'react';
import reactLogo from "../../assets/react.svg";

export const Header: React.FC = () => {
    return (
        <>
            <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
            <h1>Vite + React TS add</h1>
        </>
    )
}
