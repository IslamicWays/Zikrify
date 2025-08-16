import CustomCard from "../../utils/Card/CustomCard";
// Adjust the import path as needed

const Azkar = () => {
    return (
        <div className="h-full">
            <CustomCard
                header="أذكار الصباح و المساء"
                className="h-full flex flex-col items-center text-center"
                headerClassName="text-lg font-bold mb-4"
                bodyClassName="flex-1 flex flex-col justify-center gap-4 w-full max-w-xs"
            >
                <button className="bg-darkPurple text-white py-3 px-4 rounded-xl border border-gold hover:bg-green transition-colors duration-200 font-medium">
                    أذكار الصباح
                </button>
                <button className="bg-darkPurple text-white py-3 px-4 rounded-xl border border-gold hover:bg-green transition-colors duration-200 font-medium">
                    أذكار المساء
                </button>
            </CustomCard>
        </div>
    );
};

export default Azkar;
