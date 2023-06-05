import { Icon } from "@iconify/react";
import { useState } from "react";

function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };

  const languages = [
    {
      flag: "/images/flag/flag-indonesia.png",
      name: "ID",
    },
    {
      flag: "/images/flag/flag-england.png",
      name: "ENG",
    },
  ];

  return (
    <>
      <div className="relative">
        <div className="flex items-center cursor-pointer gap-1" onClick={open}>
          <img
            alt="flag"
            src={languages[selectedLanguage].flag}
            className="h-[30px] w-[30px]"
          />
          <p className="text-sm text-grey800">
            {languages[selectedLanguage].name}
          </p>
          <div className="text-grey800">
            <Icon icon="bx:chevron-down" fontSize="20px" />
          </div>
        </div>

        {isOpen ? (
          <>
            <div
              className="absolute flex flex-col bg-white rounded min-w-[150px]"
              style={{ boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)" }}
            >
              {languages.map((lang, index) => (
                <div
                  className="flex items-center gap-2 p-5 hover:bg-grey200 cursor-pointer rounded"
                  key={lang.name}
                  onClick={() => {
                    setSelectedLanguage(index);
                    open();
                  }}
                >
                  <img
                    alt="flag"
                    src={lang.flag}
                    className="h-[30px] w-[30px]"
                  />
                  {lang.name}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default SelectLanguage;
