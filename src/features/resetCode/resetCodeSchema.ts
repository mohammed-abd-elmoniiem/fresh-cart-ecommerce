

import * as zod from 'zod'

export const resetCodeSchema = zod.object({
   
    resetCode: zod.string().nonempty('email is required')
    
})