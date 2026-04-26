import { FC, useRef } from "react";
import { Divider, Input, Popover, Space } from "@douyinfe/semi-ui";
import { IconSearch } from "@douyinfe/semi-icons";
import classNames from "classnames";
import { useElementWidth } from "@/hooks/useElementWidth";

import styles from "./index.module.scss";

const SearchBar: FC = () => {
  const domRef = useRef<HTMLInputElement>(null);
  // 获取触发器的宽度
  const width = useElementWidth(domRef);
  return (
    <Popover
      spacing={12}
      clickToHide
      content={<div style={{ width, height: 300 }}>111</div>}
    >
      <div className={styles.searchBarInput} ref={domRef}>
        <Input
          placeholder="搜索你感兴趣的内容"
          className={styles.searchBar}
          suffix={
            <div
              className={classNames(
                styles.searchButtonWrapper,
                "search-button"
              )}
            >
              <Divider layout="vertical" margin={0} />
              <Space>
                <IconSearch />
                搜索
              </Space>
            </div>
          }
        />
      </div>
    </Popover>
  );
};

export default SearchBar;
