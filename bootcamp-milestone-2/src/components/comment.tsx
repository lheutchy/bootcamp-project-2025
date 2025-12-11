import style from "./comment.module.css"

export interface IComment {
  user: string;
  comment: string;
  time: Date;
}

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){
	return time.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{parseCommentTime(comment.time)}</span>
        </div>
    );
}

export default Comment;