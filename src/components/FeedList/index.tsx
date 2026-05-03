import { FC } from "react";
import { VideoItem } from "@/types";
import { VideoCard } from "@/components/FeedList/VideoCard";
import styles from "./index.module.scss";
import classnames from "classnames";

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
              className={classnames(styles.videoItem, {
                [styles.bigCardWaterfallContainer]: index === 0,
              })}
              key={video.id}
            >
              <VideoCard video={video} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
