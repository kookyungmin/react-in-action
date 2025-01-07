import { bookables } from '../json/static.json';
import {useState} from "react";

export default function BookablesList() {
    const test = () => {
        console.log("###### LAZY INITIAL STATE");
        return 1;
    }
    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group = group);
    //지연 초기화
    const [ bookableIndex, setBookableIndex ] = useState(() => test());

    const nextBookable = () => {
        // setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
        // setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
        setBookableIndex((index) => (index + 1) % bookablesInGroup.length);
        setBookableIndex((index) => (index + 1) % bookablesInGroup.length);
    };

    return (
        <>
            <ul>
                {bookablesInGroup.map((bookables, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setBookableIndex(index)}>{bookables.title}</button>
                        {bookableIndex === index && "selected"}
                    </li>
                ))}
            </ul>
            <button onClick={nextBookable}>Next</button>
        </>
    )
}