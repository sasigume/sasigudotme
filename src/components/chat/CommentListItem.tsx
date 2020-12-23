import React, { FunctionComponent } from "react";

import { Comment } from "./comment.type";

interface Props {
  comment: Comment;
  onDelete: (comment: Comment) => void;
}

export const CommentListItem: FunctionComponent<Props> = ({ comment, onDelete }) => {
  const onClick = () => {
    onDelete(comment);
  };

  return (
    <div className="flex items-center justify-between py-2 last:border-b-0 border-b border-gray-400">
      アンチ: {comment.name} <button className="bg-black p-2" onClick={onClick}>削除</button>
    </div>
  );
};
