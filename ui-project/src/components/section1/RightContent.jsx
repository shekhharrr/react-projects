import RightCard from './RightCard';

const RightContent = (props) => {

    return (
        <>
            <div className="h-full p-5 w-2/3 flex flex-nowrap gap-5">
            {
                props.urdata.map((d,i)=>{
                    return(
                        <>
                            <RightCard id={i} img={d.img} intro={d.intro} tags={d.tag} />
                        </>
                    )
                })
            }
                
            </div>
        </>
    )
}

export default RightContent