import { Titulo } from "./Titulo"

export const TituloAlt = ({condicion}) => {
if (condicion) {
    return <>
    <Titulo titulo= {'Titulo Alt'}/>
    </>
}
    return<>
    <Titulo titulo={'Titulo'}/>
    <Titulo titulo={'Falso'}/>
    </> 


}