import "../styles/FAQ.css"
import { useState } from "react";

function FAQ() {

    const [selected, setSelected] = useState(null)

const toggle = (i) => {
    if (selected === i){
        return( 
            setSelected (null)
        );
    }
    setSelected(i)
}

    return(
        <div className="accordian">
                <h2>Frequently asked question</h2>
    {data.map((item,i) => (
        <div className="item" > 
        
            <div className="title" onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
                </div>

        </div>
    ))}
</div>

       
    )
}


const data =  [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat.`,
    },

    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat.`,
    },

    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
        ut aliquip ex ea commodo consequat.`,
    },
];

export default FAQ