
import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
 
  images:{
    remotePatterns:[new URL('https://ecommerce.routemisr.com/*/**'),
      { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'images.pexels.com' },
    { protocol: 'https', hostname: 'unsplash.com' },{
      protocol: 'https',
      hostname: 'illustrations.popsy.co'
    }
    ]
  }
};

export default withFlowbiteReact(nextConfig);