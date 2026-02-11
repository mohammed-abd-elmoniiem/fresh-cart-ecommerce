import Terms from '@/src/app/(static-pages)/terms/page';
import { newUser } from './types';

import * as zod from 'zod'

export const signUpSchema = zod.object({
    name:zod.string().nonempty('name is required').max(25,'max length is 25').min(3,'minmum length is 3'),
    email: zod.string().nonempty('email is required').pipe(zod.email().nonempty('email is required')) ,
    password:zod.string()
    .min(8,'minmum length  is 8')
    .max(55,'max length is 55')
    .regex(/[&#@=&<]+/,'must contain special character')
    ,
    rePassword:zod.string().nonempty('confirm password is required'),
    phone:zod.string().regex(/^(\+20)?01[0125][0-9]{8}$/,'only egyption numbers'),
    terms:zod.boolean().refine(value => value === true ,{error:'terms must be accepted terms'})
}).refine(data=> data.password === data.rePassword,{path:['rePassword'],error:'password is not matched'})