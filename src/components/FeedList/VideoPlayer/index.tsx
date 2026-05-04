import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Player from "xgplayer";
import "xgplayer/dist/index.min.css";

import styles from "@/components/FeedList/VideoPlayer/index.module.scss";
import { VideoPlayerRef } from "@/types";

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
  ({ url }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const playerRef = useRef<Player | null>(null);

    // 暴露方法（给父组件控制）
    useImperativeHandle(ref, () => ({
      play: () => playerRef.current?.play(),
      pause: () => playerRef.current?.pause(),
    }));

    useEffect(() => {
      if (!containerRef.current) return;

      // 销毁旧实例
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }

      // 创建新实例
      playerRef.current = new Player({
        el: containerRef.current,
        url,
        loop: true,
        width: "100%",
        height: "100%",
        autoplay: true,
        autoplayMuted: true,
        videoFillMode: "fillHeight",
      });

      return () => {
        playerRef.current?.destroy();
        playerRef.current = null;
      };
    }, [url]);

    return (
      <div className={styles.videoPlayerContainer}>
        <div ref={containerRef} />
      </div>
    );
  },
);

VideoPlayer.displayName = "VideoPlayer";