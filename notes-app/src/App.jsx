import { useState } from 'react';
import { Trash2 } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title, detail})
    setTask(copyTask)

    setTitle('')
    setDetail('')
  }

  const deleteNote = (i) => {
    const copyTask = [...task]

    copyTask.splice(i,1)
    setTask(copyTask)
  }

  return (
    <>
      <div className="h-screen lg:flex bg-black text-white">

        <form onSubmit={(e)=>{
          submitHandler(e)
          }}
          className="flex justify-between lg:w-1/2 items-start p-10">
          <div className="flex flex-col w-1/2 items-start gap-4">
          <h1 className="text-xl font-bold">Add Notes</h1>

            {/* First input */}
            <input type="text"
              placeholder="Enter Notes Heading"
              className="px-5 w-full py-2 border-2 rounded"
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />

            {/* Detailed input */}
            <textarea type="text" placeholder="Write Details"
              className="item-start px-5 h-25 w-full py-2 border-2 rounded"
              value={detail}
              onChange={(e)=>{
                setDetail(e.target.value)
              }}
            />

            <button className="bg-white cursor-pointer active:scale-95 active:bg-gray-400 w-full text-black rounded px-5 py-2">Add Note</button>

          </div>

        </form>

        <div className="lg:w-1/2 bg-gray-800 p-10 lg:border-l-2">

          <h1 className="text-xl font-bold">Your Notes</h1>

          <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto">
            {
              task.map((el, i)=>{
                return <div key={i} className="flex justify-between flex-col items-start relative bg-cover h-52 w-40 text-black rounded-xl bg-amber-100">
                  <div>
                    <h3 className="leading-tight mt-1 flex justify-center text-xl font-bold">{el.title}</h3>
                    <p className="mt-2 leading-tight ml-3 font-medium text-gray-500">{el.detail}</p>
                  </div>
                  <button onClick={()=>{
                    deleteNote(i)
                  }} className="w-full flex justify-center mb-3 rounded cursor-pointer text-black"><Trash2 size={20} /></button>
                </div>
              })
            }

          </div>

        </div>

      </div>
    </>
  )
}

export default App