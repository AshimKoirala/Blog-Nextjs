export default function CreatePost(){
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl mb-4">Create new Post</h1>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block font-medium mb-2" htmlFor="title">Title</label>
                    <input type="text" id="title" className="w-full p-2 border rounded" placeholder="Post Title" />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2" htmlFor="content">Content</label>
                    <textarea className="w-full p-2 border rounded" id="content" rows={6} placeholder="Post Content"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 border rounded-lg hover:bg-blue-700">Submit Post</button>
            </form>
        </div>
    )
}