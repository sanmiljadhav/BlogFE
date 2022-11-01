import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');
  console.log("value is",value)
  const [title,setTitle] = useState(null)
  const [file,setFile] = useState('');
  const [cat,setCat] = useState('')

  const handleClick = async e=>{
    e.preventDefault()
  }
  
  return (
    <div className='post-blog'>
      <div className="content">
        <input type="text" placeholder='title' onChange = {e=>setTitle(e.target.value)}/>
        <div className="editor-container">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />

        </div>
      </div>

      <div className="menu">
        <div className="item-one">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style = {{display:'none'}} type="file" id = "file" onChange = {e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item-two">
          <h1>Category</h1>

          <div className="cat">

          
          <input type="radio" name = 'cat' value = 'art' id = 'art' onChange = {e=>setCat(e.target.value)}/>
          <label htmlFor="art">Art</label>
          </div>
           
          <div className="cat">
          <input type="radio" name = 'cat' value = 'science' id = 'science' onChange = {e=>setCat(e.target.value)}/>
          <label htmlFor="science">Science</label>
          </div>
          
          <div className="cat">
            <input type="radio" name = 'cat' value = 'technology' id = 'technology' onChange = {e=>setCat(e.target.value)}/>
          <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
          <input type="radio" name = 'cat' value = 'cinema' id = 'cinema' onChange = {e=>setCat(e.target.value)}/>
          <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
          <input type="radio" name = 'cat' value = 'design' id ='design' onChange = {e=>setCat(e.target.value)}/>
          <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
          <input type="radio" name = 'cat' value = 'food' id = 'food' onChange = {e=>setCat(e.target.value)}/>
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Write