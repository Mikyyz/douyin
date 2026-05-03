import { FC } from "react";
import { VideoItem } from "@/types";
import { VideoCard } from "@/components/FeedList/VideoCard";
import styles from "./index.module.scss";

interface FeedListProps {
  list: VideoItem[];
}

export const FeedList: FC<FeedListProps> = ({ list = [] }) => {
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
