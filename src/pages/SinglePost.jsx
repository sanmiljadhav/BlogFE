import React,{useState,useEffect,useContext} from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link,Navigate,useLocation, useNavigate} from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment"
import { AuthContext } from "../context/authContext";


const SinglePost = () => {
  const [post,setPost] = useState([])
  const navigate = useNavigate()

    const location = useLocation()
    const {currentUser} = useContext(AuthContext)
    const postId = location.pathname.split("/")[2]


    //when we change the postId it will call the useEffect again and again

    useEffect(() => {
        const fetchPosts = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
                setPost(res.data);

            }catch(err){
                console.log(err)

            }
        }

        fetchPosts()
      
    }, [postId])

    const handleDelete = async ()=>{
      try{
        await axios.delete(`http://localhost:8800/api/posts/${postId}`);
        navigate("/")  //after deleting navigate to home page

    }catch(err){
        console.log(err)

    }

    }

  return (
    <div className="single-page">
      <div className="single-page-content">
        <img src={post?.img} alt="" />

        <div className="user">
          {post.userImage && <img src={post.userImage} alt="" />}
          <div className="info">
            <span className="username">{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>  
            {/* it will show diffrence between these dates and current date */}
          </div>
          {currentUser.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
              <FaEdit  className = 'edit-action-button' />
            </Link>

            <Link>
              <MdDelete className = 'delete-action-button' onClick={handleDelete}  />
            </Link>
          </div>}

         
        </div>
        <h1 className="blog-header">{post.title}</h1>
          <p className="blog-desc">{post.desc}</p>
      </div>
      <Menu cat = {post.cat}/>
    </div>
  );
};

export default SinglePost;
