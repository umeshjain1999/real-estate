import Image from 'next/image'
import React from 'react'
function Brand({
  title = '',
  desc = ''
}) {
  return (
    <div className='home__brand'>
      <div className="container">
        <div className="home__brand__wrap">
          <div className="home__brand__left">
            <div className="home__brand__title sub-title">
              {title}
            </div> 
            <div className="home__brand__desc normal-text">
              {desc}
            </div>
            <div className="home__brand__icon_wrap">
              <span className='home__brand_icon'><Airbnb/></span>
              <span className='home__brand_icon'><Pulte/></span>
              <span className='home__brand_icon'><Homes/></span>
              <span className='home__brand_icon'><Airbnb/></span>
              <span className='home__brand_icon'><Homes/></span>
              <span className='home__brand_icon'><Airbnb/></span>
            </div>
          </div>
          <div className="home__brand__right">
            <div className="brand_front">
              <Image
                src={'/assets/images/home/home_brand_front.png'}
                alt="Buildings"
                width={410}
                height={470}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function Airbnb() {
  return (
    <svg width="129" height="40" viewBox="0 0 129 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.103 10.05a2.597 2.597 0 0 1-2.602 2.603 2.597 2.597 0 0 1-2.603-2.603c0-1.441 1.121-2.603 2.603-2.603 1.481.04 2.602 1.202 2.602 2.603Zm-10.73 5.245v.64s-1.242-1.6-3.885-1.6c-4.364 0-7.767 3.323-7.767 7.927 0 4.565 3.363 7.928 7.767 7.928 2.683 0 3.884-1.641 3.884-1.641v.68c0 .32.24.56.56.56h3.244V14.736h-3.243c-.32 0-.56.28-.56.56Zm0 9.65c-.601.88-1.802 1.642-3.244 1.642-2.563 0-4.524-1.602-4.524-4.325s1.962-4.324 4.524-4.324c1.402 0 2.683.8 3.243 1.642v5.365Zm6.206-10.21h3.844V29.79h-3.844V14.735Zm57.417-.4c-2.643 0-3.884 1.6-3.884 1.6V7.489h-3.844V29.79h3.243c.321 0 .561-.28.561-.56v-.681s1.241 1.641 3.884 1.641c4.364 0 7.768-3.363 7.768-7.928 0-4.564-3.404-7.928-7.728-7.928Zm-.641 12.212c-1.481 0-2.642-.761-3.243-1.642v-5.366c.601-.8 1.882-1.641 3.243-1.641 2.563 0 4.525 1.602 4.525 4.324 0 2.723-1.962 4.325-4.525 4.325Zm-9.089-5.686v8.969h-3.843V21.3c0-2.482-.801-3.483-2.963-3.483-1.162 0-2.363.6-3.124 1.481v10.49h-3.843V14.736h3.043c.32 0 .56.28.56.56v.64c1.121-1.16 2.603-1.6 4.084-1.6 1.682 0 3.083.48 4.205 1.44 1.361 1.122 1.881 2.563 1.881 5.086Zm-23.103-6.527c-2.642 0-3.884 1.602-3.884 1.602V7.488h-3.844V29.79h3.244c.32 0 .56-.28.56-.56v-.681s1.242 1.641 3.884 1.641c4.365 0 7.768-3.363 7.768-7.928.04-4.564-3.363-7.928-7.728-7.928Zm-.64 12.213c-1.482 0-2.643-.761-3.244-1.642v-5.366c.6-.8 1.882-1.641 3.244-1.641 2.562 0 4.524 1.602 4.524 4.324 0 2.723-1.962 4.325-4.524 4.325ZM77.112 14.334c1.161 0 1.762.2 1.762.2v3.564s-3.203-1.081-5.205 1.201v10.53h-3.844V14.736h3.243c.32 0 .56.28.56.56v.64c.721-.84 2.283-1.6 3.484-1.6Zm-39.92 14.094c-.2-.48-.4-1-.6-1.441-.32-.72-.641-1.401-.921-2.042l-.04-.04a417.984 417.984 0 0 0-8.85-18.098l-.12-.24c-.32-.601-.64-1.242-.96-1.882-.4-.721-.801-1.482-1.442-2.203C22.978.881 21.136 0 19.174 0c-2.002 0-3.804.88-5.125 2.402-.6.721-1.041 1.482-1.441 2.203-.32.64-.641 1.28-.961 1.881l-.12.24c-3.084 6.008-6.087 12.094-8.85 18.1l-.04.08c-.28.64-.6 1.321-.92 2.042-.2.44-.4.92-.6 1.441-.521 1.482-.682 2.883-.481 4.325a8.51 8.51 0 0 0 5.205 6.646c1.04.44 2.122.641 3.243.641.32 0 .72-.04 1.041-.08 1.322-.16 2.683-.6 4.004-1.361 1.642-.921 3.203-2.243 4.965-4.165 1.762 1.922 3.363 3.244 4.965 4.165 1.321.76 2.683 1.2 4.004 1.361.32.04.72.08 1.041.08 1.121 0 2.242-.2 3.243-.64 2.803-1.122 4.765-3.684 5.206-6.647.32-1.402.16-2.803-.36-4.285Zm-18.058 2.083c-2.162-2.723-3.563-5.286-4.044-7.448-.2-.92-.24-1.722-.12-2.442.08-.641.32-1.202.64-1.682.761-1.081 2.043-1.762 3.524-1.762 1.482 0 2.803.64 3.524 1.762.32.48.56 1.041.64 1.682.12.72.08 1.561-.12 2.442-.48 2.122-1.882 4.685-4.044 7.448Zm15.976 1.881a5.95 5.95 0 0 1-3.643 4.685c-.961.4-2.002.52-3.044.4-1-.12-2.002-.44-3.043-1.04-1.441-.801-2.883-2.043-4.564-3.884 2.643-3.244 4.244-6.207 4.845-8.85.28-1.24.32-2.362.2-3.403a6.497 6.497 0 0 0-1.081-2.722c-1.241-1.802-3.324-2.843-5.646-2.843s-4.404 1.08-5.646 2.843c-.56.8-.92 1.721-1.08 2.722a8.315 8.315 0 0 0 .2 3.404c.6 2.642 2.242 5.645 4.845 8.889-1.642 1.841-3.124 3.083-4.565 3.883-1.041.6-2.042.922-3.043 1.041a6.407 6.407 0 0 1-3.043-.4 5.95 5.95 0 0 1-3.644-4.684 6.628 6.628 0 0 1 .36-3.124c.12-.4.32-.8.521-1.28.28-.642.6-1.322.921-2.003l.04-.08a437.736 437.736 0 0 1 8.809-17.978l.12-.24c.32-.6.64-1.241.96-1.842.321-.64.682-1.241 1.122-1.762.84-.96 1.962-1.481 3.203-1.481 1.242 0 2.363.52 3.203 1.481.44.52.801 1.121 1.122 1.762.32.6.64 1.241.96 1.842l.12.24a531.032 531.032 0 0 1 8.77 18.018v.04c.32.64.6 1.361.92 2.002.2.48.4.88.52 1.281.321 1.041.441 2.042.281 3.083Z" fill="#000"/></svg>
  )
}

function Homes() {
  return (
    <svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.143.286h8c3.143 0 6.286 1.428 6.286 5.143 0 2.285-1.429 3.857-3.572 4.428 2.572.286 4.429 2.286 4.429 4.857 0 4.429-3.857 5.857-7.715 5.857h-7.285V.286h-.143Zm3.714 8.285h3.286c2.428 0 3.571-1 3.571-2.571 0-1.714-1.143-2.571-4-2.571h-3V8.57h.143Zm0 9h3.286c1.857 0 4.428-.285 4.428-3 0-2.143-1.428-2.857-4.285-2.857h-3.429v5.857ZM70.143.286H83.57V3.57h-9.857v5H83v3.286h-9.286v5.572h10.572v3.285h-14V.286h-.143Zm23.285 0h3.143l8.714 20.428h-4.142L99.285 16h-8.857l-1.857 4.714h-4L93.43.286ZM98 12.857l-3.143-8.286-3.143 8.286H98Zm7.571 4.571 10.857-13.857h-10.714V.286h15.143V3.57L110 17.428h11.143v3.286h-15.572V17.43ZM122.857.286h13.429V3.57h-9.857v5h9.285v3.286h-9.285v5.572h10.428v3.285h-14V.286Zm16 0H146c3.857 0 7.571 1.285 7.571 5.857 0 3-1.714 5.143-4.714 5.571l5.429 9h-4.429l-4.714-8.571h-2.714v8.571h-3.572V.286ZM145.429 9c2 0 4.428-.143 4.428-2.857 0-2.429-2.286-2.714-4.143-2.714h-3.143v5.57h2.858ZM71.143 27.143h1.428v5.285h6.715v-5.285h1.428v12.571h-1.428v-5.857H72.57v5.857h-1.428V27.143ZM90.285 40c-1 0-1.856-.143-2.57-.429-.858-.285-1.43-.857-2.144-1.428-.571-.572-1-1.286-1.428-2.143a8.095 8.095 0 0 1-.429-2.572c0-1 .143-1.857.429-2.571.285-.857.714-1.571 1.428-2.143.572-.571 1.286-1 2.143-1.428a8.09 8.09 0 0 1 2.571-.43c1 0 1.858.144 2.572.43.857.285 1.428.857 2.143 1.428.571.572 1 1.286 1.428 2.143a8.08 8.08 0 0 1 .429 2.571c0 1-.143 1.858-.429 2.572-.285.857-.714 1.571-1.428 2.143-.572.571-1.286 1-2.143 1.428-.714.286-1.572.429-2.572.429Zm0-1.429c.715 0 1.429-.143 2-.428A6.336 6.336 0 0 0 93.857 37c.428-.429.714-1 1-1.714.286-.572.428-1.286.428-2 0-.715-.142-1.429-.428-2-.286-.572-.572-1.143-1-1.715-.428-.428-1-.857-1.572-1.143-.571-.285-1.285-.428-2-.428-.714 0-1.428.143-2 .428a6.34 6.34 0 0 0-1.57 1.143c-.43.429-.715 1-1 1.715-.287.571-.43 1.285-.43 2 0 .714.144 1.428.43 2 .285.571.57 1.142 1 1.714.428.428 1 .857 1.57 1.143.715.285 1.286.428 2 .428Zm9.572-11.428H102L106.286 37l4.285-9.857h2.286v12.571h-1.428V29.143L107 39.714h-.857l-4.714-10.571v10.571H100V27.143h-.143Zm16.714 0h7.858v1.428H118v4h6V34h-6v4.428h6.714v1.43h-8.143V27.142Zm17.143 2.143c-.285-.429-.571-.715-1-.858-.428-.142-.857-.285-1.285-.285-.286 0-.715 0-1 .143-.286.142-.572.142-.858.428-.285.143-.428.429-.571.714-.143.286-.286.572-.286 1 0 .286 0 .572.143.715.143.285.286.428.429.571.143.143.428.286.857.429.286.143.714.285 1.286.428.428.143 1 .286 1.428.429.429.143.857.428 1.143.714.286.286.571.572.857 1 .143.429.286.857.286 1.572 0 .571-.143 1.142-.429 1.571-.285.429-.571.857-1 1.143-.428.286-.857.571-1.428.714-.429.143-.857.286-1.429.286-.428 0-.714 0-1.143-.143-.428 0-.714-.143-1-.286-.285-.143-.714-.285-1-.571-.285-.286-.571-.429-.714-.857l1.286-1c.285.428.714.857 1.143 1 .428.285 1 .285 1.571.285.286 0 .571 0 1-.142l.857-.429c.286-.143.429-.429.572-.714.142-.286.285-.572.285-1 0-.429 0-.715-.143-1a1.112 1.112 0 0 0-.571-.572 6.962 6.962 0 0 0-1-.428c-.429-.143-.857-.286-1.429-.429l-1.285-.428c-.429-.143-.715-.429-1-.715-.286-.285-.429-.571-.715-1-.285-.143-.428-.571-.428-1.143 0-.571.143-1.142.286-1.571.285-.429.571-.857 1-1.143.428-.286.857-.571 1.428-.714.572-.143 1-.286 1.572-.286.714 0 1.285.143 2 .286.571.285 1.142.571 1.571 1.143l-1.286 1.143ZM13 25.857c11.857-13.143 27.429-13 33.571 4.857 0 .286-1.142.857-1.714 1C28.43 36.43 18.286 30 15.857 29c-.571-.286-4.571 3-6.428 4.143-1.715 1-5-.286-6.43-1-1-.572 2.287-1.857 2.287-1.857 2.143-1 1.285 2 3.714.857L9.143 31c.143 0 .143-.143.285-.143 17.143-14 27.43-4.143 27.715-3.428-12-4.572-18.572 0-18.572 0 7.572 2.57 14.429 4.428 26.714 2.714-11.428-15.715-21.856-9.429-30-4.286-.57.286-2.142 1.429-2.428 1.286-.286-.143-.143-.857.143-1.286Z" fill="#000"/><path d="M44.714 6c-.285-.286-1.285-.714-1.857-.714-16-2.857-21.571 9.571-21.714 13 1.143-.715 2.285-1.143 3.571-1.572v-.142c-.143-1.43 7.143-11.858 18.715-9.858-1.715 2.429-8.858 7.715-10.858 9.143 1.143.143 2.286.429 3.286.857C39 15.286 45 7 44.714 6Z" fill="#000"/><path d="M35.571 9.857c-1.142.143-7.714 4-8.285 5.572v.285c1-.143 2-.285 3-.285 1.285-1.143 5.571-5.572 5.285-5.572ZM16.286 30.428c-.858 1.429-2 1.858-2.572 2.43-.428.57.572.57 2.286.428 1.286 0 1.428.142 1.857 0 .429-.143 0-1 .429-1.715 0-.143.142-.143.142-.285-.857-.429-1.57-.715-2-1 0 .142-.142.142-.142.142Z" fill="#000"/></svg>
  )
}

function Pulte() {
  return (
    <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.214 31.134a4.254 4.254 0 0 0-4.377 4.113c-.009.09-.009.182 0 .273a4.245 4.245 0 0 0 4.047 4.433h.33a4.245 4.245 0 0 0 4.376-4.104v-.33a4.224 4.224 0 0 0-4.056-4.413h-.31l-.01.028Zm.01 7.5a2.823 2.823 0 1 1 .282 0h-.283Zm13.458-7.349-2.372 5.722-2.372-5.722h-2.023v8.565h1.506v-6.353l2.626 6.353h.527l2.616-6.353v6.353h1.515v-8.565h-2.023ZM7.007 34.786H2.414v-3.501H.908v8.565h1.506v-3.737h4.593v3.737h1.496v-8.565H7.007v3.501Zm26.955 5.064h5.864v-1.337h-4.367v-2.362h4.273v-1.327h-4.273v-2.221h4.367v-1.318h-5.864v8.565Zm10.532-6.307c0-.64.565-1.063 1.45-1.063a3.54 3.54 0 0 1 2.474.94l.867-1.12a4.508 4.508 0 0 0-3.229-1.157c-1.882 0-3.124 1.092-3.124 2.504 0 3.162 4.997 2.042 4.997 3.84 0 .564-.49 1.167-1.722 1.167a3.774 3.774 0 0 1-2.71-1.176l-.829 1.148a4.535 4.535 0 0 0 3.473 1.364c2.315 0 3.313-1.223 3.313-2.644 0-3.2-4.979-2.212-4.979-3.765M13.416 19.04a5.13 5.13 0 0 0-4.931-5.3H.88v16.443h3.492V24.32h3.51a5.13 5.13 0 0 0 5.497-4.791c.01-.176.01-.352 0-.527l.037.038Zm-5.948 2.21H4.4v-4.433h3.068a2.22 2.22 0 1 1 .292 4.433c-.097.01-.195.01-.292 0Zm14.447-3.528v8.273a3.708 3.708 0 0 1-2.541 1.629c-1.242 0-1.882-.688-1.882-2.146v-7.756H14.32v8.669c0 2.447 1.374 4.084 3.868 4.084a5.647 5.647 0 0 0 3.765-1.327v1.036h3.228V17.722h-3.266Zm27.078 1.722a5.542 5.542 0 0 0-4.292-1.882 6.148 6.148 0 0 0-6.117 6.184v.273a6.122 6.122 0 0 0 1.538 4.43 6.128 6.128 0 0 0 4.222 2.045h.555a7.096 7.096 0 0 0 4.922-1.704l-1.412-2.155v.047a4.838 4.838 0 0 1-3.105 1.195 3.153 3.153 0 0 1-3.342-2.7h8.725v-.754a7.36 7.36 0 0 0-1.638-4.903l-.056-.076Zm-1.384 3.464h-5.75a2.823 2.823 0 0 1 2.823-2.626 2.748 2.748 0 0 1 2.824 2.626m-20.01-9.977v17.261h3.21V11.425l-3.21 1.506Z" fill="#000"/><path d="M38.132 27.313c-.305.2-.661.309-1.026.31-.63 0-1.045-.498-1.045-1.26v-5.826h2.287v-2.824h-2.287v-3.765l-3.181-1.477V27.2c0 2.117 1.205 3.274 3.398 3.274a3.971 3.971 0 0 0 2.588-.734l-.734-2.428Z" fill="#000"/><path d="M41.962 11.717v-3.52h-3.21v2.014l-8.047-3.764-16.395 7.67v2.598l16.395-7.67 18.909 8.865v-2.598l-7.652-3.595Z" fill="#000"/><path d="m30.715 6.447 8.028 3.765V8.236h3.21v3.51l4.498 2.137v-.189a13.628 13.628 0 0 0-27.124-1.882l9.298-4.339 2.09-1.026Zm19.26 4.369-.315.885h-.116l-.315-.883v.883h-.202v-1.207h.252l.323.897.324-.897h.252v1.207h-.203v-.885Zm-1.126-.14h-.33v1.025h-.205v-1.025h-.332v-.182h.867v.182Z" fill="#000"/></svg>
  )
}


export default Brand