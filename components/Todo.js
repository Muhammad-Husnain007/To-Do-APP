import { useRef, useState } from 'react';
import deleteimg from '../assests/delete.png';
import editimg from '../assests/editimage.jpg';
import submitimg from '../assests/submit.png';
function Todo() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const inputRef = useRef();
  const [editIndex, setEditIndex] = useState(null);

  const handlesubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      list[editIndex] = todo;
      setEditIndex(null);
    }
    else {
      setList([...list, todo]);
    }
    setTodo("");
  }

  const handledelete = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  const handleedit = (index) => {
    const value = list[index];
    setTodo(value);
    setEditIndex(index);
    inputRef.current.focus();
  }


  return (
    <div className='main-div'>

      <h1>Todo Web</h1>
      <img className='dltall' onClick={() => setList([])} src={deleteimg} alt="delete all" />
      <form onSubmit={handlesubmit}>
        <input type="text" value={todo} required ref={inputRef} onChange={(e) => setTodo(e.target.value)} />      <button className='btn-submit' type='submit'><img src={submitimg} alt="submit" /></button>

      </form>

      <div className="item-container">
        {list.map((item, index) => (
          <div className='fun-div' key={index}>
            <p>{item}
              <img className='img-image' src={deleteimg} alt="delete" onClick={() => handledelete(index)} />
              <img className='img-image' src={editimg} alt="edit" onClick={() => handleedit(index)} />
            </p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Todo;
