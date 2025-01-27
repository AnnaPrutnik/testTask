import { ModelType } from "@/types/ModelType";
import { ModelCard } from "./ModelCard";

interface ModelListProps {
    data: ModelType[] | undefined;
}

export const ModelList = ({ data }: ModelListProps) => {
    if (!data) {
        return <div>Nothing to render</div>;
    }
    return (
        <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 ">
            {data.map(el => (
                <ModelCard key={el.Model_ID} model={el} />
            ))}
        </ul>
    );
};
