import { Suspense } from "react";
import { generatePeriodData } from "@/utils/generatePeriodData";
import { getAllVehicle } from "@/utils/getAllVehicle";
import { ParamsType } from "@/types/ParamsType";
import { getModelData } from "@/utils/getModelData";
import { ModelList } from "@/components/ModelList";
import { EmptyPage } from "@/components/EmptyPage";
import { Section } from "@/components/Section";
import { Loader } from "@/components/Loader";

export async function generateStaticParams() {
    try {
        const data = await getAllVehicle();
        if (!data) {
            return [] as ParamsType[];
        }
        const makers = data.Results;
        const years = generatePeriodData();
        return makers.reduce((acc, item) => {
            const withYears = years.map(el => ({
                year: el.id.toString(),
                makeId: item.MakeId.toString(),
            }));
            return [...acc, ...withYears];
        }, [] as ParamsType[]);
    } catch {
        return [] as ParamsType[];
    }
}

export default async function Info({
    params,
}: {
    params: Promise<ParamsType>;
}) {
    const { makeId, year } = await params;
    const data = await getModelData(year, makeId);

    if (!data) {
        <EmptyPage year={year} />;
    }

    return (
        <Suspense fallback={<Loader />}>
            <Section>
                <h1 className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 md:mb-10">
                    List of {data?.Results[0].Make_Name} cars for the year{" "}
                    {year}
                </h1>

                <ModelList data={data?.Results} />
            </Section>
        </Suspense>
    );
}
