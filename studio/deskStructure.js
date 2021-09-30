import S from '@sanity/desk-tool/structure-builder';
import { BsNewspaper, BsSearch } from 'react-icons/bs';
import { AiOutlineTeam, AiOutlineHome } from 'react-icons/ai';
import { RiFilePaper2Line, RiLayoutBottom2Line } from 'react-icons/ri';
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

export default () =>
  S.list()
  .title('Content')
  .items([
    homeListItem,
    teamListItem,
  ]);
