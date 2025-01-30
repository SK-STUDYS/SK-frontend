import React from "react";
import Button from "../components/Button";

const PostCard = ({ post, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-gray-500 text-sm">{post.date}</p>
      </div>
      <div className="flex space-x-2">
        <Button onClick={onEdit} className="bg-blue-500">수정</Button>
        <Button onClick={onDelete} className="bg-red-500">삭제</Button>
      </div>
    </div>
  );
};

export default PostCard;
