import React,{useState,useEffect} from "react";
import axios from "axios";

const Menu = ({cat}) => {
  const [similarPosts,setSimilarPosts] = useState([])
  // const posts = [
  //   {
  //     id: 1,
  //     title: "first image",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus velit dignissimos reprehenderit. Eligendi ipsum magni vel fugiat deserunt! Quidem veritatis numquam, est doloremque nisi obcaecati consectetur, debitis nobis quisquam ex vero quo nulla sint quia nemo. Laborum dicta eos facilis quibusdam, temporibus quidem. Est eum velit voluptas rerum facilis.",
  //     img: "https://picsum.photos/id/237/200/300",
  //   },
  //   {
  //     id: 2,
  //     title: "second image",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus velit dignissimos reprehenderit. Eligendi ipsum magni vel fugiat deserunt! Quidem veritatis numquam, est doloremque nisi obcaecati consectetur, debitis nobis quisquam ex vero quo nulla sint quia nemo. Laborum dicta eos facilis quibusdam, temporibus quidem. Est eum velit voluptas rerum facilis.",
  //     img: "https://picsum.photos/id/237/200/300",
  //   },
  //   {
  //     id: 3,
  //     title: "third image",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus velit dignissimos reprehenderit. Eligendi ipsum magni vel fugiat deserunt! Quidem veritatis numquam, est doloremque nisi obcaecati consectetur, debitis nobis quisquam ex vero quo nulla sint quia nemo. Laborum dicta eos facilis quibusdam, temporibus quidem. Est eum velit voluptas rerum facilis.",
  //     img: "https://picsum.photos/id/237/200/300",
  //   },
  // ];

  useEffect(() => {
    const fetchSimilarPosts = async ()=>{
        try{
            const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`);
            setSimilarPosts(res.data);

        }catch(err){
            console.log(err)

        }
    }

    fetchSimilarPosts()
  
}, [cat])

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {similarPosts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
