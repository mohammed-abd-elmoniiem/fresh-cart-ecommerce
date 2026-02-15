import Terms from '@/src/app/(static-pages)/terms/page';

import * as zod from 'zod'

export const resetPasswordSchema = zod.object({
   
    resetCode: zod.string().nonempty('email is required')
    
})