"use client";
import { useState, ChangeEvent } from "react";
import { DropDown } from "./DropDown";
import { VehicleType } from "@/types/VihecleType";
import { generatePeriodData } from "@/utils/generatePeriodData";
import { Button } from "./Button";

interface SearchSectionProps {
    data: VehicleType[] | undefined;
}

export const SearchSection = ({ data }: SearchSectionProps) => {
    const [company, setCompany] = useState("");
    const [year, setYear] = useState("");

    const onChangeMakeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCompany(e.target.value);
    };

    const onChangeYearSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    };

    if (!data) {
        return null;
    }

    const periodData = generatePeriodData();

    return (
        <section className="p-4 md:p-10 xl:p-20">
            <div className="flex flex-col md:flex-row gap-10">
                <DropDown
                    data={data}
                    idKey="MakeId"
                    nameKey="MakeName"
                    name="company"
                    value={company}
                    onChangeValue={onChangeMakeSelect}
                    defaultPlaceholder={"Choose a manufacturer"}
                />
                <DropDown
                    data={periodData}
                    idKey="id"
                    nameKey="name"
                    name="year"
                    value={year}
                    onChangeValue={onChangeYearSelect}
                    defaultPlaceholder={"Choose a year"}
                />
            </div>
            <div className="py-10 ">
                <Button makeId={company} year={year} />
            </div>
        </section>
    );
};
