import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #e1e9fc;
  width: 100%;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background-color: var(--lightBackCol);
    border-left: 4px solid #632ce4;
  }
  @media (max-width: 580px) {
    font-size: 18px;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Submenu = ({ item, showSidebar }) => {
  const closeSidebar = () => {
    // showSidebar();
    const x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
      showSidebar();
    }
  };

  return (
    <>
        <SidebarLink
          to={item.path}
          onClick={closeSidebar}
          exact={true}
          activeClassName="active"
        >
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
        </SidebarLink>
    </>
  );
};

export default Submenu;
