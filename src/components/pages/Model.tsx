import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {S} from './_styles'
export const Model = () => {
    const params = useParams()
const modelId = Number(params.id);
    //поиск модели в массиве по id
    const model = adidasArr.find(item => item.id === modelId)
    //если модель не найдена, то выводим сообщение или делаем редирект
    if(!model) {
        return <h2>модель не найдена</h2>
    }
    return (
        <S.ModelWrapper>
        <h2>{model.model}</h2>
            <h4>{model.collection}</h4>
            <h3>{model.price}</h3>

            <img src={model.picture}
                 alt={model.model}
                 />
        </S.ModelWrapper>
    )
}