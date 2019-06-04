import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton'

// @TODO Should it be disabled completely? We usually use GeneratePDFButton...
// import DownloadPDFLink from '~/DownloadLink/DownloadPDFLink'

import DocumentLayouts from '~/DocumentLayouts'

// @TODO we need to make a decision. We exporting only one component that will be an entering point to our module
// Or we should give us an ability to use other components from this repository?
// My idea was - to have an extras object - where we keep all other components.
// it's debatable

// const extras = {
//   // DownloadPDFLink, // or disable export of it completely.
// }

export {
  GeneratePDFButton,
  DocumentLayouts
  // DownloadPDFLink
  // extras
}
