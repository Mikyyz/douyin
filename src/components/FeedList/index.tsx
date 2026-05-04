import { FC, useEffect } from "react";
import { ActiveSource, VideoItem } from "@/types";
import { VideoCard } from "@/components/FeedList/VideoCard";
import { useIsBigCardLayout } from "@/hooks/useIsBigCardLayout";
import { useFeedStore } from "@/store/useFeedStore";
import { VIDEO_ACTIVE_SOURCE } from "@/contants";
import styles from "./index.module.scss";

interface FeedListProps {
  list: VideoItem[];
}

export const FeedList: FC<FeedListProps> = ({ list = [] }) => {
  const isBigCardLayout = useIsBigCardLayout();
  const source = useFeedStore((state) => state.source);
  const setActive = useFeedStore((state) => state.setActive);
  const clearActive = useFeedStore((state) => state.clearActive);

  useEffect(() => {
    if (!list.length) return;
    // hover 优先, 不要抢
    if (source === VIDEO_ACTIVE_SOURCE.hover) return;
    if (isBigCardLayout) {
      setActive(list[0].id, VIDEO_ACTIVE_SOURCE.init as ActiveSource)
    } else {
      clearActive(VIDEO_ACTIVE_SOURCE.init as ActiveSource)
    }
  }, [list, isBigCardLayout, source])

  return (
    <div className={styles.videoListContainer}>
      <div className={styles.videoListWrapper}>
        {list.map((video: VideoItem, index: number) => {
          return (
            <div
              key={video.id}
              className={styles.videoGridItem}
              data-video-id={video.id}
              data-big={index === 0 ? "true" : "false"}
            >
              <VideoCard video={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
