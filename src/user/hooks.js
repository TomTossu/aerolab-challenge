import { useContext } from "react";

import { UserContext } from "./context";

export function usePoints() {
  const {
    state: { user },
    actions: { addPoints },
  } = useContext(UserContext);

  return [user.points, addPoints];
}

export function useUser() {
  const {
    state: { user },
  } = useContext(UserContext);

  return [user];
}

export function useRedeem() {
  const {
    actions: { redeemProduct },
  } = useContext(UserContext);

  return redeemProduct;
}
