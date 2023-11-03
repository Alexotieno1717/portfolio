import styled from "styled-components";

interface NavProps {
    $scrollPosition: number;
    $collapsed: boolean;
    $colors?:{
        bg:string;
        buttonColor: string;
    }
}

const Nav = styled.nav<NavProps>`
  background: ${(props) =>
    props.$collapsed === true || props.$scrollPosition > 10
      ? props?.$colors?.bg
      : "transparent"};

  }
  `;


export { Nav}