import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: posts, loading, error} = useFetch("http://localhost:8000/posts");

  return ( 
      <div className="home">
        { error && <div>{error}</div>}
        {loading && <div>loading...</div>}
        {posts && <PostList posts = {posts} title = "Team Updates"/>}
      </div>
    );
}
 
export default Home;
