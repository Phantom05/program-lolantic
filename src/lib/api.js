import {setFormData, storage} from 'lib/library';
import _ from 'lodash';
import axios from 'axios';
// import {Actions} from 'store/actionCreators';
import {
  ENV_MODE_DEV,
  apiAddress
} from 'lib/setting';

let ip = apiAddress;

const endPoint ={
  post_signin : `${ip}/users/login`,
  post_token: `${ip}/users/token`,
  post_logout:`${ip}/users/logout`
}

/**
 * 
 * @param {*} axiosConf object
 * 통신할때 필요한 axios의 config 값을 넣어줍니다.
 * @param {*} config object
 * {header:false} 라고 할 시 header 체크를 하지 않습니다.
 */

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

function Acx(axiosConf,config = {}){
  const defaultConfig = {header:true};
  const mergeConfig = _.merge(defaultConfig,config);
  axiosConf.cancelToken = source.token;
  if(mergeConfig && mergeConfig.header){
    axiosConf.timeout = 5000;
    return axios(axiosConf).catch(err=>({error:err})).then(res=>{
      const {data,error} = res;
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
        return {cancel:true}
      }
      try{
        if(data.headers){
        // if(!error && data && data.headers && data.headers.onlineState != null){
            // Actions.base_profile_info_update({value:data.headers.onlineState}); 
            // Actions.base_network_connect({value:data.headers.onlineState}); 
            // Actions.base_message_get({value: data.headers.notReadMessage});
        }
      }catch(err){
        // 오류 처리
        console.log(err,'error');
        console.error('Response Data is undefined');
        const errorConf={
          // url:"http://localhost:9999/errortest",
          url:endPoint.post_error_meesage,
          method:"post",
          data:{
            payload:axiosConf,
            statusCode:err.statusCode,
            message:err.message,
            stack:err.stack
          }
        }
        axios(errorConf).catch(err=>({error:err}));
      }
      return res;
    });
  }else{
    return axios(axiosConf)
    .catch(err=>({error:err}));
  }
}


export function axiosCancel(){
  source.cancel('Operation canceled');
}



/**
 * 
 * @param {*} payload object
 */
export function postSignin(payload){
  const axiosConf={
    url:endPoint.post_signin,
    method:'post',
    data:payload
  }
  return Acx(axiosConf);
}

export function postToken(payload){
  const getStorageToekn = storage.get('email');
  const axiosConf={
    url:endPoint.post_token,
    method:'post',
    data:{ 
      token:getStorageToekn
    }
  }
  return Acx(axiosConf);
}



export function postLogout(payload){
  const getStorageToekn = storage.get('email');
  const axiosConf={
    url:endPoint.post_logout,
    method:'post',
    data:{ 
    }
  }
  return Acx(axiosConf);
}