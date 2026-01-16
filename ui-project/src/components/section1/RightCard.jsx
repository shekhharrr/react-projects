import RightCardContent from './RightCardContent';

const RightCard = (props) => {

    return (
        <>
            <div className="h-full overflow-hidden relative w-70 rounded-3xl shrink-0">
                <img className="h-full w-full object-cover" src={props.img} />
                <RightCardContent id={props.id} intro={props.intro} tags={props.tags} />
            </div>
        </>
    )
}

export default RightCard