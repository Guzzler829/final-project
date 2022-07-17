import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"

export default function Post(props) {
    if(props.type == "image"){
        return (
            <div className="post">
                <h2>{props.title}</h2>
                <img src={props.imgSrc} />
                <div className="post-footer">
                    <ButtonGroup>
                        <Button variant="secondary">Commments</Button>
                        <Button variant="secondary">Share</Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <div className="post-footer">
                <ButtonGroup>
                    <Button variant="secondary">Commments</Button>
                    <Button variant="secondary">Share</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}