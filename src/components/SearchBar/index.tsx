import { FC } from "react";
import { Input } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';

import styles from "./index.module.scss"

const SearchBar: FC = () => {
  return (
    <div className={styles.searchBarInput}>
      <Input suffix={<IconSearch />} placeholder="搜索你感兴趣的内容" />
    </div>
  )
};

export default SearchBar;