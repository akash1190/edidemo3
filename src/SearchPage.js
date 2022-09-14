const SearchPage = ({ match, location }) => {
    return (
      <p>
        <strong>Location Props: </strong>
        {location.search}
      </p>
    );
  }

  export default SearchPage;