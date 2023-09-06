import {useEffect, useState} from 'react'
import axios from 'axios'
import PostInterface from "../interfaces";
import PostModal from './PostModal'
import CreatePostModal from './CreatePostModal'

function ShowPosts() {

  const url = 'http://localhost:3080/api/v1/posts';
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<PostInterface>();

  const getPosts = async () => {
    try {
      const response = await axios.get(url);
      setPosts(response.data.data)
      console.log(response.data.data);
      console.log(posts);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    } 
  }

  const readPost = (postSelected: PostInterface) => {
    setShowModal(true);
    setSelectedPost(postSelected);
  }
  
  const deletePost = async (postId: String) => {
    try {
      await axios.delete(`${url}/${postId}`);
      await getPosts();
    } catch (err) {
      console.error(err);
    } 
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <button type="button" onClick={() => setShowCreateModal(true)} className="mt-[4%] mb-[4%] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add new post</button>
      <div className="relative overflow-x-auto ml-[10%] mr-[10%] ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Text
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                {posts.length && posts.map((post) => (
                  <tr key={post.id} className="bg-white dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {post.id}
                      </th>
                      <td className="px-6 py-4">
                      {post.title}
                      </td>
                      <td className="px-6 py-4">
                      {post.text}
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => readPost(post)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        </span>
                      </button>
                        
                      </td>
                      <td className="px-6 py-4">
                        <button onClick={() => deletePost(post.id)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </span>
                        </button>
                      </td>
                  </tr>
                  ))}
              </tbody>
          </table>
      </div>
      <PostModal showModal={showModal} post={selectedPost} setShowModal={setShowModal}/>
      <CreatePostModal 
        showModal={showCreateModal} 
        setShowModal={setShowCreateModal} 
        postUrl={url} 
        refreshPosts={()=> getPosts()}
      />
    </>
  )
}

export default ShowPosts