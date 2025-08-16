import CustomCard from "../../utils/Card/CustomCard";
// Adjust the import path as needed

const Azkar = () => {
    return (
        <CustomCard
            header="أذكار الصباح و المساء"
            className="flex flex-col items-center text-center shadow-md"
            headerClassName="text-2xl font-bold mb-4"
            bodyClassName="flex flex-col gap-4 w-full max-w-xs"
        >
            <button className="bg-darkPurple text-white py-2 px-4 rounded-xl border border-gold hover:bg-green transition">
                أذكار الصباح
            </button>
            <button className="bg-darkPurple text-white py-2 px-4 rounded-xl border border-gold hover:bg-green transition">
                أذكار المساء
            </button>
        </CustomCard>
    );
};

export default Azkar;
