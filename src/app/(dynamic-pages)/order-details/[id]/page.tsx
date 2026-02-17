'use server'

import OrderDetailsScreen from "@/src/features/orderDetails/orderDetailsScreen";

export default async function Page({params}:{params:Promise<{id:string}>}) {
    const {id: orderId} = await  params;
  return (
    <div className="">
    <OrderDetailsScreen id={orderId} />
    </div>
  )
}
