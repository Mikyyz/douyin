import { FC, useRef } from "react";
import { Tabs, TabPane, Button } from "@douyinfe/semi-ui";
import { IconChevronLeft, IconChevronRight } from "@douyinfe/semi-icons";
import { FEED_PAGE_TABS } from "@/contants";
import { PageTabsType } from "@/types";
import { useTabsOverflow } from "@/hooks/useOverflow";
import { useRequest } from "@/hooks/useRequest";
import { getVideoList } from "@/api/video";
import { FeedList } from "@/components/FeedList";
import { VideoItem } from "@/types";
import { DouyinLoader } from "@/components/DouyinLoader";
import styles from "./index.module.scss";

const FeedPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLeftOverflow, isRightOverflow, isTabsOverflow } =
    useTabsOverflow(containerRef);
  const { data, loading } = useRequest(getVideoList);
  const renderArrow = (
    _items: PageTabsType,
    pos: string,
    handleArrowClick: any,
  ) => {
    if (!isTabsOverflow) return null;
    return (
      <div className={styles.tabRightArrowWrapper}>
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
    <div ref={containerRef} className={styles.feedPageContainer}>
      <Tabs
        type="line"
        defaultActiveKey="all"
        collapsible
        arrowPosition={"end"}
        renderArrow={renderArrow as any}
      >
        {FEED_PAGE_TABS.map((tab: PageTabsType) => (
          <TabPane
            tab={<span style={{ fontSize: 16 }}>{tab.title}</span>}
            itemKey={tab.key}
            key={tab.key}
            className={styles.tabPaneContainer}
          >
            {loading ? (
              <DouyinLoader size={44} fullscreen />
            ) : (
              <FeedList list={(data?.data as unknown as VideoItem[]) || []} />
            )}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default FeedPage;
