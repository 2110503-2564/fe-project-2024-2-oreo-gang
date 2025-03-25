export default async function getCarProvider(cid:String){

    await new Promise((resolve)=>setTimeout(resolve,300))

    const response = await fetch(`https://proj-oreo-backend.vercel.app/api/v1/providers/${cid}`)

    if(!response.ok){
        throw new Error("Failed to fetch venue")
    }

    return await response.json();
}