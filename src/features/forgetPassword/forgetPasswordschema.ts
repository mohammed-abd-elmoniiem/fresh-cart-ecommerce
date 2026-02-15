import Terms from '@/src/app/(static-pages)/terms/page';

import * as zod from 'zod'

export const forgetPasswordSchema = zod.object({
   
    email: zod.string().nonempty('email is required').pipe(zod.email().nonempty('email is required')) ,
    
})