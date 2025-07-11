// Function to get a generic SVG path for a folder icon
const getFolderIcons = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}"
        d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
`;

// Function to get a generic SVG path for a share icon
const getShareIcons = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-width="${strokeWidth}"
        d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
`;
const getVideoIcon = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="m17 2 4 4-4 4M19 8H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"/>
`;

// Function to get a generic SVG path for an album icon
const getAlbumIcon = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M17.5 8.5h.01M7 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M10 18l-3.21-3.6A2 2 0 0 0 6.5 14h-1a2 2 0 0 0-1.5 3.3L7.2 19M14 18l4.06-4.98A2 2 0 0 1 18.5 13h1a2 2 0 0 1 1.5 3.3L16.8 19"/>
`;

// Function to get a generic SVG path for a calendar icon (for "On This Day")
const getCalendarIcons = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M4 10h16M8 2v4m8-4v4M4 14h16m-4 7V14M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/>
`;

// Function to get a generic SVG path for a tag icon
const getTagIcon = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M15 5V3m0 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Zm-9 0H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m0-6v6m0 0h.01M15 19v-2m0 2a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2v-2a2 2 0 0 1-2-2h-2a2 2 0 0 1-2 2ZM9 19H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m0-6v6m0 0h.01"/>
`;

// Function to get a generic SVG path for a map icon
const getMapIcon = (strokeWidth = 2) => `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
</svg>


`;
const getPlace = (strokeWidth = 2) => `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

`;
// Function to get a generic SVG path for a settings icon
const getSettingsIcons = (strokeWidth = 2) => `
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.424 2.572-1.065Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
`;

const getPhotos = (strokeWidth = 2) => `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

`;

const getVideo = (strokeWidth = 2) => `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
</svg>

`;
const getAlbumIcons = (strokeWidth = 1.5) => `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="${strokeWidth}" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z"/>
</svg>
`;

const getCollaborativeIcon = () => `
<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
</svg>
`;

const getFolderIconss = () => `
<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clip-rule="evenodd"/>
</svg>
`;

const getFavoriteIcon = () => `
<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>
`;





const getTagsIcon = () => `
<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M18.045 3.007 12.31 3a1.965 1.965 0 0 0-1.4.585l-7.33 7.394a2 2 0 0 0 0 2.805l6.573 6.631a1.957 1.957 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 21 11.479v-5.5a2.972 2.972 0 0 0-2.955-2.972Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
</svg>
`;

const getPlacesIcon = () => `
<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z" clip-rule="evenodd"/>
</svg>
`;

const getMapIcons = () => `
<svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
</svg>
`;
const getBolt = () => `
           <svg class="size-6"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M19 4h18L26 18h15L17 44l5-19H8L19 4Z"/></svg>
        `;

// Function for "By you" icon
const getPersonIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
  </svg>
`;

// Function for "By others" and "Contacts" icon
const getPeopleIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd"/>
  </svg>
`;

// Function for "Circles" icon
const getCirclesIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z"/>
    <path d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"/>
    <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z"/>
    <path d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z"/>
  </svg>
`;

// Function for "Favorites" icon
const getStarIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
  </svg>
`;

// Function for "File changes" icon
const getFolderIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z" clip-rule="evenodd"/>
  </svg>
`;

// Function for "Security" icon
const getLockIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
  </svg>
`;

// Function for "File shares" icon
const getShareIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z"/>
  </svg>
`;

// Function for "Calendar" icon
const getCalendarIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/>
  </svg>
`;

// Function for "To-dos" icon
const getCheckmarkIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M5 11.917 9.724 16.5 19 7.5"/>
  </svg>
`;

// Function for "Comments" icon
const getCommentIcon = (fill = "currentColor") => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${fill}" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"/>
  </svg>
`;

// Function for "Forms" icon
const getFormsIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="${strokeWidth}" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"/>
  </svg>
`;

// Function for "Deck" icon
const getDeckIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
  </svg>
`;

// Function for "Polls" icon
const getPollsIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="${strokeWidth}" d="M5 7h14M5 12h14M5 17h10"/>
  </svg>
`;

// Example function for settings icon (provided by user)
const getSettingsIcon = (strokeWidth = 2) => `
  <svg class="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.424 2.572-1.065Z"/>
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="${strokeWidth}" d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
  </svg>
`;

// Main sidebar menu items
export const sidebarMenu = [
  {
    title: "All Files",
    icon: getFolderIcon(1.5), // Use a slightly thinner stroke for this icon
    path: "/dashboard/files",
    currentPathSegment: "files", // Unique segment for dynamic matching
  },
  {
    title: "Recent",
    icon: `
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3" />
        `,
    path: "/dashboard/recent",
    currentPathSegment: "recent",
  },
  {
    title: "Group Folders",
    icon: `
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
        `,
    path: "#",
    currentPathSegment: "group-folders",
  },
  {
    title: "Favorites",
    icon: `
            <path stroke="currentColor" stroke-width="2"
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
        `,
    path: "#",
    currentPathSegment: "favorites",
  },
  {
    title: "Shares",
    icon: getShareIcon(),
    path: "#", // Base path for shares, sub-items will extend this
    currentPathSegment: "shares",
    submenu: [
      {
        title: "Shared with you",
        path: "/dashboard/shares/shared-with-you",
        currentPathSegment: "shared-with-you",
      },
      {
        title: "Shared with others",
        path: "/dashboard/shares/shared-with-others",
        currentPathSegment: "shared-with-others",
      },
      {
        title: "Shared by link",
        path: "/dashboard/shares/shared-by-link",
        currentPathSegment: "shared-by-link",
      },
      {
        title: "Delete Shares",
        path: "/dashboard/shares/delete-shares",
        currentPathSegment: "delete-shares",
      },
      {
        title: "Pending Shares",
        path: "/dashboard/shares/pending-shares",
        currentPathSegment: "pending-shares",
      },
    ],
  },
];

export const dashboardMenu = [
  {
    title: "All Files",
    icon: getFolderIcon(1.5), // Use a slightly thinner stroke for this icon
    path: "/dashboard",
    currentPathSegment: "dashbaord", // Unique segment for dynamic matching
  },
];

export const photosMenu = [
  {
    title: "All Media",
    icon: getFolderIcon(1.5), // Use a slightly thinner stroke for this icon
    path: "/dashboard/files",
    currentPathSegment: "files", // Unique segment for dynamic matching
  },
  {
    title: "Photos",
    icon: getPhotos(), // Placeholder for a generic image/photo icon
    path: "/dashboard/photos", // Changed path for clarity
    currentPathSegment: "photos",
  },
  {
    title: "Videos",
    icon: getVideo(),
    path: "/dashboard/videos",
    currentPathSegment: "videos",
  },
  {
    title: "Albums",
    icon: getAlbumIcons,
    path: "/dashboard/albums",
    currentPathSegment: "albums",
  },
  {
    title: "Collaborative Albums",
    icon: getCollaborativeIcon(), // Using share icon as a placeholder for collaborative aspect
    path: "/dashboard/collaborative-albums",
    currentPathSegment: "collaborative-albums",
  },
  {
    title: "Folders",
    icon: getFolderIcon,
    path: "/dashboard/folders",
    currentPathSegment: "folders",
  },
  {
    title: "Favorites",
    icon: `
            <path stroke="currentColor" stroke-width="2"
                d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
        `,
    path: "/dashboard/favorites",
    currentPathSegment: "favorites",
  },
  {
    title: "On This Day",
    icon: getCalendarIcons(),
    path: "/dashboard/on-this-day",
    currentPathSegment: "on-this-day",
  },
  {
    title: "Shared with you",
    icon: getShareIcon(),
    path: "/dashboard/shared-with-you",
    currentPathSegment: "shared-with-you",
  },
  {
    title: "Tags",
    icon: getTagIcon(),
    path: "/dashboard/tags",
    currentPathSegment: "tags",
  },
  {
    title: "Places",
    icon: getPlace(), // Using map icon for places
    path: "/dashboard/places",
    currentPathSegment: "places",
  },
  {
    title: "Map",
    icon: getMapIcon(),
    path: "/dashboard/map",
    currentPathSegment: "map",
  },
  {
    title: "Photos Settings",
    icon: getSettingsIcon(),
    path: "/dashboard/photos-settings",
    currentPathSegment: "photos-settings",
  },
];

export const allActivity = [
  {
    title: "All activities",
    icon: getBolt(), // Placeholder for lightning bolt icon. Replace with getSettingsIcon() or similar if applicable.
    path: "/dashboard/all-activities",
    currentPathSegment: "all-activities",
  },
  {
    title: "By you",
    icon: getPersonIcon(),
    path: "/dashboard/by-you",
    currentPathSegment: "by-you",
  },
  {
    title: "By others",
    icon: getPeopleIcon(),
    path: "/dashboard/by-others",
    currentPathSegment: "by-others",
  },
  {
    title: "Circles",
    icon: getCirclesIcon(),
    path: "/dashboard/circles",
    currentPathSegment: "circles",
  },
  {
    title: "Favorites",
    icon: getStarIcon(),
    path: "/dashboard/favorites",
    currentPathSegment: "favorites",
  },
  {
    title: "File changes",
    icon: getFolderIcon(),
    path: "/dashboard/file-changes",
    currentPathSegment: "file-changes",
  },
  {
    title: "Security",
    icon: getLockIcon(),
    path: "/dashboard/security",
    currentPathSegment: "security",
  },
  {
    title: "File shares",
    icon: getShareIcon(),
    path: "/dashboard/file-shares",
    currentPathSegment: "file-shares",
  },
  {
    title: "Calendar",
    icon: getCalendarIcon(),
    path: "/dashboard/calendar",
    currentPathSegment: "calendar",
  },
  {
    title: "To-dos",
    icon: getCheckmarkIcon(),
    path: "/dashboard/to-dos",
    currentPathSegment: "to-dos",
  },
  {
    title: "Comments",
    icon: getCommentIcon(),
    path: "/dashboard/comments",
    currentPathSegment: "comments",
  },
  {
    title: "Contacts",
    icon: getPeopleIcon(), // Reusing getPeopleIcon as the SVG is identical to 'By others'
    path: "/dashboard/contacts",
    currentPathSegment: "contacts",
  },
  {
    title: "Forms",
    icon: getFormsIcon(),
    path: "/dashboard/forms",
    currentPathSegment: "forms",
  },
  {
    title: "Deck",
    icon: getDeckIcon(),
    path: "/dashboard/deck",
    currentPathSegment: "deck",
  },
  {
    title: "Polls",
    icon: getPollsIcon(),
    path: "/dashboard/polls",
    currentPathSegment: "polls",
  },
  {
    title: "Activity settings",
    icon: getSettingsIcon(), // Using the provided getSettingsIcon for this
    path: "/dashboard/activity-settings",
    currentPathSegment: "activity-settings",
  },
];
