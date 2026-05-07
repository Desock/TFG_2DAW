import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_banners';
  info: {
    displayName: 'hero-banner';
    icon: 'landscape';
  };
  attributes: {
    backgroundImg: Schema.Attribute.Media<'images' | 'files'>;
    ctaLabel: Schema.Attribute.String;
    ctaURL: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageAuthCta extends Struct.ComponentSchema {
  collectionName: 'components_homepage_auth_ctas';
  info: {
    displayName: 'auth_cta';
    icon: 'exit';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    loginLabel: Schema.Attribute.String;
    loginURL: Schema.Attribute.String;
    registerLabel: Schema.Attribute.String;
    registerURL: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedCars extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_cars';
  info: {
    displayName: 'featured_cars';
    icon: 'car';
  };
  attributes: {
    carImage: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    urlBundle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface HomepageFeaturedCircuits extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_circuits';
  info: {
    displayName: 'featured_circuits';
    icon: 'rotate';
  };
  attributes: {
    description: Schema.Attribute.Text;
    Label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trackImage: Schema.Attribute.Media<'images' | 'files'>;
    urlBundle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-banner': BlocksHeroBanner;
      'homepage.auth-cta': HomepageAuthCta;
      'homepage.featured-cars': HomepageFeaturedCars;
      'homepage.featured-circuits': HomepageFeaturedCircuits;
    }
  }
}
