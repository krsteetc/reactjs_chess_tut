import {Tutorial} from "../Components/Tutorials-Components/Tutorial";

export function Tutorials() {

    const MOCK_TUTORIALS = [
        {
            id: 1,
            title: 'Mastering Double Rook Checkmate',
            description: 'In this comprehensive chess tutorial, we delve into the powerful and elegant checkmate technique using two rooks. Unleash the full potential of your rooks on the board and learn strategic maneuvers to corner your opponent\'s king. Whether you\'re a novice looking to enhance your endgame skills or an experienced player aiming to refine your checkmating techniques, this tutorial provides a step-by-step guide to achieving checkmate supremacy with the dynamic duo of rooks.',
            fen:'r7/8/8/8/8/8/5RR1/7K w KQkq - 0 1'
        }
    ]

    return (
       <div className='Tutorials'>
           {MOCK_TUTORIALS.map((tutorial) => {
               return (
               <Tutorial
                   key={tutorial.id}
                   title={tutorial.title}
                   description={tutorial.description}
                   fen={tutorial.fen}
               />
               )})}
       </div>
    )
}