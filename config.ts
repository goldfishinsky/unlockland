import {
  House,
  UserRound,
  DraftingCompass,
  Landmark,
  HandCoins,
  Handshake,
} from "lucide-react";

const environment = "local";
const serverUrls = {
  local: "/backend",
  test: "https://app.unlock.land/backend",
  main: "/backend",
  product: "https://apps.unlock.land",
};
export const serverUrl = serverUrls[environment];

export const GlobalConfig = {
  LATITUDE_COMPENSATE_MOBILE: -0.001,
  MAPBOX_ACCESS_TOKEN:
    "pk.eyJ1IjoibWV0b25haSIsImEiOiJjbTBjdXh4eG8wNjkxMmpwd2lyODBiaXNhIn0.iB3vHZyno4nX3xIOldMc2w",
};

export const rolesList = [
  { name: "Other", icon: UserRound },
  { name: "Homeowner", icon: House },
  { name: "Investor", icon: HandCoins },
  { name: "Architect", icon: DraftingCompass },
  { name: "Broker", icon: Handshake },
  { name: "Official", icon: Landmark },
];
