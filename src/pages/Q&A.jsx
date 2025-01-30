import React, { useState } from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import Button from "../components/Button";
import "../styles/qna.css"; // CSS 파일 불러오기

const QnA = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "공지사항 1", date: "2025-01-28" },
    { id: 2, title: "공지사항 2", date: "2025-01-27" },
  ]);
  const [editingPost, setEditingPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="qna-container">
      <div className="qna-box">
        <h1 className="qna-title">공지사항</h1>
        <table className="qna-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{posts.length - index}</td>
                <td>{post.title}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="qna-button-container">
          <Button onClick={() => setIsModalOpen(true)}>새 글 작성</Button>
        </div>
        {isModalOpen && <PostForm post={editingPost} onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default QnA;
