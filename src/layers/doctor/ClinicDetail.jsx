import DisType from "../../component/links/DisType";
import RegisterNavbar from "../../component/navbar/RegisterNavbar";
import {clinics}  from "../../api"
import vitalem from '../../images/vitalem-clinic.svg'
import keruen from '../../images/keruen.svg'
import persona from '../../images/persona-clinics.svg'
import health from '../../images/health-city.svg'
import private_ from '../../images/private-clinics.svg'

const names = [
    'Vitalem Clinics',
    'Health City',
    'Persona Clinics',
    'Private Clinics',
    'Keruen Medicus'
];
const ar = [
    "Мы раскрываем секреты здоровья и помогаем управлять болезнями (1)",
    "Мы раскрываем секреты здоровья и помогаем управлять болезнями (2)",
    "Мы раскрываем секреты здоровья и помогаем управлять болезнями (3)",
    "Мы раскрываем секреты здоровья и помогаем управлять болезнями (4)",
    "Мы раскрываем секреты здоровья и помогаем управлять болезнями (5)",
]
const arrImg = [
    vitalem,health,persona,private_,keruen
]

export default function ClinicDetail({match}){
    const {
        params: {clinicId}
    } = match
    const styled = {
        "text-align" : "center"
    }
    return(
        <div>
            <div style={styled}>
                <img src={arrImg[clinicId - 1]} alt=""/>
            </div>
            <h2>
                {
                    names[clinicId - 1]
                }
            </h2>
            <span>
                {
                    ar[clinicId - 1]
                }
            </span>

        </div>
    )
}