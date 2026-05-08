function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ width: "100%", padding: "8px", margin: "10px 0" }}
    />
  );
}

export default SearchBar;