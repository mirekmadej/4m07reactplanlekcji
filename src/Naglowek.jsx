import './Naglowek.css';
const naglowek = ["Nr", "Godzina", "Poniedziałek", "Wtorek", "Środa", 'Czwartek', "Piątek"];
function Naglowek()
{
    return(
        <>
            <tr>
               {naglowek.map((e) => <td key={e}>{e}</td>)}
            </tr>
        </>
    )
};

export default Naglowek;