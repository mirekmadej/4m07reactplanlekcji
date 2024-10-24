import './Wiersz.css';

function Wiersz(props)
{
    return(
        <>
            <tr>
                {Object.keys(props.dane).map((e) => <td key={e}>{props.dane[e]}</td>)}
            </tr>
        </>
    );
};
export default Wiersz;