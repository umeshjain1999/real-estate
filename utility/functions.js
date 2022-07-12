const stringToHtml = (stringValue) => {
  return <div dangerouslySetInnerHTML={{ __html: stringValue }}>
         </div>;
}

export {
  stringToHtml
}