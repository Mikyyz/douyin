import {
  IconAIStrokedLevel1,
  IconFollowStroked,
  IconMonitorStroked,
  IconSearchStroked,
  IconTiktokLogo,
  IconUserCardVideoStroked,
  IconUserListStroked,
  IconUserStroked,
  IconVideoStroked,
} from "@douyinfe/semi-icons";
import { Divider, Nav } from "@douyinfe/semi-ui";

const { Item } = Nav;

const NAV_CONFIG = [
  {
    group: [
      {
        itemKey: "jingxuan",
        icon: <IconTiktokLogo />,
        text: "精选",
      },
      {
        itemKey: "recommend",
        icon: <IconAIStrokedLevel1 />,
        text: "推荐",
      },
      {
        itemKey: "aisearch",
        icon: <IconSearchStroked />,
        text: "搜索",
      },
    ],
  },
  {
    group: [
      {
        itemKey: "follow",
        icon: <IconFollowStroked />,
        text: "关注",
      },
      {
        itemKey: "friend",
        icon: <IconUserListStroked />,
        text: "朋友",
      },
      {
        itemKey: "my",
        icon: <IconUserStroked />,
        text: "我的",
      },
    ],
  },
  {
    group: [
      {
        itemKey: "live",
        icon: <IconVideoStroked />,
        text: "直播",
      },
      {
        itemKey: "vs",
        icon: <IconUserCardVideoStroked />,
        text: "放映厅",
      },
      {
        itemKey: "series",
        icon: <IconMonitorStroked />,
        text: "短剧",
      },
    ],
  },
];

export const SideNavItem = () => {
  return (
    <>
      {NAV_CONFIG.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {section.group.map((item) => (
            <Item
              key={item.itemKey}
              itemKey={item.itemKey}
              icon={item.icon}
              text={item.text}
              style={{ maxWidth: 128, fontWeight: "bold" }}
            />
          ))}

          {sectionIndex !== NAV_CONFIG.length - 1 && <Divider margin="12px" />}
        </div>
      ))}
    </>
  );
}
