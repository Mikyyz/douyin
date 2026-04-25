import { FC } from "react";
import { Tabs, TabPane, Button } from "@douyinfe/semi-ui";
import { IconChevronLeft, IconChevronRight } from "@douyinfe/semi-icons";
import { FEED_PAGE_TABS } from "@/contants";
import { PageTabsType } from "@/types";
import styles from "../index.module.scss";

const FeedPage: FC = () => {
  const renderArrow = (
    items: PageTabsType,
    pos: string,
    handleArrowClick: any
  ) => {
    return (
      <>
        {pos === "start" ? (
          <Button
            icon={<IconChevronLeft />}
            size="small"
            style={{ borderRadius: "100%" }}
            onClick={handleArrowClick}
          />
        ) : (
          <Button
            icon={<IconChevronRight />}
            size="small"
            style={{ borderRadius: "100%" }}
            onClick={handleArrowClick}
          />
        )}
      </>
    );
  };
  return (
    <div>
      <Tabs
        type="line"
        defaultActiveKey="all"
        collapsible
        arrowPosition={"end"}
        renderArrow={renderArrow}
      >
        {FEED_PAGE_TABS.map((tab: PageTabsType) => (
          <TabPane tab={<span style={{ fontSize: 16 }}>{tab.title}</span>} itemKey={tab.key} key={tab.key} />
        ))}
      </Tabs>
    </div>
  );
};

export default FeedPage;
