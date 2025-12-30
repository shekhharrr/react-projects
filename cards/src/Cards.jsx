import {Bookmark} from "lucide-react"

const Cards = (props) => {

    return(
        <>
            <div className="container">
                <div className="header">
                    <img src={props.image} />
                    <button>Save <Bookmark size="15px" /> </button>
                </div>
                <div className="body">
                    <h4>{props.company}<span> {props.date}</span></h4>
                    <h3>{props.post}</h3>
                    <div className="y">
                        <p>{props.t1}</p>
                        <p>{props.t2}</p>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                        <button>Apply now</button>
                </div>
            </div>
        </>
    )
}

export default Cards;