import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_banners';
  info: {
    displayName: 'hero_banner';
    icon: 'landscape';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    ctaLabel: Schema.Attribute.String;
    ctaURL: Schema.Attribute.String;
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

export interface HomepageFeaturedCarItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_car_items';
  info: {
    displayName: 'featured_car_item';
    icon: 'car';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedCars extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_cars';
  info: {
    displayName: 'featured_cars';
    icon: 'car';
  };
  attributes: {
    cars: Schema.Attribute.Component<'homepage.featured-car-item', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedCircuitItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_circuit_items';
  info: {
    displayName: 'featured_circuit_item';
    icon: 'rotate';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageFeaturedCircuits extends Struct.ComponentSchema {
  collectionName: 'components_homepage_featured_circuits';
  info: {
    displayName: 'featured_circuits';
    icon: 'rotate';
  };
  attributes: {
    circuits: Schema.Attribute.Component<
      'homepage.featured-circuit-item',
      true
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-banner': BlocksHeroBanner;
      'homepage.auth-cta': HomepageAuthCta;
      'homepage.featured-car-item': HomepageFeaturedCarItem;
      'homepage.featured-cars': HomepageFeaturedCars;
      'homepage.featured-circuit-item': HomepageFeaturedCircuitItem;
      'homepage.featured-circuits': HomepageFeaturedCircuits;
    }
  }
}
