import Post from "../models/Post";
//create, delete, update post fucntions
//create
interface createPostProps{
    title:String;
    description:String;
    status:String;
    poster:String;
    socialLink:String;
}

export async function createPost({title, description, poster, status, socialLink}:createPostProps) {
    console.log(`title=${title}\n description=${description}\n status=${status}\n imgUrl=${poster}\n socialLink=${socialLink}`);
    try {
        const newPost=new Post({
            title:title,
            description:description,
            status:status,
            posterUrl:poster,
            socialLink:socialLink,
        });
        await newPost.save();
        const post = await Post.find();
        return Response.json(post);
    } catch (error) {
        
    }
    return ("received");
}
//delete
//update