const apiRequest=async(url,options=null)=>{
    let response=null;
    try{
    response=await fetch(url,options);
    if(!response.ok)throw new Error("Data not found");
    return response;
    }
    catch(err){
        return err.message;
    }
}
export default apiRequest;