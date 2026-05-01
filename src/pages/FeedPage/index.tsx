import { FC, useRef } from "react";
import { Tabs, TabPane, Button } from "@douyinfe/semi-ui";
import { IconChevronLeft, IconChevronRight } from "@douyinfe/semi-icons";
import { FEED_PAGE_TABS } from "@/contants";
import { PageTabsType } from "@/types";
import { useTabsOverflow } from "@/hooks/useOverflow";
import { useRequest } from "@/hooks/useRequest";
import { getVideoList } from "@/api/video";
import { FeedList } from "@/components/FeedList";

const FeedPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLeftOverflow, isRightOverflow, isTabsOverflow } =
    useTabsOverflow(containerRef);
  const { data } = useRequest(getVideoList);
  console.log('data>>', data);
  const renderArrow = (
    items: PageTabsType,
    pos: string,
    handleArrowClick: any
  ) => {
    if (!isTabsOverflow) return null;
    return (
      <div style={{ marginTop: 6, width: 20 , paddingLeft: 10 }}>
        {pos === "start" ? (
          <Button
            icon={<IconChevronLeft />}
            size="small"
            disabled={!isLeftOverflow}
            onClick={handleArrowClick}
          />
        ) : (
          <Button
            icon={<IconChevronRight />}
            size="small"
            disabled={!isRightOverflow}
            onClick={handleArrowClick}
          />
        )}
      </div>
    );
  };
  return (
    <div ref={containerRef}>
      <Tabs
        type="line"
        defaultActiveKey="all"
        collapsible
        arrowPosition={"end"}
        renderArrow={renderArrow}
      >
        {FEED_PAGE_TABS.map((tab: PageTabsType) => (
          <TabPane
            tab={<span style={{ fontSize: 16 }}>{tab.title}</span>}
            itemKey={tab.key}
            key={tab.key}
          >
            <FeedList />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default FeedPage;
