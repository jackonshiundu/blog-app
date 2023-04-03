import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import StudioNavbar from './Components/StudioNavbar';
import Logo from './Components/Logo';
import { getDefaultDocumentNode } from './structure';

/* let projectId: string | undefined = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset: string | undefined = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId && !dataset) {
  throw new Error('No project ID found in environment variables.');
} */
export default defineConfig({
  basePath: '/studio',
  name: 'Jaguarblog_content_studio',
  title: 'Jaguarblog_content_studio',
  projectId: 'unurshgj',
  dataset: 'production',
  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
