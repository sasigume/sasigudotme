import React, { FunctionComponent } from "react";
import { Comment } from "./comment.type";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  comment: Comment;
  disabled: boolean;
}

export const CommentForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  comment,
  disabled
}) => (
  <form onSubmit={onAdd} className="flex my-3">
    <input className="flex-grow py-2 pl-2 bg-gray-700 rounded-l-lg" onChange={onChange} value={comment.name} />
    <button className="w-40 py-2 px-2 bg-red-900 rounded-r-lg" disabled={disabled} type="submit">
      コメントする
    </button>
  </form>
);
