import React, { useState } from "react";
import '../../styles/Board.css'
const BoardQuestion = () => {
    const [posts, setPosts] = useState([
        { id: 1, category: "교환/반품", title: "aa" },
        { id: 2, category: "선물하기", title: "bb" },
        { id: 3, category: "교환/반품", title: "cc" },
        { id: 4, category: "포장", title: "dd" },
        { id: 5, category: "회원정보", title: "ee" },
        { id: 6, category: "서비스이용", title: "ff" },
        { id: 7, category: "배송", title: "gg" },
        { id: 8, category: "시스템오류", title: "hh" },
        { id: 9, category: "기타", title: "ii" },
      ]);
    return (
    <div>
        <h2>자주묻는질문</h2>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>카테고리</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{posts.length - index}</td>
                <td>{post.category}</td>
                <td>{post.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    );
};

export default BoardQuestion;