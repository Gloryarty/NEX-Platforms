import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import searchData from "../res/searchData.json";

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

export default function Search({
  className,
  onInitialMode = false,
  onAction = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.click();
  },
}) {
  const [searchStr, setSearchStr] = useState("");
  const [searchMode, setSearchMode] = useState(() => onInitialMode);
  const [results, setResults] = useState([]);
  const router = useRouter();
  const [inputRef, setInputFocus] = useFocus();

  useEffect(() => {
    if (onInitialMode) {
      setInputFocus();
    }
  }, []);

  const search = (value) => {
    setSearchStr(value);
    const nSearch = value.toLowerCase().trim();
    if (nSearch === "") {
      setResults([]);
      return;
    }

    const f1 = searchData.filter(
      (item) =>
        item.name.toLowerCase().includes(nSearch) &&
        item.comingSoon != "Coming Soon"
    );

    setResults(f1);
  };

  const handleItemClick = (url) => () => {
    setSearchMode(false);
    setSearchStr("");
    onAction(url);
  };

  return (
    <div className={`search ${className}`}>
      <i className="ri-search-2-line"></i>
      <input
        ref={inputRef}
        className={`${results.length > 0 && searchMode && "searchInputMode"}`}
        onClick={() => setSearchMode(true)}
        value={searchStr}
        onChange={(e) => search(e.target.value)}
        type="text"
        placeholder="Search"
      ></input>
      {searchMode && (
        <>
          <div
            className={`searchResults ${
              searchStr === "" && results.length === 0 && "hide"
            }`}
          >
            {results.map((item, index) => (
              <div
                key={index}
                className="item"
                onClick={handleItemClick(item.link)}
              >
                <div
                  style={{
                    backgroundImage: "url(" + item.squareImage + ")",
                  }}
                  className="cover"
                ></div>
                <div className="title">{item.name}</div>
              </div>
            ))}
            {searchStr !== "" && results.length === 0 && (
              <>
                <div key={0} className="item noResult">
                  <div className="title" style={{ textAlign: "center" }}>
                    No Results Found
                  </div>
                </div>

                <div
                  onClick={() => router.push("/games")}
                  key={1}
                  className="item viewAllGames"
                >
                  <div className="title" style={{ textAlign: "center" }}>
                    View all Games
                  </div>
                </div>
              </>
            )}
          </div>
          <div
            onClick={() => {
              onAction();
              setSearchMode(false);
            }}
            className="touchBlocker"
          ></div>
        </>
      )}
    </div>
  );
}
