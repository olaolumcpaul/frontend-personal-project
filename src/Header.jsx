import PropTypes from "prop-types";

const Header = ({ setSearchFilter }) => {
  return (
    <header className="header">
      <h1>Task Manager</h1>

      {/* Unified search bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by text, priority, or date (YYYY-MM-DD)..."
        onChange={(e) => setSearchFilter(e.target.value)}
      />
    </header>
  );
};

Header.propTypes = {
  setSearchFilter: PropTypes.func.isRequired,
};

export default Header;
