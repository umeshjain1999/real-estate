import React from 'react'

function Icon(props) {
  const {icon,iconClassName = ''} = props;
  let svgEelement = <svg></svg>

  switch (icon) {
    case 'call':
      svgEelement = <svg className = {iconClassName} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 15.5c-1.82 0-3.58-.396-5.281-1.188a15.693 15.693 0 0 1-4.521-3.156 15.694 15.694 0 0 1-3.156-4.521A12.379 12.379 0 0 1 .5 1.354.81.81 0 0 1 .76.75.86.86 0 0 1 1.375.5h3.458a.76.76 0 0 1 .511.188.75.75 0 0 1 .26.479l.584 2.979c.027.18.02.347-.021.5a.885.885 0 0 1-.229.396L3.917 7.104c.527.945 1.225 1.854 2.093 2.729a14.582 14.582 0 0 0 2.865 2.25l1.958-2c.14-.139.292-.232.459-.281.167-.049.347-.059.541-.031l3 .625a.751.751 0 0 1 .479.26.76.76 0 0 1 .188.511v3.458a.86.86 0 0 1-.25.615.807.807 0 0 1-.604.26ZM3.083 5.438l1.313-1.313-.354-1.875h-1.75c.07.555.163 1.094.281 1.615.118.52.288 1.045.51 1.573Zm10.667 8.27v-1.75l-1.917-.396-1.312 1.355c.541.208 1.076.375 1.604.5s1.07.222 1.625.291Z" fill="#fff"/></svg>    
      break;
    case 'loginUser':
      svgEelement = <svg className = {iconClassName} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.917 13.167a7.397 7.397 0 0 1 2.364-1.313A8.489 8.489 0 0 1 9 11.417c.945 0 1.851.146 2.719.437a7.65 7.65 0 0 1 2.385 1.313 6.89 6.89 0 0 0 1.084-1.907A6.378 6.378 0 0 0 15.583 9c0-1.833-.639-3.389-1.916-4.667C12.389 3.056 10.833 2.417 9 2.417c-1.833 0-3.389.639-4.667 1.916C3.056 5.611 2.417 7.167 2.417 9c0 .805.135 1.559.406 2.26.27.701.635 1.337 1.094 1.907ZM9 9.854c-.82 0-1.51-.281-2.073-.844-.563-.562-.844-1.253-.844-2.072 0-.82.281-1.511.844-2.073.563-.563 1.254-.844 2.073-.844.82 0 1.51.281 2.073.844.563.562.844 1.253.844 2.073 0 .82-.281 1.51-.844 2.072-.563.563-1.254.844-2.073.844Zm0 7.479a8.119 8.119 0 0 1-3.25-.656 8.41 8.41 0 0 1-2.646-1.781 8.412 8.412 0 0 1-1.781-2.646A8.118 8.118 0 0 1 .667 9c0-1.153.219-2.236.656-3.25a8.412 8.412 0 0 1 1.781-2.646A8.412 8.412 0 0 1 5.75 1.323 8.118 8.118 0 0 1 9 .667c1.153 0 2.236.219 3.25.656a8.412 8.412 0 0 1 2.646 1.781 8.41 8.41 0 0 1 1.781 2.646A8.119 8.119 0 0 1 17.333 9a8.119 8.119 0 0 1-.656 3.25 8.41 8.41 0 0 1-1.781 2.646 8.41 8.41 0 0 1-2.646 1.781 8.119 8.119 0 0 1-3.25.656Zm.021-1.75c.68 0 1.347-.104 2-.312a6.094 6.094 0 0 0 1.771-.896 5.38 5.38 0 0 0-1.75-.906A6.895 6.895 0 0 0 9 13.167c-.708 0-1.385.1-2.031.302a5.653 5.653 0 0 0-1.761.906 6.065 6.065 0 0 0 1.782.896c.66.208 1.336.312 2.031.312ZM9 8.104c.347 0 .629-.108.844-.323.215-.215.323-.496.323-.843s-.108-.629-.323-.844c-.215-.215-.497-.323-.844-.323s-.629.108-.844.323c-.215.215-.323.497-.323.844s.108.628.323.843c.215.215.497.323.844.323Z" fill="#000"/></svg>
      break;
    case 'partnersThumbsUp':
      svgEelement = <svg className = {iconClassName} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{"maskType": "alpha"}} maskUnits="userSpaceOnUse" x="21" y="21" width="99" height="99"><path fill="#D9D9D9" d="M21 21h98.45v98.445H21z"/></mask><g mask="url(#a)"><path d="M91.965 101.807H51.97v-42.66l24.817-24.406.82.82c.343.342.634.769.874 1.28.238.514.357.977.357 1.387v.41l-4.102 20.51h29.125c1.572 0 2.992.631 4.258 1.894 1.263 1.267 1.895 2.686 1.895 4.258v4.102c0 .342-.034.718-.102 1.128-.069.41-.171.786-.308 1.128L98.734 97.5c-.547 1.23-1.47 2.256-2.77 3.076-1.299.821-2.632 1.231-3.999 1.231Zm-37.124-2.871h37.124c.752 0 1.522-.206 2.31-.616.784-.41 1.382-1.094 1.792-2.05l11.076-26.048V65.3c0-.957-.308-1.743-.923-2.358-.616-.616-1.402-.923-2.359-.923H71.25l4.512-22.355-20.92 20.714v38.558Zm0-38.558v38.558-38.558Zm-2.871-1.23v2.87H37.408v36.918H51.97v2.871H34.536v-42.66H51.97Z" fill="#19E09C"/></g></svg>
      break;
    case 'partners247services':
      svgEelement = <svg className = {iconClassName} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="18" y="18" width="106" height="106"><path fill="#D9D9D9" d="M18 18h106v106H18z"/></mask><g mask="url(#a)"><path d="M53.555 96.838H65.48v-3.092h-8.833v-5.742h8.833V76.08H53.555v3.092h8.833v5.741h-8.833v11.925Zm31.8 0h3.092V76.079h-3.092v8.834h-5.742v-8.834h-3.091v11.925h8.833v8.834ZM107.88 65.92v35.333c0 1.914-.626 3.497-1.877 4.748-1.252 1.251-2.834 1.877-4.748 1.877H40.747c-1.914 0-3.497-.626-4.748-1.877-1.252-1.251-1.877-2.834-1.877-4.748V65.7a11.17 11.17 0 0 1-4.139-5.243c-.848-2.173-.867-4.474-.057-6.903l4.196-13.912c.589-1.767 1.509-3.129 2.76-4.086 1.251-.957 2.834-1.435 4.748-1.435h58.521c1.914 0 3.496.441 4.748 1.325 1.251.883 2.171 2.208 2.76 3.975l4.417 14.133c.809 2.43.792 4.766-.053 7.01-.848 2.246-2.229 4.032-4.143 5.357Zm-27.162-.884c3.091 0 5.392-.828 6.903-2.486 1.507-1.655 2.15-3.329 1.93-5.022l-3.092-20.317H72.547v19.213c0 2.356.81 4.38 2.429 6.073 1.62 1.693 3.533 2.54 5.742 2.54Zm-19.876 0c2.577 0 4.657-.846 6.241-2.54 1.581-1.692 2.372-3.716 2.372-6.072V37.213H55.542L52.451 57.97c-.147 1.251.515 2.741 1.987 4.47 1.472 1.73 3.607 2.596 6.404 2.596Zm-19.654 0c2.135 0 3.938-.718 5.41-2.155 1.473-1.434 2.393-3.218 2.761-5.353l2.871-20.317h-10.6c-1.251 0-2.245.276-2.981.826-.736.554-1.288 1.383-1.657 2.487l-3.974 13.692c-.81 2.576-.479 5.023.993 7.34 1.472 2.32 3.865 3.48 7.177 3.48Zm59.625 0c2.798 0 5.079-1.086 6.846-3.259 1.767-2.17 2.208-4.69 1.325-7.561l-4.196-13.913c-.368-1.104-.92-1.896-1.656-2.376-.736-.477-1.73-.715-2.981-.715h-10.38l2.871 20.316c.368 2.135 1.289 3.92 2.76 5.353 1.473 1.437 3.277 2.155 5.411 2.155Zm-60.066 39.751h60.508c1.031 0 1.877-.332 2.54-.994.662-.663.993-1.509.993-2.54V67.467c-.662.22-1.325.385-1.987.494a11.93 11.93 0 0 1-1.988.168c-1.987 0-3.736-.405-5.247-1.214-1.507-.81-2.924-2.098-4.249-3.865-1.104 1.472-2.502 2.687-4.195 3.644-1.693.957-3.828 1.435-6.404 1.435-1.694 0-3.313-.424-4.859-1.272-1.546-.845-3.165-2.114-4.858-3.807-1.546 1.693-3.24 2.962-5.08 3.807-1.84.848-3.533 1.272-5.079 1.272-1.766 0-3.533-.349-5.3-1.047-1.766-.7-3.312-2.044-4.637-4.032-2.356 2.356-4.36 3.791-6.016 4.306-1.657.516-2.891.773-3.7.773a11.9 11.9 0 0 1-1.988-.168 12.908 12.908 0 0 1-1.988-.494v33.787c0 1.031.331 1.877.994 2.54.663.662 1.51.994 2.54.994Zm60.508 0H40.747h60.508Z" fill="#19E09C"/></g></svg>
      break;
    case 'partnersCurrency':
      svgEelement = <svg className = {iconClassName} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="18" y="19" width="105" height="104"><path fill="#D9D9D9" d="M18 19h104.003v104H18z"/></mask><g mask="url(#a)"><path d="M70.001 113.033c-9.028 0-17.062-2.491-24.103-7.475-7.043-4.983-12.19-11.7-15.44-20.15v15.059h-3.033V80.1h20.367v3.034H32.95c2.6 8.088 7.33 14.588 14.192 19.499C54.003 107.545 61.623 110 70.001 110c5.128 0 9.95-.903 14.465-2.708 4.513-1.806 8.502-4.316 11.97-7.532 3.466-3.212 6.3-7.04 8.501-11.483 2.205-4.44 3.523-9.26 3.957-14.46h3.033c-.361 5.489-1.714 10.617-4.06 15.383-2.349 4.767-5.382 8.92-9.1 12.458-3.721 3.539-8.055 6.32-13 8.342-4.95 2.022-10.205 3.033-15.766 3.033Zm-1.733-13.866v-5.2c-2.817-.65-5.254-1.733-7.31-3.25-2.06-1.517-3.74-3.683-5.04-6.5l2.816-1.3c1.3 2.6 2.978 4.622 5.035 6.067 2.06 1.444 4.354 2.166 6.882 2.166 2.6 0 5.092-.705 7.475-2.115 2.384-1.406 3.575-3.735 3.575-6.985 0-2.528-.775-4.495-2.327-5.902-1.554-1.41-4.678-2.981-9.373-4.715-4.767-1.733-8.125-3.502-10.075-5.308C57.976 64.32 57 61.9 57 58.867c0-2.528.975-4.875 2.925-7.042 1.95-2.167 4.803-3.503 8.558-4.008v-4.983h3.25v4.983c2.167.144 4.207.848 6.12 2.11 1.915 1.266 3.414 2.873 4.497 4.823l-2.816 1.084a12.92 12.92 0 0 0-3.792-3.74c-1.517-.974-3.359-1.46-5.525-1.46-2.962 0-5.364.794-7.207 2.383-1.84 1.589-2.76 3.539-2.76 5.85 0 2.31.614 4.08 1.841 5.308 1.228 1.228 4.298 2.709 9.209 4.442 5.2 1.878 8.74 3.828 10.617 5.85 1.878 2.022 2.817 4.55 2.817 7.583 0 2.022-.415 3.792-1.244 5.309-.832 1.516-1.898 2.763-3.198 3.74a14.668 14.668 0 0 1-4.277 2.218c-1.555.505-3.054.794-4.498.867v4.983h-3.25ZM28.075 68.183c.505-5.85 1.967-11.177 4.385-15.98 2.421-4.802 5.528-8.936 9.322-12.403 3.79-3.466 8.105-6.139 12.944-8.016 4.839-1.878 9.93-2.817 15.275-2.817 8.811 0 16.846 2.509 24.103 7.527 7.26 5.02 12.406 11.864 15.44 20.531V41.533h3.033V61.9H92.21v-3.033h14.842c-2.383-7.8-7.023-14.228-13.92-19.283C86.235 34.528 78.524 32 70.002 32c-4.839 0-9.498.867-13.975 2.6-4.478 1.733-8.487 4.17-12.026 7.31-3.539 3.144-6.464 6.935-8.775 11.376-2.311 4.443-3.683 9.409-4.117 14.897h-3.033Z" fill="#19E09C"/></g></svg>
      break;
    case 'partnersIndustry':
      svgEelement = <svg className = {iconClassName} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="24" y="24" width="93" height="93"><path fill="#D9D9D9" d="M24 24h93v93H24z"/></mask><g mask="url(#a)"><path d="M50.931 89.875V57.712h2.713v32.163H50.93Zm18.213 0V57.712h2.712v32.163h-2.712ZM39.5 100.337v-2.712h62v2.712h-62Zm47.856-10.462V57.712h2.713v32.163h-2.713ZM39.5 49.962v-1.937l31-14.531 31 14.53v1.938h-62Zm8.138-2.712h45.724L70.5 36.594 47.638 47.25Z" fill="#19E09C"/></g></svg>
      break;
    default:
      svgEelement = <svg></svg>
      break;
  }
  return (
    <>{svgEelement}</>
  )
}

export default Icon;