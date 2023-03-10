import { Media } from "./Media";

export interface Campaign {
  id: number;
  campaign_name: string;
  campaign_icon_url: string;
  pay_per_install: string;
  medias: Media[];
}
