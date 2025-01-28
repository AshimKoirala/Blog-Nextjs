import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center ">
               <h1 className="text-2xl">My Blog</h1>
               <nav>
                <ul className="flex space-x-4">
                    <li>
                       <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                       <Link href="/about" className="hover:underline">About</Link>
                    </li>
                    <li>
                       <Link href="/contact" className="hover:underline">Contact</Link>
                    </li>
                    <li>
                       <Link href="/create-post" className="hover:underline">Create Post</Link>
                    </li>
                </ul>
               </nav>
            </div>
        </header>
    )
}