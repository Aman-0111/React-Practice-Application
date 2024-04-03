import { useState } from "react";
import { useHistory} from "react-router-dom";

const Create = () => {

    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [poster, setPoster] = useState('LFC');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState (false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { name, body, poster, date};

        setLoading(true);

        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(() => {
            setLoading(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Post body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
                <label>Post Team:</label>
                <select value={poster} onChange={(e) => setPoster(e.target.value)}>
                    <option value="LFC">LFC</option>
                    <option value="Slough Town FC">Slough Town FC</option>
                    <option value="Everton">Everton</option>
                    <option value="Manchester City">Manchester City</option>
                    <option value="Arsenal">Arsenal</option>
                    <option value="Chelsea">Chelsea</option>
                </select>
                <label>Post Date:</label>
                <input type="text" required value={date} onChange={(e) => setDate(e.target.value)}/>
                { !loading && <button>Add Post</button> }
                { loading && <button disabled>Adding Post</button> }
            </form>
        </div>
    );
}
 
export default Create;