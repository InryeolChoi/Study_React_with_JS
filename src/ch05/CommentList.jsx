import React from "react";
import Comment from "./Comment";

const comment_arr = [
    {
        text1 : "최인렬",
        text2 : "첫 번째 컴포넌트",
    },
    {
        text1 : "최인렬",
        text2 : "두 번째 컴포넌트",
    },
    {
        text1 : "최인렬",
        text2 : "세 번째 컴포넌트",
    },
];

function CommentList(props) {
    return (
        <div>
            {comment_arr.map((x) => {
                return (
                    <Comment name={x.text1} Comment={x.text2} />
                );
            })}
        </div>
    );
}

export default CommentList;