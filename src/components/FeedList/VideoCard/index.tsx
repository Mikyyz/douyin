import { FC, useState, useRef } from "react";
import { ActiveSource, VideoItem } from "@/types";
import { Dropdown, Image, Space, Typography } from "@douyinfe/semi-ui";
import { formatTime } from "@/utils";
import { DEFAULT_DATE_FORMAT, VIDEO_ACTIVE_SOURCE } from "@/contants";
import { IconHeartStroked, IconMore } from "@douyinfe/semi-icons";
import { useFeedStore } from "@/store/useFeedStore";
import { VideoPlayer } from "@/components/FeedList/VideoPlayer";
import { useIsBigCardLayout } from "@/hooks/useIsBigCardLayout";
import { VideoPlayerRef } from "@/types";
import classnames from "classnames";
import styles from "./index.module.scss";

const { Paragraph, Text } = Typography;

interface VideoCardProps {
  video: VideoItem;
}
export const VideoCard: FC<VideoCardProps> = ({ video = {} as VideoItem }) => {
  const {
    id,
    video_url = "",
    caption,
    desc,
    cover,
    author,
    likes,
    time,
    create_time,
  } = video;
  const { username } = author;
  // 当前视频的引用
  const videoRef = useRef<VideoPlayerRef | null>(null);
  const activeId = useFeedStore((state) => state.activeId);
  const isBigCardLayout = useIsBigCardLayout();
  const source = useFeedStore((state) => state.source);
  const setActiveId = useFeedStore((state) => state.setActive);
  // 记录鼠标移入和移出
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
    videoRef.current?.play();
    if (source !== VIDEO_ACTIVE_SOURCE.hover) {
      setActiveId(id, VIDEO_ACTIVE_SOURCE.hover as ActiveSource);
    }
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    videoRef.current?.pause();
    if (source === VIDEO_ACTIVE_SOURCE.hover) {
      setActiveId(null, null);
    }
  };
  return (
    <div
      className={styles.videoCardWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.videoCard}>
        {id === activeId ? (
          <div className={styles.videoPlayerWrapper}>
            <VideoPlayer url={video_url} ref={videoRef} />
          </div>
        ) : (
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
        )}
        <div className={styles.videoCardContent}>
          <Paragraph ellipsis={{ rows: 2 }} className={styles.videoCardTitle}>
            {desc}
          </Paragraph>
          <div className={styles.videoCardFooter}>
            <Space>
              <Text type="tertiary">{`@${username}`}</Text>
              <Text type="tertiary">·</Text>
              <Text type="tertiary">
                {formatTime(create_time as number, DEFAULT_DATE_FORMAT)}
              </Text>
            </Space>
            {isHover && (
              <Dropdown
                trigger="click"
                position="bottomLeft"
                render={
                  <Dropdown.Menu style={{ padding: 12 }}>
                    <Dropdown.Item>不感兴趣</Dropdown.Item>
                    <Dropdown.Item>举报</Dropdown.Item>
                  </Dropdown.Menu>
                }
                clickToHide
              >
                <Text className={styles.videoCardMore}>
                  <IconMore />
                </Text>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
