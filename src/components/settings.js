export default function Settings(props) {
    return (
        <div className="settings-container">
            <p>Default view:</p>
                <span className="switch-label">Card</span>
                <input type={"checkbox"} className="switch"></input>
                <span className="switch-label">Classic</span>
            
        </div>
    );
}