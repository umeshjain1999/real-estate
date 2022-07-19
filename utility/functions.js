const stringToHtml = (stringValue) => {
  return <div dangerouslySetInnerHTML={{ __html: stringValue }}>
         </div>;
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const phoneValidationPattern = "[1-9]{1}[0-9]{9}"

const isNormalNumber = (str) => {
  if(isNaN(str) || str.includes(".") || str.includes(" ") || str.includes("+") || str.includes("-") || str.includes("e")) return false
  return true
}

export {
  stringToHtml,
  scrollToRef,
  phoneValidationPattern,
  isNormalNumber,
}