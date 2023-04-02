import React, { useState } from 'react';
import { Input, Popup } from 'cutie-ui';
import { Button, Icon, IconButton } from 'cutie-ui';

export const AuthPopup = ({ popupOpen, handleClosePopup }: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isHiddenPasswordLogin, setIsHiddenPasswordLogin] = useState(false);
  const [isHiddenPasswordRegister, setIsHiddenPasswordRegister] =
    useState(false);
  const [isHiddenConfirmPasswordRegister, setIsHiddenConfirmPasswordRegister] =
    useState(false);

  return (
    <Popup
      open={popupOpen}
      onClose={handleClosePopup}
      sx={{
        backgroundColor: 'green',
        minWidth: '0 !important',
        width: '350px !important',
      }}
    >
      {isLogin ? (
        <div
          className="df fdc"
          style={{ justifyContent: 'space-between', height: '100%' }}
        >
          <div className="df aic jcsb mb-20px">
            <h3 className="fw-500">Вход в аккаунт</h3>
            <IconButton onClick={handleClosePopup}>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Icon>
            </IconButton>
          </div>
          <div className="df fdc">
            <Input variant="filled" placeholder="Почта" className="mb-20px" />
            <Input
              variant="filled"
              placeholder="Пароль"
              type={isHiddenPasswordLogin ? 'password' : 'text'}
              className="mb-20px"
              endIcon={
                isHiddenPasswordLogin ? (
                  <IconButton
                    color="transparent"
                    onClick={() => setIsHiddenPasswordLogin(false)}
                  >
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
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                ) : (
                  <IconButton
                    color="transparent"
                    onClick={() => setIsHiddenPasswordLogin(true)}
                  >
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
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                )
              }
            />
            <Button variant="contained" className="mb-10px">
              Продолжить
            </Button>
            <div className="df jcsb">
              <div className="">
                <IconButton color="transparent">
                  <Icon fontSize={'1.8rem'}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      />
                    </svg>
                  </Icon>
                </IconButton>
                <IconButton color="transparent">
                  <Icon fontSize={'1.8rem'}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z"
                        fill="#0077FF"
                      />
                      <path
                        d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z"
                        fill="white"
                      />
                    </svg>
                  </Icon>
                </IconButton>
              </div>
              <Button
                variant="text2"
                size="small"
                onClick={() => setIsLogin(false)}
              >
                Нет аккаунта?
              </Button>
            </div>
            <p
              className="textSecondary fssm pt-10px mt-10px"
              style={{ borderTop: '1px solid var(--divider)' }}
            >
              Авторизуясь, вы соглашаетесь с правилами пользования сайтом и с
              политикой обработки персональных данных
            </p>
          </div>
        </div>
      ) : (
        <div
          className="df fdc"
          style={{ justifyContent: 'space-between', height: '100%' }}
        >
          <div className="df aic jcsb mb-20px">
            <h3 className="fw-500">Регистрация</h3>
            <IconButton onClick={handleClosePopup}>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Icon>
            </IconButton>
          </div>
          <div className="df fdc">
            <div className="df jcsb">
              <Input
                variant="filled"
                placeholder="Имя"
                className="mb-20px mr-10px"
                sx={{ flex: '0 0 48%' }}
              />
              <Input
                variant="filled"
                placeholder="Фамилия"
                className="mb-20px"
                sx={{ flex: '0 0 48%' }}
              />
            </div>
            <Input variant="filled" placeholder="Почта" className="mb-20px" />
            <Input
              variant="filled"
              placeholder="Пароль"
              type={isHiddenPasswordRegister ? 'password' : 'text'}
              className="mb-20px"
              endIcon={
                isHiddenPasswordRegister ? (
                  <IconButton
                    color="transparent"
                    onClick={() => setIsHiddenPasswordRegister(false)}
                  >
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
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                ) : (
                  <IconButton
                    color="transparent"
                    onClick={() => setIsHiddenPasswordRegister(true)}
                  >
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
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                )
              }
            />
            <Input
              variant="filled"
              placeholder="Повторите пароль"
              type={isHiddenConfirmPasswordRegister ? 'password' : 'text'}
              className="mb-20px"
              endIcon={
                isHiddenConfirmPasswordRegister ? (
                  <IconButton
                    color="transparent"
                    onClick={() => setIsHiddenConfirmPasswordRegister(false)}
                  >
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
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                ) : (
                  <IconButton
                    color="transparent"
                    onClick={() => setIsHiddenConfirmPasswordRegister(true)}
                  >
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
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    </Icon>
                  </IconButton>
                )
              }
            />
            <Button variant="contained" className="mb-10px">
              Продолжить
            </Button>
            <div className="df jcsb">
              <div className="">
                <IconButton color="transparent">
                  <Icon fontSize={'1.8rem'}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 48 48"
                    >
                      <defs>
                        <path
                          id="a"
                          d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                        />
                      </defs>
                      <clipPath id="b">
                        <use xlinkHref="#a" overflow="visible" />
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        fill="#FBBC05"
                        d="M0 37V11l17 13z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#EA4335"
                        d="M0 11l17 13 7-6.1L48 14V0H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#34A853"
                        d="M0 37l30-23 7.9 1L48 0v48H0z"
                      />
                      <path
                        clip-path="url(#b)"
                        fill="#4285F4"
                        d="M48 48L17 24l-4-3 35-10z"
                      />
                    </svg>
                  </Icon>
                </IconButton>
                <IconButton color="transparent">
                  <Icon fontSize={'1.8rem'}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z"
                        fill="#0077FF"
                      />
                      <path
                        d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z"
                        fill="white"
                      />
                    </svg>
                  </Icon>
                </IconButton>
              </div>
              <Button
                variant="text2"
                size="small"
                onClick={() => setIsLogin(true)}
              >
                Уже есть аккаунт?
              </Button>
            </div>
            <p
              className="textSecondary fssm pt-10px mt-10px"
              style={{ borderTop: '1px solid var(--divider)' }}
            >
              Регистрируясь, вы соглашаетесь с правилами пользования сайтом и с
              политикой обработки персональных данных
            </p>
          </div>
        </div>
      )}
    </Popup>
  );
};
