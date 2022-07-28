export default function NotFound () {
    return (
        <div className="four-zero-four">
            <h1>404: Not Found</h1>
            <p>Looks like we couldn't find that page.</p>
            <img src='https://images.emojiterra.com/twitter/v14.0/512px/1f914.png' alt="Thinking emoji" width={300} height={300} />
            <div className="magnifier-container">
                <div className="magnifier"></div>
            </div>
        </div>
    );
}