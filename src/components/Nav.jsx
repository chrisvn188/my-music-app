import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const toggleLibrary = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <div className="nav">
      <div className="logo">WAVES</div>
      <button onClick={toggleLibrary}>
        <FontAwesomeIcon icon={faMusic} size="2x" />
      </button>
    </div>
  );
};

export default Nav;
