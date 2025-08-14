// surahs.js - Quran surahs (chapters) data
// PSEUDO CODE & LEARNING HINTS:

/*
DATA STRUCTURE PURPOSE:
- Store information about all 114 Quran surahs
- Include Arabic names, English names, and translations
- Add metadata like revelation place, verse count
- Organize for easy navigation and search

JAVASCRIPT CONCEPTS TO LEARN:
- Large data arrays
- Object property organization
- Data indexing and searching
- Unicode text handling

PSEUDO DATA STRUCTURE:
1. Array of surah objects (114 total)
2. Each surah contains:
   - Number (1-114)
   - Arabic name
   - English name
   - Translation of name
   - Revelation place (Mecca/Medina)
   - Number of verses
   - Opening verse (if applicable)

HINTS:
- Start with first few surahs for testing
- Use authentic Arabic names
- Include both transliterated and translated names
- Add revelation context
- Consider adding themes/topics
*/

// TODO: Create array of all 114 surahs
// TODO: Include Arabic and English names
// TODO: Add revelation place and verse counts
// TODO: Include name translations
// TODO: Add metadata for each surah
// TODO: Export the data

const surahs = [
  // Example structure:
  // {
  //   number: 1,
  //   arabicName: "الْفَاتِحَة",
  //   englishName: "Al-Fatihah",
  //   translation: "The Opening",
  //   revelationPlace: "Mecca",
  //   verseCount: 7,
  //   theme: "Opening prayer and guidance"
  // }
];

const revelationPlaces = [
  // TODO: Define revelation places
  // "Mecca", "Medina"
];

export { surahs, revelationPlaces };