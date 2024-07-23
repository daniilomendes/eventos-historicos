import React, { useEffect, useState } from "react";

interface Props {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const Filter = ({ setSelectedCategory }: Props) => {
  const [theme, setTheme] = useState("dark-theme");

  const categories = [
    "Guerra",
    "Arte",
    "Ciência",
    "Política",
    "Religião",
    "Esporte",
    "Outro",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <div className="filter">
      <div className="filter__select">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todos</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="theme-toggler">
        <input
          type="checkbox"
          id="theme-toggler__checkbox"
          className="theme-toggler__checkbox"
        />
        <label
          htmlFor="theme-toggler__checkbox"
          className="theme-toggler__label"
          onClick={changeTheme}
        >
          toggle
        </label>
      </div>
    </div>
  );
};

export default Filter;
