import { useRef } from "react";
const AddVideo = () => {
  let thumbnail = useRef(null);
  let title = useRef(null);
  let channel = useRef(null);
  let views = useRef(null);

  let upload=(e)=>{
    e.preventDefault()// prevents from reloading the page
    let data={
      thumbnail:thumbnail.current.value,
      title:title.current.value,
      channel:channel.current.value,
      views:views.current.value
    }
    // console.log(data);
    fetch("http://localhost:3000/videos",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    })
    alert('video updated successfully')
  }
  return (
    <div className="addVideo">
      <form action="" onSubmit={upload}>
        <input ref={thumbnail} type="url" placeholder="Enter Thumbnail" />
        <input ref={title} type="text" placeholder="Enter Title " />
        <input ref={channel} type="text" placeholder="Enter Channel Name" />
        <input ref={views} type="text" placeholder="Enter Views" />
        <button onClick={upload.data}>Upload Video</button>
      </form>
    </div>
  );
};

export default AddVideo;
