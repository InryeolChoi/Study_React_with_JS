import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const onClickLogin = () => {
        setisLoggedIn(true);
    }

    const onClickLogout = () => {
        setisLoggedIn(false)
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding : 16}}>리액트 공부!</div>
        </div>
    );
}

export default LandingPage;