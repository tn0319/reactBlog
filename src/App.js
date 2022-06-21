import { useState, useTransition } from 'react';
import './App.css';

function App() {
  
  let [title, setTitle] = useState(['react coding apple','study with React','enjoy your life']);
  let [likeBtn, setLikeBtn] = useState(0);

  return (
    <div className='App'>
      <h1 className='logo-wrap'>ReactBlog</h1>

      <div className='sort-wrap'>
        <button className='sort-btn' onClick={()=>{
          let sortTitle = [...title];
          setTitle(sortTitle.sort());
        }}>Sorting</button>
      </div>

      <ul className='board-wrap'>
        <li>
          {/* <button onClick={()=>{
            let copy = [...title];
            copy[0] = 'Vue coding apple?';
            setTitle(copy);
          }}>글 수정</button> */}
          <p className='tit'>{title[0]}</p>     
          <span className='date'>2022.06</span>
          <button onClick={() => setLikeBtn(likeBtn+1)}>👍</button><span>{likeBtn}</span>
        </li>
        <li>
          <p className='tit'>{title[1]}</p>        
          <span className='date'>2022.06</span>        
        </li>
        <li>
          <p className='tit'>{title[2]}</p>        
          <span className='date'>2022.06</span>        
        </li>
      </ul>

      <Modal/>
    </div>
  );
}

function Modal() {
  return (
    <div>
      <h2>modal</h2>
      <p>글 제목</p>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
