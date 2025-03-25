export default async function getCarProviders(){

    await new Promise((resolve)=>setTimeout(resolve,300))

    const response = await fetch("https://proj-oreo-backend.vercel.app/api/v1/providers")

    if(!response.ok){
        throw new Error("Failed to fetch providers")
    }

    return await response.json();
}