import { FC } from "react";
import { VideoItem } from "@/types";
import { Image, Space, Typography } from "@douyinfe/semi-ui";
import { formatTime } from "@/utils";
import { DEFAULT_DATE_FORMAT } from "@/contants";
import styles from "./index.module.scss";
import { IconHeartStroked } from "@douyinfe/semi-icons";

const { Paragraph, Text } = Typography;

interface VideoCardProps {
  video: VideoItem;
}
export const VideoCard: FC<VideoCardProps> = ({ video = {} as VideoItem }) => {
  const { caption, desc, cover, author, likes, time, create_time } = video;
  const { username } = author;
  return (
    <div className={styles.videoCardWrapper}>
      <div className={styles.videoCard}>
        <div className={styles.videoCardCoverWrapper}>
          <Image
            src={cover}
            width="100%"
            height="100%"
            preview={false}
            alt={caption}
            className={styles.videoCardCover}
          />
          {/* 点赞数量 & 播放时长 */}
          <div className={styles.videoCardInfoWrapper}>
            <div className={styles.videoCardInfo}>
              <Space>
                <IconHeartStroked />
                <Text className={styles.videoCardLikes}>{likes}</Text>
              </Space>
              <Text className={styles.videoCardTime}>{time}</Text>
            </div>
          </div>
        </div>
        <div className={styles.videoCardContent}>
          <Paragraph ellipsis={{ rows: 2 }} className={styles.videoCardTitle}>
            {desc}
          </Paragraph>
          <div className={styles.videoCardFooter}>
            <Space>
              <Text type="tertiary">{`@${username}`}</Text>
              <Text type="tertiary">
                {formatTime(create_time as number, DEFAULT_DATE_FORMAT)}
              </Text>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};
