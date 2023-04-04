import { Comment } from '@/components/FullPost/Comment';
import { Post } from '@/components/Post';
import { MainLayout } from '@/layout/MainLayout';
import { Avatar, Button, Icon, IconButton, Tab, Tabs, useTabs } from 'cutie-ui';
import React, { useState } from 'react';

const Profile = () => {
  const { tabsValue, handleChangeTabs } = useTabs();
  const [role, setRole] = useState<'guest' | 'moderator' | 'admin'>('admin');
  return (
    <MainLayout fullWidth>
      <div
        className="mb-20px df jcsb p-20px mt-20px"
        style={{
          background: 'var(--backgroundSecondary)',
          borderRadius: '10px',
        }}
      >
        <div className="df aic">
          <Avatar
            width={'120px'}
            variant="rounded"
            className="mr-20px"
            src="https://dota2.ru/img/heroes/anti_mage/portrait.jpg"
          />
          <div className="df flex fdc">
            <div className="df aic mb-10px">
              <h2 className="fw-700 mr-10px">Pavel Litov</h2>
              <img
                className="mr-10px"
                style={{
                  width: '20px',
                  // boxShadow: '0 0 5px 0 white',
                  // backgroundColor: 'white',
                  // padding: '4px',
                  // borderRadius: '10px',
                }}
                src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFNJcJLvzC7w9QIJ43pw8SX0nRVOuj6JmcCwomdFYG7_WxLgZt3_zPfgJO7c6xkc6JwqetMuqIz24D6cBw2LmS8Y6j3Ffn8xBpMT2mIdXDcwM7NFDS_wPr366x0kAhb3sC/360fx360f"
              />
              {role == 'admin' ? (
                <>
                  <Icon color="success" fontSize={'1.2rem'} className="mr-2px">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </Icon>
                  <p className="mr-10px" style={{ color: 'var(--success)' }}>
                    admin
                  </p>
                </>
              ) : role == 'moderator' ? (
                <>
                  <Icon color="success" fontSize={'1.2rem'} className="mr-2px">
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                  </Icon>
                  <p className="mr-10px" style={{ color: 'var(--success)' }}>
                    moderator
                  </p>
                </>
              ) : (
                ''
              )}
            </div>
            <div className="mb-10px df aic">
              <p>
                Рейтинг:
                <span className="mr-10px ml-5px fw-700 textSecondary fslg">
                  1230 mmr
                </span>
              </p>
            </div>
            <p>
              В скрытом пуле с{' '}
              <span className="fw-700 textSecondary fslg">12.03.2022</span>
            </p>
          </div>
        </div>
        <div>
          <div className="df aic">
            <IconButton
              className="mr-10px"
              // variant="outlined"
              color="secondary"
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
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </Icon>
            </IconButton>
            <IconButton
              className="mr-10px"
              // variant="outlined"
              color="secondary"
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
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </Icon>
            </IconButton>
            <Button
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </Icon>
              }
              color="secondary"
              variant="contained"
            >
              Написать
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'var(--backgroundSecondary)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Tabs
          // color="secondary"
          variant="contained"
          fullWidth
          labels={['Посты', 'Комментарии', 'Закладки']}
          value={tabsValue}
          onChange={handleChangeTabs}
        >
          <Tab className="df aic fdc pt-10px">
            <Post />
            <Post />
            <Post />
            <Post />
          </Tab>
          <Tab className="df aic fdc py-10px">
            <div className="maxw-620px">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </div>
          </Tab>
          <Tab className="df aic fdc pt-10px">
            <Post />
            <Post />
            <Post />
            <Post />
          </Tab>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Profile;
