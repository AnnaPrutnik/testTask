import { ModelType } from "@/types/ModelType";

interface ModelCardProps {
    model: ModelType;
}

export const ModelCard = ({ model }: ModelCardProps) => {
    return (
        <li className="p-4 md:p-8 xl:p-10 border border-green-700 shadow-xl rounded-lg">
            <h2>
                <span className="font-bold">Model: </span>{" "}
                <span className="text-md xl:text-lg">{model.Model_Name}</span>
            </h2>
        </li>
    );
};
