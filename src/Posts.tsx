import {useEffect, useState} from "react";
import {getPosts} from "./services/api.services"
import {IPost} from "./models/IPost";
import Post from "./Post";

const Posts = () => {
    let [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value.data))

    }, [])
    return <div>
        {
            posts.map(value => <Post {...value} key={value.id}/>)
        }
    </div>
}
export default Posts;