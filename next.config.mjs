/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "vqnlgzsozehevgjgkhmc.supabase.co"
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
