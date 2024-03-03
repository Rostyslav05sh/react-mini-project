import {FC, PropsWithChildren, useState} from "react";
import {useNavigate} from "react-router-dom";
import Switch from '@mui/material/Switch';

import css from './Header.module.css'
import {UserInfo} from "../UserContainer";
import {useAppContext} from "../../hoc";
import {Genres} from "../GenresContainer";

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {

    const navigate = useNavigate();

    const [genresActive, setGenresActive] = useState(false);
    const {darkMode, toggleDarkMode} = useAppContext();

    const toggleGenresPanel = () => {
        setGenresActive(!genresActive);
    };

    console.log(darkMode)

    return (
        <div className={darkMode ? css.DarkTheme : css.Header}>
            <h1 className={css.headerLogo} onClick={() => {navigate('movies')}}>MovieDB</h1>
            <div className={css.headerBlock}>
            <div>
                <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} checked={darkMode} onChange={toggleDarkMode} />
                <button className={css.headerBtnGenre} onClick={() => toggleGenresPanel()}>
                Genres
                </button>
                {genresActive && (
                    <div className={css.headerGenresActive}>
                        <Genres/>
                    </div>
                )}
            </div>
            <button className={css.headerBtnSearch} onClick={() => {navigate('search')}}>Search</button>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};