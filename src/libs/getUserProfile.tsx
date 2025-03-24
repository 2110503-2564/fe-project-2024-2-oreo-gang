export default async function getUserProfile( token:String ){
    const response = await fetch("https://proj-oreo-backend.vercel.app/api/v1/me",{
        method: "GET",
        headers: {
            authorization : `Bearer ${token}`
        },
    })

    if(!response.ok){
        throw new Error("Cannot Get User Profile")
    }

    return await response.json();
}