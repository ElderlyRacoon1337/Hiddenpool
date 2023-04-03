import { MainLayout } from '@/layout/MainLayout';
import { Avatar, Button, Icon, IconButton } from 'cutie-ui';
import React from 'react';

const Profile = () => {
  return (
    <MainLayout fullWidth>
      <div
        className="mb-20px df p-20px mt-20px"
        style={{
          background: 'var(--backgroundSecondary)',
          borderRadius: '10px',
        }}
      >
        <div className="df flex fdc">
          <Avatar
            width={'120px'}
            variant="rounded"
            className="mb-10px"
            src="https://www.gamersdecide.com/sites/default/files/lina_1.jpg"
          />
          <div className="df aic mb-10px">
            <h2 className="fw-700 mr-10px">Pavel Litov</h2>
            <Icon fontSize={'1.5rem'}>
              <img
                width={'100%'}
                height={'100%'}
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/ce/Logo_team_spirit.svg/1200px-Logo_team_spirit.svg.png"
              />
            </Icon>
          </div>
          <div className="mb-10px df aic">
            <p className="mr-10px fw-700 colorSuccess">+123</p>
            <p>2 подписчика</p>
          </div>
          <p>Присоединился к проекту вчера</p>
        </div>
        <div>
          <div className="df aic">
            <IconButton
              className="mr-10px"
              variant="outlined"
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

        <div style={{ borderBottom: 1, borderColor: 'var(--divider)' }}>
          {/* <Tabs value={value} onChange={handleChange}>
            <Tab label="Статьи" />
            <Tab label="Комментарии" />
            <Tab label="Закладки" />
          </Tabs> */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
