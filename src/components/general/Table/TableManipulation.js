import React from "react";
import PropTypes from "prop-types";
import clsx from "classnames";
import Button from "components/General/Button/Button";
import { ReactComponent as Export } from "assets/icons/Export/export.svg";
import { ReactComponent as Filter } from "assets/icons/Filter/filter.svg";
import SearchBar from "components/General/Searchbar/SearchBar";

export default function Index({
  placeholder,
  onSearchClick,
  onSearchChange,
  searchValue,
  onFilter,
  onExport,
  className,
  searchClass = "hidden lg:flex",
}) {
  return (
    <div
      className={clsx(
        "flex flex-row justify-start items-center h-11 w-full rounded-lg space-x-3",
        className
      )}
    >
      <div className="w-full relative">
        <SearchBar
          placeholder={placeholder}
          onClick={onSearchClick}
          onChange={onSearchChange}
          value={searchValue}
          className={searchClass}
        />
      </div>
      <div className="flex justify-between items-center space-x-3">
        {onFilter && (
          <Button
            text="Filter"
            whiteBg
            icon={<Filter className="stroke-current" />}
            onClick={onFilter}
          />
        )}

        {onExport && (
          <Button
            whiteBg
            text="Export"
            icon={<Export className="stroke-current" />}
            onClick={onExport}
          />
        )}
      </div>
    </div>
  );
}

Index.propTypes = {
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  onSearchClick: PropTypes.func,
  onSearchChange: PropTypes.func,
  onFilter: PropTypes.func,
  onExport: PropTypes.func,
  className: PropTypes.string,
  searchClass: PropTypes.string,
};
