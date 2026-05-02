import { LOGIN_MODAL_TITLE } from "@/contants";
import { useLoginModalStore } from "@/store/useLoginModalStore";

import { setAuthExpiredHandler } from "./hooks";

setAuthExpiredHandler(() => {
  useLoginModalStore.getState().openLoginModal(LOGIN_MODAL_TITLE.login);
});

