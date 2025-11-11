import S from '@sanity/desk-tool/structure-builder'
import {
  AiOutlineContacts,
  AiOutlineFileProtect,
  AiOutlineHome,
} from 'react-icons/ai'
import { BiInfoCircle } from 'react-icons/bi'
import { MdOutlineTouchApp, MdOutlineFactory } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa'
import { CgLoadbarDoc } from 'react-icons/cg'

const homeListItem = S.listItem()
.title('Home')
.icon(AiOutlineHome)
.child(
  S.editor()
  .title('Home')
  .id('home')
  .schemaType('home')
  .documentId('home')
);

const productionListItem = S.listItem()
  .title('Production')
  .icon(MdOutlineFactory)
  .child(
    S.editor()
      .title('Production')
      .id('production')
      .schemaType('production')
      .documentId('production')
  );

const applicationsListItem = S.listItem()
.title('Applications')
.icon(MdOutlineTouchApp)
.child(
  S.editor()
    .title('Applications')
    .id('applications')
    .schemaType('applications')
    .documentId('applications')
);

const downloadsListItem = S.listItem()
.title('Downloads')
.icon(FaDownload)
.child(
  S.editor()
  .title('Downloads')
  .id('downloads')
  .schemaType('downloads')
  .documentId('downloads')
);

const aboutListItem = S.listItem()
.title('About us')
.icon(BiInfoCircle)
.child(
  S.editor()
  .title('About us')
  .id('about')
  .schemaType('about')
  .documentId('about')
);

const contactListItem = S.listItem()
.title('Contact')
.icon(AiOutlineContacts)
.child(
  S.editor()
  .title('Contact')
  .id('contact')
  .schemaType('contact')
  .documentId('contact')
);

const privacyListItem = S.listItem()
.title('Privacy')
.icon(AiOutlineFileProtect)
.child(
  S.editor()
  .title('Privacy')
  .id('privacy')
  .schemaType('privacy')
  .documentId('privacy')
);

const imprintListItem = S.listItem()
.title('Imprint')
.icon(CgLoadbarDoc)
.child(
  S.editor()
  .title('Imprint')
  .id('imprint')
  .schemaType('imprint')
  .documentId('imprint')
);

export default () =>
  S.list()
  .title('Content')
  .items([
    homeListItem,
    productionListItem,
    applicationsListItem,
    aboutListItem,
    downloadsListItem,
    contactListItem,
    privacyListItem,
    imprintListItem
  ]);
