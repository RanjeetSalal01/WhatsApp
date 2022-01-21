import  conversation  from "../modal/conversation.js"

export const newConversation = async(request,response) => {
    let senderId=request.body.senderId
    let reciverId=request.body.reciverId
        try{
            let exist = await conversation.findOne({members:{$all:[senderId,reciverId]}})
            if(exist){
                response.status(200).json('already exist')
                return;
            }
           const newconversation= new conversation({
                members:[senderId,reciverId]
            })
            await newconversation.save();
            response.status(200).json("conversation added ")

        }catch(error){
            response.status(500).json(error)
        }
    
}
export const getConversation=async(request,response)=>{
   
    try{
       const Conversation= await conversation.findOne({members:{$all:[request.body.sender, request.body.receiver]}})
       response.status(200).json(Conversation)
    }catch(error){
        response.status(500).json(error) 
    }


}
