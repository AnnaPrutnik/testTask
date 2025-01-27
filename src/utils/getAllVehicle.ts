const URL = process.env.NEXT_PUBLIC_URL || "";
import { ResponseType } from "../types/ResponseType";
import { VehicleType } from "../types/VihecleType";

export const getAllVehicle = async () => {
    try {
        const data: ResponseType<VehicleType> = await fetch(
            `${URL}/GetMakesForVehicleType/car?format=json`
        ).then(res => res.json());
        return data;
    } catch {
        return null;
    }
};
