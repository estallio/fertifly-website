import S from '@sanity/desk-tool/structure-builder';
import * as Structure from 'sanity-plugin-intl-input/lib/structure';

// or manual implementation to use with your own custom desk structure
export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'myschema') {
    return S.document().views(Structure.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  return S.document();
};

export default () => {
  const items = Structure.getFilteredDocumentTypeListItems();
  return S.list()
  .id('__root__')
  .title('Content')
  .items(items);
};
