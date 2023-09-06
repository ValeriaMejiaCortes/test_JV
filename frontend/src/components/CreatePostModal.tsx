import { useState } from "react";
import { CreatePostModalInterface } from "../interfaces";
import axios from 'axios'

export default function Modal({showModal, setShowModal, postUrl, refreshPosts}: CreatePostModalInterface) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const savePost = async () => {
    try {
      await axios.post(postUrl, {title, text});
      refreshPosts();
      setShowModal(false)
    } catch (err) {
      console.error(err);
    } 
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <input placeholder="Title" onChange={(e)=> setTitle(e.target.value)}>
                  </input>
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-5 flex-auto">
                <textarea placeholder="Text" className="w-100" onChange={(e)=> setText(e.target.value)}>
                  </textarea>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => savePost()}
                  >
                    Save
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : <></>}
    </>
  );
}