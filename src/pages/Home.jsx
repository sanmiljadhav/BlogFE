import axios from 'axios'
import React,{ useState,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'


const Home = () => {

    const [posts,setPosts] = useState([])

    //when we click on any of the category like ART,SCIENCE we get 
    // {
    // "pathname": "/",
    // "search": "?cat=science",
    // "hash": "",
    // "state": null,
    // "key": "jc1oiwgn"
    // }

    const cat = useLocation().search

    console.log("cat is",cat)

    //when we change the category it will call the useEffect again and again

    useEffect(() => {
        const fetchPosts = async ()=>{
            try{
                const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
                setPosts(res.data);

            }catch(err){
                console.log(err)

            }
        }

        fetchPosts()
      
    }, [cat])

    
    

    // const posts = [
    //     {
    //         id:1,
    //         title:'first image',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus velit dignissimos reprehenderit. Eligendi ipsum magni vel fugiat deserunt! Quidem veritatis numquam, est doloremque nisi obcaecati consectetur, debitis nobis quisquam ex vero quo nulla sint quia nemo. Laborum dicta eos facilis quibusdam, temporibus quidem. Est eum velit voluptas rerum facilis.',
    //         img:'https://picsum.photos/id/237/200/300'
    //     },{
    //         id:2,
    //         title:'second image',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus velit dignissimos reprehenderit. Eligendi ipsum magni vel fugiat deserunt! Quidem veritatis numquam, est doloremque nisi obcaecati consectetur, debitis nobis quisquam ex vero quo nulla sint quia nemo. Laborum dicta eos facilis quibusdam, temporibus quidem. Est eum velit voluptas rerum facilis.',
    //         img:'https://picsum.photos/id/237/200/300'
    //     },{
    //         id:3,
    //         title:'third image',
    //         desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus velit dignissimos reprehenderit. Eligendi ipsum magni vel fugiat deserunt! Quidem veritatis numquam, est doloremque nisi obcaecati consectetur, debitis nobis quisquam ex vero quo nulla sint quia nemo. Laborum dicta eos facilis quibusdam, temporibus quidem. Est eum velit voluptas rerum facilis.',
    //         img:'https://picsum.photos/id/237/200/300'
    //     }
    // ]
  return (
    <div className='home'>
        <div className="posts">
            {posts.map(post=>{
                return <div className='post' key = {post.id}>
                    <div className="post-img">
                        <img src = {post.img} alt = ''/>

                    </div>
                    <div className="post-content">
                        {/* After click on this go to post page */}
                        <Link className = 'link' to = {`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                        
                        </Link>
                        <p>{post.desc}</p>
                        <button>Read More</button>

                    </div>
                </div>

            })}

        </div>
    </div>
  )
}

export default Home