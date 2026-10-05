import Button from 'react-bootstrap/Button';

function Card({ titulo, content }) {
    return (
        <div className="card text-bg-primary mt-2 mb-2">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{content}</p>

                <Button variant="danger">Saiba mais</Button>
            </div>
        </div>
    )
}

export default Card;