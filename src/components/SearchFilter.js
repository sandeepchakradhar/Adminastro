import React from "react";
import { Button, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const SearchFilter = () => {
  return (
    <div>
      <form>
        <TextField
          id="search-bar"
          className="text"
          //   onInput={(e) => {
          //     setSearchQuery(e.target.value);
          //   }}
          label="Search Expert Name"
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon className=" ml-1" />
        </IconButton>

        <Button variant="outlined" color="info" >
          <FilterListIcon className="text-info" />
          <span className="text-info ml-1"> Filter</span>
        </Button>
      </form>
      
    </div>
  );
};

export default SearchFilter;
