import { getAllVehicle } from "../utils/getAllVehicle";
import { SearchSection } from "@/components/SearchSection";
import { Suspense } from "react";
import { Loader } from "@/components/Loader";

export default async function Home() {
    const data = await getAllVehicle();

    return (
        <>
            <Suspense fallback={<Loader />}>
                <SearchSection data={data?.Results} />
            </Suspense>
        </>
    );
}
