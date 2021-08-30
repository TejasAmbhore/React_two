import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('https://TejasAmbhore.github.io/reacttwo/db.json/blogs' + id)
    const history = useHistory();
    const handleClick = () => {
        fetch('https://TejasAmbhore.github.io/reacttwo/db.json/blogs' + blog.id, {
            method:'DELETE'
        }) .then(() => {
            history.push('reacttwo');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;