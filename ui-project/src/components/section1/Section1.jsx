import Navbar from "./Navbar"
import Page1Content from "./Page1Content"

const Section1 = (props) => {

    return (
        <>
            <Navbar />
            <Page1Content udata={props.data} />
        </>
    )
}

export default Section1