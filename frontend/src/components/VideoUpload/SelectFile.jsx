import React, { useEffect, useRef, useState } from "react";
import ErrorComp from "../ErrorComp";
import { MdDelete } from "react-icons/md";
import { MdUpload } from "react-icons/md";
import { TbReplace } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function SelectFile({ index, languages, setLanguages }) {
    const [error, setError] = useState("");
    const [showList, setShowList] = useState(false);
    const selectedLangs = languages.map(i => i.lang);
    const allLangs = ["Not Available", "Abkhazian",
        "Acehnese",
        "Acoli",
        "Afar",
        "Afrikaans",
        "Akan",
        "Albanian",
        "Alur",
        "Amharic",
        "Arabic",
        "Armenian",
        "Assamese",
        "Avaric",
        "Awadhi",
        "Aymara",
        "Azerbaijani",
        "Balinese",
        "Baluchi",
        "Bambara",
        "Bangla",
        "Baoulé",
        "Bashkir",
        "Basque",
        "Batak Karo",
        "Batak Simalungun",
        "Batak Toba",
        "Belarusian",
        "Bemba",
        "Betawi",
        "Bhojpuri",
        "Bikol",
        "Bosnian",
        "Breton",
        "Bulgarian",
        "Buriat",
        "Burmese",
        "Cantonese",
        "Catalan",
        "Cebuano",
        "Central Kurdish",
        "Chamorro",
        "Chechen",
        "Chiga",
        "Chinese (Simplified)",
        "Chinese (Traditional)",
        "Chuukese",
        "Chuvash",
        "Corsican",
        "Crimean Tatar",
        "Croatian",
        "Czech",
        "Danish",
        "Dari",
        "Dinka",
        "Divehi",
        "Dogri",
        "Dombe",
        "Dutch",
        "Dyula",
        "Dzongkha",
        "English",
        "Esperanto",
        "Estonian",
        "Ewe",
        "Faroese",
        "Fijian",
        "Filipino",
        "Finnish",
        "Fon",
        "French",
        "Friulian",
        "Fulani",
        "Ga",
        "Galician",
        "Ganda",
        "Georgian",
        "German",
        "Goan Konkani",
        "Greek",
        "Guarani",
        "Gujarati",
        "Haitian Creole",
        "Hakha Chin",
        "Hausa",
        "Hawaiian",
        "Hebrew",
        "Hiligaynon",
        "Hindi",
        "Hmong",
        "Hungarian",
        "Hunsrik",
        "Iban",
        "Icelandic",
        "Igbo",
        "Iloko",
        "Indonesian",
        "Irish",
        "Italian",
        "Jamaican Patois",
        "Japanese",
        "Javanese",
        "Jingpo",
        "Kalaallisut",
        "Kannada",
        "Kanuri",
        "Kazakh",
        "Khasi",
        "Khmer",
        "Kinyarwanda",
        "Kituba",
        "Kokborok",
        "Komi",
        "Kongo",
        "Korean",
        "Krio",
        "Kurdish",
        "Kyrgyz",
        "Lao",
        "Latgalian",
        "Latin",
        "Latvian",
        "Ligurian",
        "Limburgish",
        "Lingala",
        "Lithuanian",
        "Lombard",
        "Luo",
        "Luxembourgish",
        "Macedonian",
        "Madurese",
        "Maithili",
        "Makasar",
        "Malagasy",
        "Malay",
        "Malay (Arabic)",
        "Malayalam",
        "Maltese",
        "Mam",
        "Manipuri (Meitei Mayek)",
        "Manx",
        "Marathi",
        "Marshallese",
        "Marwari",
        "Meadow Mari",
        "Minangkabau",
        "Mizo",
        "Mongolian",
        "Morisyen",
        "Māori",
        "Nahuatl (Eastern Huasteca)",
        "Ndau",
        "Nepalbhasa (Newari)",
        "Nepali",
        "Nko",
        "Northern Sami",
        "Northern Sotho",
        "Norwegian",
        "Nuer",
        "Nyanja",
        "Occitan",
        "Odia",
        "Oromo",
        "Ossetic",
        "Pampanga",
        "Pangasinan",
        "Papiamento",
        "Pashto",
        "Persian",
        "Polish",
        "Portuguese",
        "Portuguese (Portugal)",
        "Punjabi",
        "Punjabi (Arabic)",
        "Q'eqchi'",
        "Quechua",
        "Romanian",
        "Romany",
        "Rundi",
        "Russian",
        "Samoan",
        "Sango",
        "Sanskrit",
        "Santali (Latin)",
        "Scottish Gaelic",
        "Serbian",
        "Seselwa Creole French",
        "Shan",
        "Shona",
        "Sicilian",
        "Silesian",
        "Sindhi",
        "Sinhala",
        "Slovak",
        "Slovenian",
        "Somali",
        "South Ndebele",
        "Southern Sotho",
        "Spanish",
        "Sundanese",
        "Susu",
        "Swahili",
        "Swati",
        "Swedish",
        "Tahitian",
        "Tajik",
        "Tamazight",
        "Tamazight (Tifinagh)",
        "Tamil",
        "Tatar",
        "Telugu",
        "Tetum",
        "Thai",
        "Tibetan",
        "Tigrinya",
        "Tiv",
        "Tok Pisin",
        "Tongan",
        "Tsonga",
        "Tswana",
        "Tulu",
        "Tumbuka",
        "Turkish",
        "Turkmen",
        "Tuvinian",
        "Udmurt",
        "Ukrainian",
        "Urdu",
        "Uyghur",
        "Uzbek",
        "Venda",
        "Venetian",
        "Vietnamese",
        "Waray",
        "Welsh",
        "Western Frisian",
        "Wolof",
        "Xhosa",
        "Yakut",
        "Yiddish",
        "Yoruba",
        "Yucatec Maya",
        "Zapotec",
        "Zulu",
        "alaallisut",
        "annada",
        "anuri",
        "aroese",
        "azakh",
        "hasi",
        "hmer",
        "ijian",
        "ilipino",
        "innish",
        "inyarwanda",
        "ituba",
        "okborok",
        "omi",
        "on",
        "ongo",
        "orean",
        "rench",
        "rio",
        "riulian",
        "ulani",
        "urdish",
        "yrgyz"].filter((i => !selectedLangs.includes(i)));
    const [filteredList, setFilteredList] = useState(allLangs);
    const searchRef = useRef(null);
    const fileRef = useRef(null);
    useEffect(() => {
        if (showList) searchRef.current.focus();
    }, [showList]);
    return (
        <div className="relative flex gap-4 items-center">
            <div className="border border-black rounded-md min-w-48 gap-4 flex items-center justify-between cursor-pointer hover:bg-black hover:bg-opacity-5" onClick={() => {
                setShowList(!showList);
            }}>
                <span className="text-lg text-blue-900 mx-2">{languages[index].lang}</span>
                <MdOutlineArrowDropDown />
            </div>
            {showList && <div className="shadow-lg shadow-black absolute top-0 bg-white rounded-2xl p-2 z-10" >
                <input ref={searchRef} type="text" name="search" id="" placeholder="Search..." onChange={(event) => {
                    setFilteredList(allLangs.filter((i) => {
                        return i.toLowerCase().includes(event.target.value.toLowerCase());
                    }))
                }} className="outline-none py-1 px-2  text-gray-800" onFocus={() => {
                    setShowList(true);
                }} />
                <button className="absolute top-2 right-4 hover:bg-gray-300 rounded-full p-1 " onClick={() => {
                    setShowList(false);
                    setFilteredList(allLangs);
                }}><IoIosCloseCircleOutline size={"2rem"} /></button>
                <ul className="h-48 overflow-auto px-4">
                    {
                        filteredList.map((i, j) => (
                            <li key={j} className="cursor-pointer hover:underline" onClick={() => {
                                languages[index].lang = i;
                                setShowList(false);
                                setFilteredList(allLangs);
                            }}>{i}</li>
                        ))
                    }
                </ul>
            </div>}
            {languages[index].file ? <div className="flex justify-between items-center w-full">
                <p className="line-clamp-1 text-lg font-light max-w-[85%] min-w-[85%]">{languages[index].file.name}</p>
                <div>
                    <button className="hover:bg-black hover:bg-opacity-10 p-2 rounded-full" onClick={() => {
                        fileRef.current.click();
                    }}>
                        <TbReplace />
                    </button>
                    {languages.length > 1 && <button className="hover:bg-black hover:bg-opacity-10 p-2 rounded-full" onClick={() => {
                        setLanguages(languages.filter((_, i) => i != index));
                    }}>
                        <MdDelete fill="red" />
                    </button>}
                </div>
            </div> :
                <button className="hover:bg-black hover:bg-opacity-10 p-2 rounded-full" onClick={() => {
                    fileRef.current.click();
                }}><MdUpload /></button>}
            <input
                ref={fileRef}
                type="file"
                onChange={(event) => {
                    setError("");
                    const file = event.target.files[0];
                    if (!file) return;
                    if (!["video/mp4", "video/mkv", "video/avi"].includes(file.type)) {
                        setError("Invalid file type! Kindly upload mp4/mkv/avi formats only.");
                        return;
                    }
                    languages[index].file = file;
                    setLanguages([...languages]);
                }}
                hidden />
            <ErrorComp message={error} design={"text-base"} />
        </div>
    )
}