import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {

    return (
        <>
            <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
                    <h2 className="bg-amber-50 rounded-full h-8 w-8 flex justify-center items-center font-bold">{props.id+1}</h2>
                    <div>
                        <p className="leading-normal text-xl text-white">{props.intro}</p>
                        <div className="flex justify-between mt-5">
                            <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full'>{props.tags}</button>
                            <button className="bg-blue-600 text-white font-semibold px-3 py-3 rounded-full"><ArrowRight size='16' /></button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default RightCardContent