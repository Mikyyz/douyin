// 视频相关
export interface VideoTag {
  id: string;
  tag: string;
}

export interface VideoAuthor {
  user_id: string;
  username: string;
  signature: string;
}

export interface VideoCommentPermissionInfo {
  can_comment: boolean;
}

export interface VideoFeedCommentConfig {
  input_config_text: string;
}

export interface VideoAwemeControl {
  can_share: boolean;
}

export interface VideoItem {
  /**
   * 视频ID
   */
  id: string;

  /**
   * 视频地址
   */
  video_url: string;
  /**
   * 视频标题
   */
  caption: string;

  /**
   * 视频描述
   */
  desc: string;

  /**
   * 视频封面
   */
  cover: string;

  /**
   * 作者信息
   */
  author: VideoAuthor;

  /**
   * 点赞数
   */
  likes: string;

  /**
   * 视频时长（展示）
   * 例如：36:34
   */
  time: string;

  /**
   * 标签
   */
  tags: VideoTag[];

  /**
   * 评论权限
   */
  comment_permission_info: VideoCommentPermissionInfo;

  /**
   * 评论输入框配置
   */
  feed_comment_config: VideoFeedCommentConfig;

  /**
   * 发布时间（时间戳）
   */
  create_time: number;

  /**
   * 视频时长（毫秒）
   */
  duration: number;

  /**
   * 视频权限
   */
  aweme_control: VideoAwemeControl;
}

// 视频是否处于视口、悬浮、初始化
export type ActiveSource = 'hover' | 'inview' | 'init' | null

export interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
}
