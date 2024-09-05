import { Logo } from "ENTITIES/logo";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { linksSlice } from "SHARED/global-state/slices/links";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Header = styled.header`
  width: ${ptw(1368)};
  height: ${ptw(50)};
  border-radius: ${ptw(14)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${ptw(36)} ${ptw(36)} 0;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(60, 768)};
    margin: ${ptw(20, 768)} auto 0;
  }
`;

const Link = styled.a<{ $hovered: boolean }>`
  width: ${ptw(208)};
  height: ${ptw(50)};

  padding: ${ptw(10)} ${ptw(20)};
  gap: ${ptw(80)};
  border-radius: ${ptw(10)};

  color: white;
  background: ${(p) => (p.$hovered ? "#092433" : "#627580")};

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: ${ptw(214, 768)};
    height: ${ptw(60, 768)};
    font-size: ${ptw(16, 768)};
    line-height: ${ptw(20, 768)};
  }
`;

export default function HeaderComponent() {
  const dispatch = useDispatch_();

  const { header } = useSelector_((s) => s.linksSlice);

  const handleServiceHeader = () => {
    dispatch(
      linksSlice.actions.headerServiceRM({
        header: { ...header!, service: !header?.service },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.headerServiceRM({
        header: { ...header!, service: false },
      })
    );
  };

  return (
    <Header>
      <Logo>Brontosaur</Logo>
      <Link
        $hovered={header?.service!}
        href="https://brontosaur.ru"
        target="_blank"
        rel="noopener noreferrer"
        onTouchStart={handleServiceHeader}
        onTouchEnd={handleLeave}
        onMouseEnter={handleServiceHeader}
        onMouseLeave={handleLeave}
      >
        На страницу сервиса
      </Link>
    </Header>
  );
}
