export default function Comment(props) {
    return (
        <div className="comment-container">
            <p className="username">{props.user}</p>
            <p className="comment-text">{props.text}</p>
            <p className="post-date">{props.date}</p>
        </div>
    );
}