const stringToHtml = (stringValue) => {
  return <div dangerouslySetInnerHTML={{ __html: stringValue }}>
         </div>;
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export {
  stringToHtml,
  scrollToRef
}