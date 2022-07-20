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

const convertTime = (time,type = '') => {
  //*@param time data type should be date otherwise it will give you Invalid Date
  if(type === 'inputDateDefault'){
    return new Date(time).toLocaleDateString('en-CA')
  } else{
    return new Date(time).toLocaleDateString('en-in',{
      year:'numeric',
      month: '2-digit',
      day:'2-digit'
    })
  }
}

const convertStringToDate = (str,separation = '-') => {
  //Date format should be DD/MM/YYYY where separation could be anything as mentioned in parameter
  const [day, month, year] = str.split(separation);
  const date = new Date(+year, +month - 1, +day);
  return date
}

export {
  stringToHtml,
  scrollToRef,
  phoneValidationPattern,
  isNormalNumber,
  convertTime,
  convertStringToDate,
}