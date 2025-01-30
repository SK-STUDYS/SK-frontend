import React, { useState } from "react";
import Button from "../components/Button";

const PostForm = ({ post, onSave, onClose }) => {
  const [title, setTitle] = useState(post ? post.title : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ id: post?.id || Date.now(), title, date: new Date().toISOString().split("T")[0] });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">{post ? "글 수정" : "새 글 작성"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border p-2 w-full mb-4"
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <Button type="button" onClick={onClose} className="bg-gray-300">취소</Button>
            <Button type="submit">저장</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
