import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory} from "react-router-dom";

const PostDetails = () => {

    const { id } = useParams();
    const {data: post, error, loading} = useFetch("http://localhost:8000/posts/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/posts" + post.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }

    return (  
        <div className="post-details">
            { error && <div>{error}</div>}
            {loading && <div>loading...</div>}
            {post && (
                <article>
                    <h2>{ post.name }</h2>
                    <p>Posted { post.date }</p>
                    <p> {post.poster} </p>
                    <div>{post.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default PostDetails;