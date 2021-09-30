import S from '@sanity/desk-tool/structure-builder';
import { BsNewspaper, BsSearch } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlineHome, AiOutlineContacts } from 'react-icons/ai';
import { BiPackage, BiInfoCircle, BiMoney, BiHome } from 'react-icons/bi';
import { RiFilePaper2Line, RiLayoutBottom2Line } from 'react-icons/ri';
import { FaRegHandshake } from 'react-icons/fa';
import * as Structure from 'sanity-plugin-intl-input/lib/structure';

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

const productsListItem = S.listItem()
.title('Products')
.icon(BiPackage)
.child(
  S.editor()
  .title('Products')
  .id('products')
  .schemaType('products')
  .documentId('products')
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

const jobsListItem = S.listItem()
.title('Jobs')
.icon(BiMoney)
.child(
  S.editor()
  .title('Jobs')
  .id('jobs')
  .schemaType('jobs')
  .documentId('jobs')
);

const teamListItem = S.listItem()
.title('Team')
.icon(AiOutlineTeam)
.child(
  S.editor()
  .title('Team')
  .id('team')
  .schemaType('team')
  .documentId('team')
);

const partnerListItem = S.listItem()
.title('Partners')
.icon(FaRegHandshake)
.child(
  S.editor()
  .title('Partners')
  .id('partners')
  .schemaType('partners')
  .documentId('partners')
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

export default () =>
  S.list()
  .title('Content')
  .items([
    homeListItem,
    productsListItem,
    aboutListItem,
    jobsListItem,
    teamListItem,
    partnerListItem,
    contactListItem
  ]);
