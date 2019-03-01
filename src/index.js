import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';

// Should it be disabled completely? We usually use GeneratePDFButton...
// import DownloadPDFLink   from '~/DownloadPDFLink/DownloadPDFLink';

import DocumentLayouts    from '~/DocumentLayouts/DocumentLayouts';

import RenderLists1       from '~/RenderLists1/RenderLists1';
import RenderLists2       from '~/RenderLists2/RenderLists2';
import RenderLists3       from '~/RenderLists3/RenderLists3';
import RenderLists4       from '~/RenderLists4/RenderLists4';

const extras = {
  
  // DownloadPDFLink, // or disable export of it completely.
  RenderLists1,
  RenderLists2,
  RenderLists3,
  RenderLists4
}

export {

  GeneratePDFButton,
  DocumentLayouts,
  extras

}
