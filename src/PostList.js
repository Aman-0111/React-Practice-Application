import {Link} from 'react-router-dom';


const PostList = ({posts, title}) => {
    return ( 
        <div className="post-list">
            <h2>{title}</h2>
            {posts.map((post) =>  (
                <div className="post-preview" key={post.id}>
                    <Link to = {`/posts/${post.id}`}>
                        <h3>{ post.name }</h3>
                        <p>Posted {post.date} </p>
                        <p>{post.poster}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default PostList;