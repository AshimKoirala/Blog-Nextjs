import Link from "next/link";

export default  function Categories({params}:{params:{id:string}}){
    const post ={
        id:params.id,
    }
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl"> {params.id}</h1>

            <Link href="/" className="text-blue-400 mt-4 inline-block">
            ← Back to Home
           </Link>
        </div>

    );
}
