import Terms from '@/src/app/(static-pages)/terms/page';

import * as zod from 'zod'

export const createNewPasswordSchema = zod.object({
   
     currentPassword:zod.string()
        .min(8,'minmum length  is 8')
        .max(55,'max length is 55')
        .regex(/[&#@=&<]+/,'must contain special character'),

     password:zod.string()
        .min(8,'minmum length  is 8')
        .max(55,'max length is 55')
        .regex(/[&#@=&<]+/,'must contain special character'),
     rePassword:zod.string().nonempty('confirm password is required')
}).refine((data)=>data.password == data.rePassword ,{path:['rePassword'],error:'not match'})