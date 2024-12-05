require('.env').config();
export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR="https://www.citypng.com/public/uploads/preview/white-user-member-guest-icon-png-image-701751695037005zdurfaim0y.png";
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.RAECT_APP_TMDB_KEY
    }
  };
  export const TMDB_IMG_CDN="https://image.tmdb.org/t/p/w500/";
  export const BG_NETFLIX="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
  export const SUPPORTED_LANG=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"spanish",name:"Spanish"}]
  // export const OPEN_API_KEY=process.env.REACT_APP_OPEN_API_KEY
  // export const BASE_URL="https://api.aimlapi.com/v1";
  export const OPEN_API_KEY=process.env.RAECT_APP_TMDB_KEY