

import * as zod from 'zod'

export const AddressSchema = zod.object({
    name:zod.string().nonempty('name is required').max(25,'max length is 25').min(3,'minmum length is 3'),
    details: zod.string().nonempty('email is required'),
    city:zod.string().nonempty('email is required')
    
    ,

    phone:zod.string().regex(/^(\+20)?01[0125][0-9]{8}$/,'only egyption numbers'),

})