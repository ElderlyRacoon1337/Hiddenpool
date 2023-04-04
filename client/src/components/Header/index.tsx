// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Header.module.scss';
import { Avatar, Input, ThemeContext, usePopup, useSwitch } from 'cutie-ui';
import clsx from 'clsx';
import {
  Button,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  useMenu,
} from 'cutie-ui';
import { AuthPopup } from './Popup';
import Link from 'next/link';

export const Header = () => {
  const { menuAnchorEl, menuOpen, handleClickMenu, handleCloseMenu } =
    useMenu();
  const { handleClickPopup, handleClosePopup, popupOpen } = usePopup();
  const [isAuth, setIsAuth] = useState(true);

  const [theme, setTheme] = useState('light');
  const { changeTheme } = useContext(ThemeContext);
  const { checkedSwitch, setCheckedSwitch, handleSwitch } = useSwitch();

  useEffect(() => {
    const theme = document.documentElement.dataset.theme;
    setCheckedSwitch(theme == 'dark');
    setTheme(theme);
  }, [checkedSwitch]);

  const menuRef = useRef(null);

  return (
    <header className={clsx(styles.root)}>
      <div className={clsx(styles.container, 'px-20px')}>
        <div className={clsx(styles.header, 'df aic jcsb')}>
          <div className={clsx(styles.header__left, 'df aic')}>
            <Link href="/" className="df aic">
              <Icon color="white" className="mr-5px" fontSize={'1.5rem'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </Icon>
              <h2 className={styles.logo}>Hidden pool</h2>
            </Link>
            <div className={clsx(styles.menu, 'df aic ml-10px')}>
              <Button variant="text" color="white">
                Новости
              </Button>
              <Button variant="text" color="white">
                Турниры
              </Button>
              <Button variant="text" color="white">
                Матчи
              </Button>
            </div>
          </div>
          <Input
            startIcon={
              <Icon fontSize={'1.2rem'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Icon>
            }
            variant="basic"
            placeholder="Поиск"
            className="ml-10px w-500px"
            sx={{
              backgroundColor: 'var(--backgroundSecondary)',
              borderRadius: '7px',
              flex: '0 0 30%',
              input: {
                // backgroundColor: 'black',
                marginLeft: '5px',
              },
            }}
          />
          <div className={clsx(styles.header__right, 'df aic jcfe')}>
            {isAuth ? (
              <>
                <Link href="/create">
                  <Button variant="contained" color="white" className="mr-10px">
                    Написать статью
                  </Button>
                </Link>
                <IconButton color="white" className="mr-10px">
                  <Icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </Icon>
                </IconButton>
                <Link href={'/profile'}>
                  <Avatar
                    src="https://www.gamersdecide.com/sites/default/files/lina_1.jpg"
                    width={'2rem'}
                    className="mr-10px"
                    variant="rounded"
                  />
                </Link>
                <IconButton color="white" onClick={handleClickMenu}>
                  <Icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Icon>
                </IconButton>
              </>
            ) : (
              <>
                <Button
                  onClick={handleClickPopup}
                  variant="outlined"
                  color="white"
                  className="mr-10px"
                >
                  Войти
                </Button>
                <IconButton color="white" onClick={handleClickMenu}>
                  <Icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Icon>
                </IconButton>
              </>
            )}

            <Menu
              anchorEl={menuAnchorEl}
              open={menuOpen}
              onClose={handleCloseMenu}
            >
              <MenuItem
                className="df aic"
                onClick={(e) => {
                  menuRef.current.click();
                }}
              >
                <p className="mr-10px">Темная тема</p>
                <Switch
                  other={{ ref: menuRef }}
                  size="small"
                  checked={checkedSwitch}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e: any) => {
                    handleSwitch(e);
                    changeTheme(theme == 'dark' ? 'light' : 'dark');
                  }}
                />
              </MenuItem>
              <MenuItem onClose={handleCloseMenu}>Настройки</MenuItem>
              <MenuItem onClose={handleCloseMenu}>Выйти</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      <AuthPopup handleClosePopup={handleClosePopup} popupOpen={popupOpen} />
    </header>
  );
};
