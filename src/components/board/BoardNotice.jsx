import React, { useState } from "react";
import '../../styles/Board.css'

const BoardNotice = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "공지사항 1", writer: "재현", date: "2025-01-20" },
    { id: 2, title: "공지사항 2", writer: "재현", date: "2025-01-21" },
    { id: 3, title: "공지사항 3", writer: "재현", date: "2025-01-22" },
    { id: 4, title: "공지사항 4", writer: "재현", date: "2025-01-23" },
    { id: 5, title: "공지사항 5", writer: "재현", date: "2025-01-24" },
    { id: 6, title: "공지사항 6", writer: "재현", date: "2025-01-25" },
    { id: 7, title: "공지사항 7", writer: "재현", date: "2025-01-26" },
    { id: 8, title: "공지사항 8", writer: "재현", date: "2025-01-27" },
    { id: 9, title: "공지사항 9", writer: "재현", date: "2025-01-28" },

  ]);
  //posts 는 빈배열로 초기값 설정하고 DB에서 존재하는 자료들로 fetch 한 후 그 데이터를
  //배열로 저장할 것.
  //현재 DB 부재로 인해 수기 작성으로 데이터 작성 추후 수정예정임
  //Question 페이지도 마찬가지임.
  

  return (
    <div>
        <h2>공지사항</h2>
        <table>
  <thead>
    <tr>
      <th>번호</th>
      <th>제목</th>
      <th>작성자</th>
      <th>작성일</th>
    </tr>
  </thead>
  <tbody>
    {posts.map((post, index) => (
      <tr key={post.id}>
        <td>{posts.length - index}</td>
        <td>{post.title}</td>
        <td>{post.writer}</td>
        <td>{post.date}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default BoardNotice;