import React, { FunctionComponent } from "react";

import { Comment } from "./comment.type";

interface Props {
  comment: Comment;
  onDelete: (comment: Comment) => void;
}

export const CompletedCommentListItem: FunctionComponent<Props> = ({
  comment,
  onDelete
}) => {
  const onClick = () => {
    onDelete(comment);
  };

  return (
    <>
      <li className="p-3 bg-black line-through text-red-800">
        <span className="strike">アンチ: {comment.name}&nbsp;</span>
        <button className="bg-gray-800 p-2" onClick={onClick}>取り消す</button>
      </li>
    </>
  );
};
