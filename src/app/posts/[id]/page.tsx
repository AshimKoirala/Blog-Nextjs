import Link from "next/link";

export default  function Post({params}:{params:{id:string}}){
    const post ={
        id:params.id,
        title: `Post ${params.id}`,
        content:`This is the detailed content of post ${params.id}.`,
    }
    return(
        <div className="container mx-auto p-4">
            
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg">{post.content}</p>
            <Link href="/" className="text-blue-400 mt-4 inline-block">
            ← Back to Home
           </Link>
        </div>

    );
}
