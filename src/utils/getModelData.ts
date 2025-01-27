import { ResponseType } from "../types/ResponseType";
import { ModelType } from "../types/ModelType";

const URL = process.env.NEXT_PUBLIC_URL || "";

export const getModelData = async (year: string, makeId: string) => {
    try {
        const data: ResponseType<ModelType> = await fetch(
            `${URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        ).then(res => res.json());
        return data;
    } catch {
        return null;
    }
};
