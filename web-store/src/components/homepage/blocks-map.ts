import type { ElementType } from "react";
import HeroBanner from "./HeroBanner";
import FeaturedCars from "./Featured_cars";
import FeaturedCircuits from "./Featured_circuits";
import AuthCTA from "./Auth_cta";

export type BlocksMap = Record<string, ElementType>;

export const homepageBlocksMap: BlocksMap = {
  "blocks.hero-banner": HeroBanner,
  "homepage.featured_cars": FeaturedCars,
  "homepage.featured_circuits": FeaturedCircuits,
  "homepage.auth-cta": AuthCTA,
};