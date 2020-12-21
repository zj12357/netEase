import { post,get } from '@/common/request.js'
const api={
    /*等级规则*/
    gradeDetail:'h5/v5/user/grade/queryH5',
}
/*等级规则*/
export const grade_detail = (garde)=>{  return post(api.gradeDetail, garde)}

export function getInfo () {
    return get(api.gradeDetail,{})
 }