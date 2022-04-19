import React, { useState } from "react";
import { useDebouncedEffect } from "./useDebouncedEffect";

export default function Searchbar({ setSearchString }) {
  const [internal_search, setInternalSearch] = useState("");

  useDebouncedEffect(
    () => setSearchString(internal_search),
    [internal_search],
    500
  );

  return (
    <div className="col-lg-12 text-center mt-20">
      <input
        type="text"
        className="form-control input-cstm p-0-45"
        name
        placeholder="Search"
        onChange={(e) => setInternalSearch(e.target.value)}
        value={internal_search}
      />
      <i className="fas fa-search icon-search" />
      <button type="button" className="btn-orange btn-search">
        SEARCH
      </button>
    </div>
  );
}
