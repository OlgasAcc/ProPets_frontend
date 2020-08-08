import React from "react";
import style from '../css_modules/dropMenu.module.css'
import {Link} from "react-router-dom";

const DropMenu = (props) => {
    const path = window.location.pathname;

    return (
        <div className='row no-gutters'>
            <div className={`${!props.display ? style.noDisplay : style.dropMenu} col-7 pr-5`}>
                <Link to='/home'
                      className={`${path.includes('/home') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center mt-3 mb-2`}>
                    <i className='fas fa-home ml-4 mr-3'/>
                    <span>Home</span>
                </Link>

                <Link to='/lost'
                      className={`${path.includes('/lost') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-search ml-4 mr-3'/>
                    <span>Lost</span>
                </Link>

                <Link to='/found'
                      className={`${path.includes('/found') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-paw ml-4 mr-3'/>
                    <span>Found</span>
                </Link>

                <Link to='/vethelp'
                      className={`${path.includes('/vethelp') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-stethoscope ml-4 mr-3'/>
                    <span>VetHelp</span>
                </Link>

                <Link to='/hotels'
                      className={`${path.includes('/hotels') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-building ml-4 mr-3'/>
                    <span>Hotels</span>
                </Link>

                <Link to='/walking'
                      className={`${path.includes('/walking') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-bullhorn ml-4 mr-3'/>
                    <span>Walking</span>
                </Link>

                <Link to='/fostering'
                      className={`${path.includes('/fostering') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-dog ml-4 mr-3'/>
                    <span>Fostering</span>
                </Link>

                <Link to='/favorites'
                      className={`${path.includes('/favorites') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center  mb-2`}>
                    <i className='fas fa-star ml-4 mr-3'/>
                    <span>Favorites</span>
                </Link>

                <Link to='/profile'
                      className={`${path.includes('/profile') ? style.navButtonOn : style.navButtonOff} d-flex align-items-center `}>

                </Link>
            </div>
            <div className={`${!props.display ? style.noDisplay : style.transparentSide} col-5`}>

            </div>
        </div>
    );
};

export default DropMenu;