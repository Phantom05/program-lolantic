import {storage} from 'lib/library';
import {ENV_MODE_DEV} from 'lib/setting';

console.log(ENV_MODE_DEV,'ENV_DEV_MODE');
export const mapper ={
  base:{
    brandName:"Lolantic",
    website: ENV_MODE_DEV ? `http://localhost:8000/`:"https://www.lolantic.co.kr",
    
  },
  auth:{
    storageToken :storage.get('token')
  },
  pageUrl:{
    resetPassword:"/auth/reset/password",
    login:"/auth/login"
  }
}