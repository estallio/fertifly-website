export default function ({ query, enablePreview }) {
  if (query.preview) {
    console.log('ENABLING PREVIEW NOW');
    enablePreview()
  }
}
