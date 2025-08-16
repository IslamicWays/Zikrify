const Azkar= () => {
  return (
    <div className="bg-purple border-2 border-gold rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
      <h2 className="text-gold text-2xl font-bold mb-4">
        أذكار الصباح و المساء
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="bg-darkPurple text-white py-2 px-4 rounded-xl border border-gold hover:bg-green transition">
          أذكار الصباح
        </button>

        <button className="bg-darkPurple text-white py-2 px-4 rounded-xl border border-gold hover:bg-green transition">
          أذكار المساء
        </button>
      </div>
    </div>
  );
}
export default Azkar;