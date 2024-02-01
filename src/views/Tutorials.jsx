import {fenToSquaresConvertor, initialPositions} from "../utils";
import {Title} from "../Components/Tutorials-Components/Title";
import {Description} from "../Components/Tutorials-Components/Description";
import Board from "../Components/Board-Components/Board";
import '.././Components/Tutorials-Components/Tutorials.css'

export function Tutorials() {

    const MOCK_TUTORIALS = [
        {
            id: 1,
            type: 'title',
            title: 'Mastering Double Rook Checkmate'
        },
        {
            id: 2,
            type: 'description',
            description: 'In this comprehensive chess tutorial, we delve into the powerful and elegant checkmate technique using two rooks. Unleash the full potential of your rooks on the board and learn strategic maneuvers to corner your opponent\'s king. Whether you\'re a novice looking to enhance your endgame skills or an experienced player aiming to refine your checkmating techniques, this tutorial provides a step-by-step guide to achieving checkmate supremacy with the dynamic duo of rooks.',
        },
        {
            id: 3,
            type: 'fen',
            fen:'r7/8/8/8/8/8/5RR1/7K w KQkq - 0 1'
        }
    ]

    return (
        <div className='Tutorials'>
            {MOCK_TUTORIALS.map((component) => {
                switch (component.type) {
                    case 'title':
                        return <Title title={component.title} key={component.id} />;
                    case 'description':
                        return <Description description={component.description} key={component.id} />;
                    case 'fen':
                        const squares = component.fen ? fenToSquaresConvertor(component.fen, initialPositions) : initialPositions
                        return <div className='Board' key={component.id}> <Board squares={squares} /> </div>;
                    default:
                        return null;
                }
            })}
        </div>
    );

}