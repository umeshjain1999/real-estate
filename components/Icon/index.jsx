import React from 'react'

function Icon(props) {
  const {icon,className = ''} = props;
  let svgEelement = <svg></svg>

  switch (icon) {
    case 'call':
      svgEelement = <svg className = {className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.646 15.5c-1.82 0-3.58-.396-5.281-1.188a15.693 15.693 0 0 1-4.521-3.156 15.694 15.694 0 0 1-3.156-4.521A12.379 12.379 0 0 1 .5 1.354.81.81 0 0 1 .76.75.86.86 0 0 1 1.375.5h3.458a.76.76 0 0 1 .511.188.75.75 0 0 1 .26.479l.584 2.979c.027.18.02.347-.021.5a.885.885 0 0 1-.229.396L3.917 7.104c.527.945 1.225 1.854 2.093 2.729a14.582 14.582 0 0 0 2.865 2.25l1.958-2c.14-.139.292-.232.459-.281.167-.049.347-.059.541-.031l3 .625a.751.751 0 0 1 .479.26.76.76 0 0 1 .188.511v3.458a.86.86 0 0 1-.25.615.807.807 0 0 1-.604.26ZM3.083 5.438l1.313-1.313-.354-1.875h-1.75c.07.555.163 1.094.281 1.615.118.52.288 1.045.51 1.573Zm10.667 8.27v-1.75l-1.917-.396-1.312 1.355c.541.208 1.076.375 1.604.5s1.07.222 1.625.291Z" fill="#fff"/></svg>    
      break;
    case 'loginUser':
      svgEelement = <svg className = {className} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.917 13.167a7.397 7.397 0 0 1 2.364-1.313A8.489 8.489 0 0 1 9 11.417c.945 0 1.851.146 2.719.437a7.65 7.65 0 0 1 2.385 1.313 6.89 6.89 0 0 0 1.084-1.907A6.378 6.378 0 0 0 15.583 9c0-1.833-.639-3.389-1.916-4.667C12.389 3.056 10.833 2.417 9 2.417c-1.833 0-3.389.639-4.667 1.916C3.056 5.611 2.417 7.167 2.417 9c0 .805.135 1.559.406 2.26.27.701.635 1.337 1.094 1.907ZM9 9.854c-.82 0-1.51-.281-2.073-.844-.563-.562-.844-1.253-.844-2.072 0-.82.281-1.511.844-2.073.563-.563 1.254-.844 2.073-.844.82 0 1.51.281 2.073.844.563.562.844 1.253.844 2.073 0 .82-.281 1.51-.844 2.072-.563.563-1.254.844-2.073.844Zm0 7.479a8.119 8.119 0 0 1-3.25-.656 8.41 8.41 0 0 1-2.646-1.781 8.412 8.412 0 0 1-1.781-2.646A8.118 8.118 0 0 1 .667 9c0-1.153.219-2.236.656-3.25a8.412 8.412 0 0 1 1.781-2.646A8.412 8.412 0 0 1 5.75 1.323 8.118 8.118 0 0 1 9 .667c1.153 0 2.236.219 3.25.656a8.412 8.412 0 0 1 2.646 1.781 8.41 8.41 0 0 1 1.781 2.646A8.119 8.119 0 0 1 17.333 9a8.119 8.119 0 0 1-.656 3.25 8.41 8.41 0 0 1-1.781 2.646 8.41 8.41 0 0 1-2.646 1.781 8.119 8.119 0 0 1-3.25.656Zm.021-1.75c.68 0 1.347-.104 2-.312a6.094 6.094 0 0 0 1.771-.896 5.38 5.38 0 0 0-1.75-.906A6.895 6.895 0 0 0 9 13.167c-.708 0-1.385.1-2.031.302a5.653 5.653 0 0 0-1.761.906 6.065 6.065 0 0 0 1.782.896c.66.208 1.336.312 2.031.312ZM9 8.104c.347 0 .629-.108.844-.323.215-.215.323-.496.323-.843s-.108-.629-.323-.844c-.215-.215-.497-.323-.844-.323s-.629.108-.844.323c-.215.215-.323.497-.323.844s.108.628.323.843c.215.215.497.323.844.323Z" fill="#000"/></svg>
      break;
    case 'partnersThumbsUp':
      svgEelement = <svg className = {className} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{"maskType": "alpha"}} maskUnits="userSpaceOnUse" x="21" y="21" width="99" height="99"><path fill="#D9D9D9" d="M21 21h98.45v98.445H21z"/></mask><g mask="url(#a)"><path d="M91.965 101.807H51.97v-42.66l24.817-24.406.82.82c.343.342.634.769.874 1.28.238.514.357.977.357 1.387v.41l-4.102 20.51h29.125c1.572 0 2.992.631 4.258 1.894 1.263 1.267 1.895 2.686 1.895 4.258v4.102c0 .342-.034.718-.102 1.128-.069.41-.171.786-.308 1.128L98.734 97.5c-.547 1.23-1.47 2.256-2.77 3.076-1.299.821-2.632 1.231-3.999 1.231Zm-37.124-2.871h37.124c.752 0 1.522-.206 2.31-.616.784-.41 1.382-1.094 1.792-2.05l11.076-26.048V65.3c0-.957-.308-1.743-.923-2.358-.616-.616-1.402-.923-2.359-.923H71.25l4.512-22.355-20.92 20.714v38.558Zm0-38.558v38.558-38.558Zm-2.871-1.23v2.87H37.408v36.918H51.97v2.871H34.536v-42.66H51.97Z" fill="#19E09C"/></g></svg>
      break;
    case 'partners247services':
      svgEelement = <svg className = {className} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="18" y="18" width="106" height="106"><path fill="#D9D9D9" d="M18 18h106v106H18z"/></mask><g mask="url(#a)"><path d="M53.555 96.838H65.48v-3.092h-8.833v-5.742h8.833V76.08H53.555v3.092h8.833v5.741h-8.833v11.925Zm31.8 0h3.092V76.079h-3.092v8.834h-5.742v-8.834h-3.091v11.925h8.833v8.834ZM107.88 65.92v35.333c0 1.914-.626 3.497-1.877 4.748-1.252 1.251-2.834 1.877-4.748 1.877H40.747c-1.914 0-3.497-.626-4.748-1.877-1.252-1.251-1.877-2.834-1.877-4.748V65.7a11.17 11.17 0 0 1-4.139-5.243c-.848-2.173-.867-4.474-.057-6.903l4.196-13.912c.589-1.767 1.509-3.129 2.76-4.086 1.251-.957 2.834-1.435 4.748-1.435h58.521c1.914 0 3.496.441 4.748 1.325 1.251.883 2.171 2.208 2.76 3.975l4.417 14.133c.809 2.43.792 4.766-.053 7.01-.848 2.246-2.229 4.032-4.143 5.357Zm-27.162-.884c3.091 0 5.392-.828 6.903-2.486 1.507-1.655 2.15-3.329 1.93-5.022l-3.092-20.317H72.547v19.213c0 2.356.81 4.38 2.429 6.073 1.62 1.693 3.533 2.54 5.742 2.54Zm-19.876 0c2.577 0 4.657-.846 6.241-2.54 1.581-1.692 2.372-3.716 2.372-6.072V37.213H55.542L52.451 57.97c-.147 1.251.515 2.741 1.987 4.47 1.472 1.73 3.607 2.596 6.404 2.596Zm-19.654 0c2.135 0 3.938-.718 5.41-2.155 1.473-1.434 2.393-3.218 2.761-5.353l2.871-20.317h-10.6c-1.251 0-2.245.276-2.981.826-.736.554-1.288 1.383-1.657 2.487l-3.974 13.692c-.81 2.576-.479 5.023.993 7.34 1.472 2.32 3.865 3.48 7.177 3.48Zm59.625 0c2.798 0 5.079-1.086 6.846-3.259 1.767-2.17 2.208-4.69 1.325-7.561l-4.196-13.913c-.368-1.104-.92-1.896-1.656-2.376-.736-.477-1.73-.715-2.981-.715h-10.38l2.871 20.316c.368 2.135 1.289 3.92 2.76 5.353 1.473 1.437 3.277 2.155 5.411 2.155Zm-60.066 39.751h60.508c1.031 0 1.877-.332 2.54-.994.662-.663.993-1.509.993-2.54V67.467c-.662.22-1.325.385-1.987.494a11.93 11.93 0 0 1-1.988.168c-1.987 0-3.736-.405-5.247-1.214-1.507-.81-2.924-2.098-4.249-3.865-1.104 1.472-2.502 2.687-4.195 3.644-1.693.957-3.828 1.435-6.404 1.435-1.694 0-3.313-.424-4.859-1.272-1.546-.845-3.165-2.114-4.858-3.807-1.546 1.693-3.24 2.962-5.08 3.807-1.84.848-3.533 1.272-5.079 1.272-1.766 0-3.533-.349-5.3-1.047-1.766-.7-3.312-2.044-4.637-4.032-2.356 2.356-4.36 3.791-6.016 4.306-1.657.516-2.891.773-3.7.773a11.9 11.9 0 0 1-1.988-.168 12.908 12.908 0 0 1-1.988-.494v33.787c0 1.031.331 1.877.994 2.54.663.662 1.51.994 2.54.994Zm60.508 0H40.747h60.508Z" fill="#19E09C"/></g></svg>
      break;
    case 'partnersCurrency':
      svgEelement = <svg className = {className} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="18" y="19" width="105" height="104"><path fill="#D9D9D9" d="M18 19h104.003v104H18z"/></mask><g mask="url(#a)"><path d="M70.001 113.033c-9.028 0-17.062-2.491-24.103-7.475-7.043-4.983-12.19-11.7-15.44-20.15v15.059h-3.033V80.1h20.367v3.034H32.95c2.6 8.088 7.33 14.588 14.192 19.499C54.003 107.545 61.623 110 70.001 110c5.128 0 9.95-.903 14.465-2.708 4.513-1.806 8.502-4.316 11.97-7.532 3.466-3.212 6.3-7.04 8.501-11.483 2.205-4.44 3.523-9.26 3.957-14.46h3.033c-.361 5.489-1.714 10.617-4.06 15.383-2.349 4.767-5.382 8.92-9.1 12.458-3.721 3.539-8.055 6.32-13 8.342-4.95 2.022-10.205 3.033-15.766 3.033Zm-1.733-13.866v-5.2c-2.817-.65-5.254-1.733-7.31-3.25-2.06-1.517-3.74-3.683-5.04-6.5l2.816-1.3c1.3 2.6 2.978 4.622 5.035 6.067 2.06 1.444 4.354 2.166 6.882 2.166 2.6 0 5.092-.705 7.475-2.115 2.384-1.406 3.575-3.735 3.575-6.985 0-2.528-.775-4.495-2.327-5.902-1.554-1.41-4.678-2.981-9.373-4.715-4.767-1.733-8.125-3.502-10.075-5.308C57.976 64.32 57 61.9 57 58.867c0-2.528.975-4.875 2.925-7.042 1.95-2.167 4.803-3.503 8.558-4.008v-4.983h3.25v4.983c2.167.144 4.207.848 6.12 2.11 1.915 1.266 3.414 2.873 4.497 4.823l-2.816 1.084a12.92 12.92 0 0 0-3.792-3.74c-1.517-.974-3.359-1.46-5.525-1.46-2.962 0-5.364.794-7.207 2.383-1.84 1.589-2.76 3.539-2.76 5.85 0 2.31.614 4.08 1.841 5.308 1.228 1.228 4.298 2.709 9.209 4.442 5.2 1.878 8.74 3.828 10.617 5.85 1.878 2.022 2.817 4.55 2.817 7.583 0 2.022-.415 3.792-1.244 5.309-.832 1.516-1.898 2.763-3.198 3.74a14.668 14.668 0 0 1-4.277 2.218c-1.555.505-3.054.794-4.498.867v4.983h-3.25ZM28.075 68.183c.505-5.85 1.967-11.177 4.385-15.98 2.421-4.802 5.528-8.936 9.322-12.403 3.79-3.466 8.105-6.139 12.944-8.016 4.839-1.878 9.93-2.817 15.275-2.817 8.811 0 16.846 2.509 24.103 7.527 7.26 5.02 12.406 11.864 15.44 20.531V41.533h3.033V61.9H92.21v-3.033h14.842c-2.383-7.8-7.023-14.228-13.92-19.283C86.235 34.528 78.524 32 70.002 32c-4.839 0-9.498.867-13.975 2.6-4.478 1.733-8.487 4.17-12.026 7.31-3.539 3.144-6.464 6.935-8.775 11.376-2.311 4.443-3.683 9.409-4.117 14.897h-3.033Z" fill="#19E09C"/></g></svg>
      break;
    case 'partnersIndustry':
      svgEelement = <svg className = {className} width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="70.5" cy="70.5" r="69" stroke="#19E09C" strokeWidth="3"/><mask id="a" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="24" y="24" width="93" height="93"><path fill="#D9D9D9" d="M24 24h93v93H24z"/></mask><g mask="url(#a)"><path d="M50.931 89.875V57.712h2.713v32.163H50.93Zm18.213 0V57.712h2.712v32.163h-2.712ZM39.5 100.337v-2.712h62v2.712h-62Zm47.856-10.462V57.712h2.713v32.163h-2.713ZM39.5 49.962v-1.937l31-14.531 31 14.53v1.938h-62Zm8.138-2.712h45.724L70.5 36.594 47.638 47.25Z" fill="#19E09C"/></g></svg>
      break;
    case 'projectBed':
      svgEelement = <svg className = {className} width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14.25v-6c0-.45.092-.858.275-1.225A3.46 3.46 0 0 1 1 6.05v-2.8c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 4 .25h4c.383 0 .742.071 1.075.213.333.141.642.337.925.587.283-.25.592-.446.925-.587A2.714 2.714 0 0 1 12 .25h4c.833 0 1.542.292 2.125.875S19 2.417 19 3.25v2.8c.3.283.542.608.725.975.183.367.275.775.275 1.225v6h-2v-2H2v2H0Zm11-9h6v-2a.968.968 0 0 0-.288-.713A.967.967 0 0 0 16 2.25h-4a.967.967 0 0 0-.712.287.968.968 0 0 0-.288.713v2Zm-8 0h6v-2a.97.97 0 0 0-.287-.713A.97.97 0 0 0 8 2.25H4a.97.97 0 0 0-.713.287A.97.97 0 0 0 3 3.25v2Zm-1 5h16v-2a.968.968 0 0 0-.288-.713A.967.967 0 0 0 17 7.25H3a.97.97 0 0 0-.713.287A.97.97 0 0 0 2 8.25v2Zm16 0H2h16Z" fill="#E8E8E8"/></svg>
      break;
    case 'projectShower':
      svgEelement = <svg className={className} width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 15.25a.968.968 0 0 1-.713-.288A.967.967 0 0 1 2 14.25a.97.97 0 0 1 .287-.712A.968.968 0 0 1 3 13.25c.283 0 .521.096.713.288A.967.967 0 0 1 4 14.25a.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288Zm4 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 6 14.25c0-.283.096-.52.288-.712A.965.965 0 0 1 7 13.25c.283 0 .521.096.713.288A.967.967 0 0 1 8 14.25a.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288Zm4 0a.965.965 0 0 1-.712-.288.965.965 0 0 1-.288-.712c0-.283.096-.52.288-.712A.965.965 0 0 1 11 13.25c.283 0 .52.096.712.288a.965.965 0 0 1 .288.712c0 .283-.096.52-.288.712a.965.965 0 0 1-.712.288Zm-11-4v-2c0-1.767.567-3.3 1.7-4.6 1.133-1.3 2.567-2.067 4.3-2.3V.25h2v2.1c1.733.233 3.167 1 4.3 2.3 1.133 1.3 1.7 2.833 1.7 4.6v2H0Zm2-2h10c0-1.383-.487-2.563-1.462-3.538C9.563 4.737 8.383 4.25 7 4.25s-2.562.487-3.537 1.462C2.488 6.687 2 7.867 2 9.25Zm1 9a.968.968 0 0 1-.713-.288A.967.967 0 0 1 2 17.25a.97.97 0 0 1 .287-.712A.968.968 0 0 1 3 16.25c.283 0 .521.096.713.288A.967.967 0 0 1 4 17.25a.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288Zm4 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 6 17.25c0-.283.096-.52.288-.712A.965.965 0 0 1 7 16.25c.283 0 .521.096.713.288A.967.967 0 0 1 8 17.25a.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288Zm4 0a.965.965 0 0 1-.712-.288.965.965 0 0 1-.288-.712c0-.283.096-.52.288-.712A.965.965 0 0 1 11 16.25c.283 0 .52.096.712.288a.965.965 0 0 1 .288.712c0 .283-.096.52-.288.712a.965.965 0 0 1-.712.288Z" fill="#E8E8E8"/></svg>
      break;
    case 'projectCar':
      svgEelement = <svg className={className} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 14.25v1a.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H1a.965.965 0 0 1-.712-.288A.965.965 0 0 1 0 15.25v-8l2.1-6c.1-.3.28-.542.538-.725C2.896.342 3.183.25 3.5.25h11c.317 0 .604.092.863.275.258.183.437.425.537.725l2.1 6v8c0 .283-.096.52-.288.712a.965.965 0 0 1-.712.288h-1a.965.965 0 0 1-.712-.288.965.965 0 0 1-.288-.712v-1H3Zm-.2-9h12.4l-1.05-3H3.85l-1.05 3Zm1.7 6c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 4.5 8.25c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 3 9.75c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Zm9 0c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 13.5 8.25c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 12 9.75c0 .417.146.77.438 1.062.291.292.645.438 1.062.438Zm-11.5 1h14v-5H2v5Z" fill="#E8E8E8"/></svg>
      break;
    case 'projectArea':
      svgEelement = <svg className={className} width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.833c-1.268 0-2.349-.447-3.242-1.34-.894-.894-1.341-1.975-1.341-3.243 0-1.268.447-2.35 1.34-3.243.894-.894 1.975-1.34 3.243-1.34 1.268 0 2.35.446 3.243 1.34.894.894 1.34 1.975 1.34 3.243 0 1.268-.446 2.349-1.34 3.242-.894.894-1.975 1.341-3.243 1.341ZM.75 5.5V1.833c0-.504.18-.936.538-1.295C1.648.18 2.08 0 2.583 0H6.25v1.833H2.583V5.5H.75Zm5.5 11H2.583a1.77 1.77 0 0 1-1.295-.538 1.768 1.768 0 0 1-.538-1.295V11h1.833v3.667H6.25V16.5Zm5.5 0v-1.833h3.667V11h1.833v3.667c0 .504-.18.936-.538 1.295-.36.359-.791.538-1.295.538H11.75Zm3.667-11V1.833H11.75V0h3.667c.504 0 .936.18 1.295.538.359.36.538.791.538 1.295V5.5h-1.833ZM9 11c.764 0 1.413-.267 1.948-.802a2.652 2.652 0 0 0 .802-1.948c0-.764-.267-1.413-.802-1.948A2.652 2.652 0 0 0 9 5.5c-.764 0-1.413.267-1.948.802A2.652 2.652 0 0 0 6.25 8.25c0 .764.267 1.413.802 1.948A2.652 2.652 0 0 0 9 11Z" fill="#9C19E0"/></svg>
      break;
    case 'projectFav':
      svgEelement = <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10 19.25-1.45-1.3c-2.617-2.333-4.696-4.363-6.238-6.088C.771 10.137 0 8.317 0 6.4c0-1.567.525-2.875 1.575-3.925C2.625 1.425 3.933.9 5.5.9c.883 0 1.717.187 2.5.562A5.96 5.96 0 0 1 10 3a5.962 5.962 0 0 1 2-1.538A5.721 5.721 0 0 1 14.5.9c1.567 0 2.875.525 3.925 1.575C19.475 3.525 20 4.833 20 6.4c0 1.917-.77 3.737-2.312 5.462-1.542 1.725-3.621 3.755-6.238 6.088L10 19.25Zm0-2.7c2.383-2.167 4.313-4.033 5.788-5.6C17.263 9.383 18 7.867 18 6.4c0-1-.333-1.833-1-2.5s-1.5-1-2.5-1c-.783 0-1.508.22-2.175.662-.667.442-1.125 1.005-1.375 1.688h-1.9c-.25-.683-.708-1.246-1.375-1.688A3.862 3.862 0 0 0 5.5 2.9c-1 0-1.833.333-2.5 1S2 5.4 2 6.4c0 1.467.738 2.983 2.213 4.55 1.475 1.567 3.404 3.433 5.787 5.6Z" fill="#9C19E0" fillOpacity=".3"/></svg>
      break;
    case 'projectSaved' :
      svgEelement = <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" fill="#FF1E36"/></svg>
      break;
      case 'projectDirection':
      svgEelement = <svg className={className} width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12.208c1.333-1.083 2.347-2.139 3.042-3.166.694-1.028 1.041-1.986 1.041-2.875 0-.778-.139-1.438-.416-1.979-.278-.542-.622-.98-1.032-1.313a4.063 4.063 0 0 0-1.323-.729A4.284 4.284 0 0 0 6 1.917c-.389 0-.823.076-1.302.229-.48.153-.924.396-1.333.729-.41.333-.754.771-1.032 1.313-.277.541-.416 1.201-.416 1.979 0 .889.347 1.847 1.041 2.875.695 1.027 1.709 2.083 3.042 3.166Zm0 2.209c-1.972-1.459-3.437-2.868-4.396-4.229C.646 8.827.167 7.486.167 6.167c0-.986.174-1.854.521-2.605a5.63 5.63 0 0 1 1.364-1.874A5.907 5.907 0 0 1 3.938.552 5.914 5.914 0 0 1 6 .167c.695 0 1.386.128 2.073.385a5.937 5.937 0 0 1 1.875 1.136 5.63 5.63 0 0 1 1.364 1.874c.347.75.521 1.619.521 2.605 0 1.32-.479 2.66-1.437 4.021-.959 1.36-2.424 2.77-4.396 4.229ZM6 7.75c.472 0 .875-.167 1.208-.5.333-.333.5-.736.5-1.208 0-.473-.167-.876-.5-1.209A1.646 1.646 0 0 0 6 4.333c-.472 0-.875.167-1.208.5-.333.333-.5.736-.5 1.209 0 .472.167.875.5 1.208.333.333.736.5 1.208.5ZM.167 16.833v-1.75h11.666v1.75H.167Z" fill="#B9B9B9"/></svg>
      break;
    case 'hamburger':
      svgEelement = <svg className={className} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="hamburgerIconTitle" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000"><path d="M6 7h12M6 12h12M6 17h12"/></svg>
      break;
    case 'close':
      svgEelement = <svg className={className} width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 15.5-10-10zm0-10-10 10" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      break;
    case 'amenitiesRooms':
      svgEelement = <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path fill="#D9D9D9" d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="M17.225 8.775h1.55v-1.55h-1.55v1.55Zm0 4h1.55v-1.55h-1.55v1.55Zm0 4h1.55v-1.55h-1.55v1.55ZM16 20v-1h5V5h-9.625v2.2l-1-.725V4H22v16h-6ZM2 20v-8.5l6-4.275 6 4.275V20H9.275v-4.5h-2.55V20H2Zm1-1h2.725v-4.5h4.55V19H13v-7L8 8.5 3 12v7Z" fill="#19E09C"/></g></svg>
      break;
    case 'search' :
      svgEelement = <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12.938 14-4.98-4.979a5.207 5.207 0 0 1-1.375.719c-.5.173-1.028.26-1.583.26-1.389 0-2.57-.486-3.542-1.458C.486 7.569 0 6.389 0 5c0-1.389.486-2.57 1.458-3.542C2.431.486 3.611 0 5 0c1.389 0 2.57.486 3.542 1.458C9.514 2.431 10 3.611 10 5c0 .555-.087 1.083-.26 1.583-.174.5-.414.958-.719 1.375L14 12.938 12.938 14ZM5 8.5c.972 0 1.798-.34 2.479-1.021C8.159 6.799 8.5 5.972 8.5 5c0-.972-.34-1.798-1.021-2.479C6.799 1.841 5.972 1.5 5 1.5c-.972 0-1.798.34-2.479 1.021C1.841 3.201 1.5 4.028 1.5 5c0 .972.34 1.798 1.021 2.479C3.201 8.159 4.028 8.5 5 8.5Z" fill="#fff"/></svg>
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