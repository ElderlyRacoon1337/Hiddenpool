import { Icon, List, ListItem, ListItemButton } from 'cutie-ui';
import React from 'react';

export const RightBar = () => {
  return (
    <div className="minw-300px w-300px">
      <List
        sx={{
          zIndex: 1,
          position: 'sticky',
          top: '70px',
          right: 0,
        }}
      >
        <ListItem
          sx={{ fontSize: '1rem', fontWeight: '500' }}
          // startIcon={
          //   <Icon>
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       viewBox="0 0 24 24"
          //       strokeWidth={1.5}
          //       stroke="currentColor"
          //       className="w-6 h-6"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          //       />
          //     </svg>
          //   </Icon>
          // }
          // active
        >
          Недавние новости
        </ListItem>
        <ListItemButton
          endIcon={
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Icon>
          }
          className="mb-10px"
        >
          <p className="textSecondary mb-5px">10:23</p>
          Hellraisers покинули состав команды
        </ListItemButton>
        <ListItemButton
          endIcon={
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Icon>
          }
          className="mb-10px"
        >
          <p className="textSecondary mb-5px">10:59</p>
          Команда Betboom потерпела поражение команде Darkside
        </ListItemButton>
        <ListItemButton
          endIcon={
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Icon>
          }
          className="mb-10px"
        >
          <p className="textSecondary mb-5px">11:43</p>
          Team Spirit проходят на Berlin Major
        </ListItemButton>
        <ListItemButton
          endIcon={
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Icon>
          }
          className="mb-10px"
        >
          <p className="textSecondary mb-5px">12:15</p>
          Larl официально заявил свое имя
        </ListItemButton>
      </List>
    </div>
  );
};
