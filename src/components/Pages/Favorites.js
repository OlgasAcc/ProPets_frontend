import React, {useState} from "react";
import style from "../../css_modules/favorites.module.css"
import DropMenu from "../DropMenu";
import Post from "../FavoritePost";

const Favorites = (props) => {

    const [dropMenu, setDropMenu] = useState(false);
    const showDropMenu = () => {
        setDropMenu(!dropMenu);
    };

    return (
        <div className={`${dropMenu ? style.containerFixed : style.container} container border-dark`}>
            <div className='row'>
                <div className={`${style.header} col-12`}>
                    <div className='row h-100 align-items-center'>
                        <div className='col-2 col-md-1 d-flex justify-content-center align-items-center'>
                            <i className="fas fa-bars" onClick={showDropMenu}/>
                        </div>
                        <div className={`${style.headerLogo} col-5 col-md-3 pt-md-2`}/>
                        <div className='offset-3 col-2 d-flex d-md-none justify-content-center align-items-center'>
                            <i className="fas fa-plus"/>
                        </div>
                        <div className='col-md-3 offset-md-5 pl-md-4 d-none d-md-block'>
                            <div className={`${style.addPostButton} d-flex align-items-center`}>
                                <i className="fas fa-plus pl-md-3 pr-md-4"/>
                                <span>Add new</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DropMenu display={dropMenu}/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Favorites;