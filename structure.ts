import { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUPLIC_VERCEL_URL || 'http://localhost:3000'
          }`,
          defaultSize: 'desktop',
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title('Preview'),
    ]);
  }
};
