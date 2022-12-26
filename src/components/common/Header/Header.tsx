import Icon from "../../ui/Icon";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-line-gray">
      <span className="text-base text-secondary-gray">ramon-ribeiro</span>

      <Icon name="MenuHam" width={18} height={16} />
    </header>
  );
}

export default Header;
