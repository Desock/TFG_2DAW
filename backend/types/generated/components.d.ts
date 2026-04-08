import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_videos';
  info: {
    displayName: 'Hero Video';
    icon: 'play';
  };
  attributes: {
    FallbackImage: Schema.Attribute.Media<'images' | 'files'>;
    MainTitle: Schema.Attribute.String;
    OverlayOpacity: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<40>;
    Subtitle: Schema.Attribute.Text;
    VideoFile: Schema.Attribute.Media<'files' | 'videos'>;
    VideoSource: Schema.Attribute.Enumeration<['Upload', 'External_Link']>;
    VideoURL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-video': BlocksHeroVideo;
    }
  }
}
