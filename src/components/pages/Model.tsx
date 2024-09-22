import {adidasArr, AdidasItemType} from "./Adidas";
import {useParams} from "react-router-dom";
import {S} from './_styles'
import {pumaArr, PumaItemType} from "./Puma";


type CrossModelsType = {
   [ key: string] : AdidasItemType[] | PumaItemType[]
}

// Массивы моделей
const crossModels : CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}
export const Model = () => {
    const { model, id } = useParams<{ id: string; model: string }>();  // Получаем model + id из параметров URL

    const modelId = Number(id);  // Преобразуем id в число
    console.log(model) //для отладки

    // Приведение типа model к строке
    const modelsArray = crossModels[model as string];

    // Поиск модели в массиве по id
    const currentModel = modelsArray?.find((item: AdidasItemType | PumaItemType) => item.id === modelId) ?? null;
    //если модель не найдена, то выводим сообщение или делаем редирект
    if(!currentModel) {
        return <h2>модель не найдена</h2>
    }
    // Отображаем найденную модель
    return (
        <S.ModelWrapper>
        <h2>{currentModel.model}</h2>
            <h4>{currentModel.collection}</h4>
            <h3>{currentModel.price}</h3>

            <img src={currentModel.picture}
                 alt={currentModel.model}
                 />
        </S.ModelWrapper>
    )
}