import LeftContent from "./Leftcontent"
import RightContent from "./RightContent"

const Page1Content = (props) => {

    return (
        <>
            <div className="py-10 flex gap-10 items-center h-[90vh]  px-18">
                <LeftContent />
                <RightContent urdata={props.udata} />
            </div>
        </>
    )
}

export default Page1Content