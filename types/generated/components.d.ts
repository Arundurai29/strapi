import type { Struct, Schema } from '@strapi/strapi';

export interface BoxContentBoxContent extends Struct.ComponentSchema {
  collectionName: 'components_box_content_box_contents';
  info: {
    displayName: 'box-content';
    icon: 'stack';
    description: '';
  };
  attributes: {
    text_block: Schema.Attribute.String;
    content_block: Schema.Attribute.Text;
    image: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'box-content.box-content': BoxContentBoxContent;
    }
  }
}
