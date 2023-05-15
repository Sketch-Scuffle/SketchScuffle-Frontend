import React, { PropsWithChildren, useState } from "react";
import styles from "@/components/atoms/Side-Menu/Side-Menu.module.scss";
import cs from "classnames";

export interface SideMenuProps {
  tabs: {
    [key: string]: React.ReactNode;
  };
}

export default function SideMenu({ tabs }: PropsWithChildren<SideMenuProps>) {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className={styles.sideMenuWrapper}>
      <div className={styles.cardWrapper}>
        {Object.keys(tabs).map((tab) => (
          <>
            <div key={tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </div>
          </>
        ))}
      </div>
      <div
        className={cs(styles.markSquare, {
          [styles.chat]: activeTab === "Chat",
          [styles.scoreboard]: activeTab === "Scoreboard",
        })}
      ></div>
      <div className={styles.tabContent}>{tabs[activeTab]}</div>
    </div>
  );
}
