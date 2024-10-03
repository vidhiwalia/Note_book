import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import noteContext from './context/Notecontext'
export default function Addnote(props) {
  
  const context = useContext(noteContext)
  const { addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const handleclick = (e) => {

    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("Added successfully", "success")
  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <div className='container my-3'>
      <h2>Add your notes</h2>
        {/* it is the form to display */}
        {/* <form>
          <div class="mb-3">
            <label HtmlFor="title" class="form-label">title</label>
            <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} value={note.title} minLength={3} required/>
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label HtmlFor="description" class="form-label">Description</label>
            <input type="text" class="form-control" id="description" name="description" onChange={onchange} value={note.description} minLength={4} required/>
          </div>
          <div class="mb-3">
            <label HtmlFor="tag" class="form-label">tag</label>
            <input type="text" class="form-control" id="tag" name="tag" onChange={onchange} value={note.tag}/>
          </div>
          <button disabled={note.title.length<3 || note.description.length<4} type="submit" class="btn btn-primary" onClick={handleclick}>Add Note</button>
        </form> */}

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Enter your title" onChange={onchange} value={note.title} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter your text" onChange={onchange} value={note.description} minLength={4} required></textarea>
        </div>
        <button disabled={note.title.length < 3 || note.description.length < 4} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </div>
    </div>
  )
}
