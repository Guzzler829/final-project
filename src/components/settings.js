import { useState, useEffect, useRef } from 'react';

export default function Settings(props) {

    const checkBox = useRef(null);

    useEffect( () => {
        checkBox.current.checked = getCookie('classicToggle');
    }, []);

    //this getCookie function is taken from this w3Schools page: https://www.w3schools.com/js/js_cookies.asp

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie() {
        document.cookie = "SameSite=Lax; classicToggle=" + checkBox.current.checked;
        console.log(getCookie('classicToggle'))
    }

    //I can't figure this out; why does it keep staying true when I reload the page?

    return (
        <div className="settings-container">
            <div className="setting">
                <p>Default view:</p>
                <div className="switch-label">Card <input ref={checkBox} type={"checkbox"} onClick={setCookie} className="switch"></input> Classic</div> 
            </div>
        </div>
    );
}


