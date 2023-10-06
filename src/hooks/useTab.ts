import { useState } from 'react';

export default function useTab(menus: string[]) {
  const [currentTab, setCurrentTab] = useState(menus[0]);

  const changeTab = (menu: string) => {
    setCurrentTab(menu);
  };

  const isCurrentTab = (menu: string) => {
    return currentTab === menu ? true : false;
  };

  return { currentTab, changeTab, isCurrentTab };
}
