"use client";

import { MobileImage, PcImage, StyledImage } from "ENTITIES/image";
import { Logo } from "ENTITIES/logo";
import { useDispatch_, useSelector_ } from "SHARED/global-state";
import { linksSlice } from "SHARED/global-state/slices/links";
import { ptw } from "SHARED/pixel-recalculate";
import styled from "styled-components";

const Footer = styled.footer`
  width: ${ptw(1368)};
  height: ${ptw(282)};
  border-radius: ${ptw(14)};

  background: #627580;
  margin: 0 auto ${ptw(36)};
  padding: ${ptw(40)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: ${ptw(728, 768)};
    height: ${ptw(382, 768)};
    border-radius: ${ptw(14, 768)};
    margin: 0 auto ${ptw(20, 768)};
    padding: ${ptw(40, 768)};
    flex-direction: column;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: ${ptw(60, 768)};
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${ptw(30)};

  @media (max-width: 768px) {
    gap: ${ptw(30, 768)};
  }
`;

const Telephone = styled.a`
  width: ${ptw(230)};
  height: ${ptw(32)};

  font-family: Raleway;
  font-size: ${ptw(24)};
  font-weight: 600;
  line-height: ${ptw(32)};
  text-align: left;

  color: white;
  transform: translate(0, ${ptw(-3)});

  @media (max-width: 768px) {
    width: ${ptw(230, 768)};
    height: ${ptw(32, 768)};
    font-size: ${ptw(24, 768)};
    line-height: ${ptw(32, 768)};
  }
`;

const Email = styled(Telephone)`
  transform: translate(0, 0);
`;

const Links = styled.div`
  display: flex;
  gap: ${ptw(24)};
  transform: translate(0, ${ptw(5.5)});
  @media (max-width: 768px) {
    gap: ${ptw(20, 768)};
  }
`;

const Link = styled.a<{ $hovered: boolean }>`
  width: ${ptw(284)};
  height: ${ptw(50)};
  padding: ${ptw(10)} ${ptw(20)};
  border-radius: ${ptw(10)};

  font-family: Raleway;
  font-size: ${ptw(14)};
  font-weight: 500;
  line-height: ${ptw(18)};
  text-align: left;

  background: ${(p) => (p.$hovered ? "#092433" : "#fff")};
  color: ${(p) => (p.$hovered ? "#fff" : "#627580")};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: ${ptw(214, 768)};
    height: ${ptw(60, 768)};
    padding: ${ptw(15, 768)} ${ptw(20, 768)};
    border-radius: ${ptw(10)};
    font-size: ${ptw(14, 768)};
    line-height: ${ptw(18, 768)};
  }
`;

export default function FooterComponent() {
  const dispatch = useDispatch_();

  const { footer } = useSelector_((s) => s.linksSlice);

  const handleVkFooter = () => {
    dispatch(
      linksSlice.actions.footerVkRM({
        footer: { ...footer!, vk: !footer?.vk },
      })
    );
  };

  const handleTgFooter = () => {
    dispatch(
      linksSlice.actions.footerTgRM({ footer: { ...footer!, tg: !footer?.tg } })
    );
  };

  const handleServiceFooter = () => {
    dispatch(
      linksSlice.actions.footerServiceRM({
        footer: { ...footer!, service: !footer?.service },
      })
    );
  };

  const handleLeave = () => {
    dispatch(
      linksSlice.actions.footerVkRM({ footer: { ...footer!, vk: false } })
    );
    dispatch(
      linksSlice.actions.footerTgRM({ footer: { ...footer!, tg: false } })
    );
    dispatch(
      linksSlice.actions.footerServiceRM({
        footer: { ...footer!, service: false },
      })
    );
  };

  return (
    <Footer>
      <Box>
        <Logo style={{ filter: "invert()" }}>Brontosaur</Logo>
        <Contacts>
          <Telephone href="tel:+79516878803">+7-951-687-88-03</Telephone>
          <Email href="mailto:fox.spb@bk.ru">fox.spb@bk.ru</Email>
        </Contacts>
      </Box>
      <Links>
        <a
          href="https://vk.com/brontosaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PcImage>
            <StyledImage
              src={
                footer?.vk
                  ? "https://storage.yandexcloud.net/brontosaur/promo-site/assets/vk_icon_50_black.svg"
                  : "https://storage.yandexcloud.net/brontosaur/promo-site/assets/vk_icon_50.svg"
              }
              width={50}
              height={50}
              onTouchStart={handleVkFooter}
              onTouchEnd={handleLeave}
              onMouseEnter={handleVkFooter}
              onMouseLeave={handleLeave}
            ></StyledImage>
          </PcImage>
          <MobileImage>
            <StyledImage
              src={
                footer?.vk
                  ? "https://storage.yandexcloud.net/brontosaur/promo-site/assets/vk_icon_50_black.svg"
                  : "https://storage.yandexcloud.net/brontosaur/promo-site/assets/vk_icon_50.svg"
              }
              width={60}
              height={60}
              onTouchStart={() => handleVkFooter}
              onTouchEnd={handleLeave}
              onMouseEnter={handleVkFooter}
              onMouseLeave={handleLeave}
            ></StyledImage>
          </MobileImage>
        </a>
        <a
          href="https://t.me/DenBrontosaur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PcImage>
            <StyledImage
              src={
                footer?.tg
                  ? "https://storage.yandexcloud.net/brontosaur/promo-site/assets/tg_icon_50_black.svg"
                  : "https://storage.yandexcloud.net/brontosaur/promo-site/assets/tg_icon_50.svg"
              }
              width={50}
              height={50}
              onTouchStart={handleTgFooter}
              onTouchEnd={handleLeave}
              onMouseEnter={handleTgFooter}
              onMouseLeave={handleLeave}
            ></StyledImage>
          </PcImage>
          <MobileImage>
            <StyledImage
              src={
                footer?.tg
                  ? "https://storage.yandexcloud.net/brontosaur/promo-site/assets/tg_icon_50_black.svg"
                  : "https://storage.yandexcloud.net/brontosaur/promo-site/assets/tg_icon_50.svg"
              }
              width={60}
              height={60}
              onTouchStart={handleTgFooter}
              onTouchEnd={handleLeave}
              onMouseEnter={handleTgFooter}
              onMouseLeave={handleLeave}
            ></StyledImage>
          </MobileImage>
        </a>
        <Link
          $hovered={footer?.service!}
          href="https://brontosaur.ru"
          target="_blank"
          rel="noopener noreferrer"
          onTouchStart={handleServiceFooter}
          onTouchEnd={handleLeave}
          onMouseEnter={handleServiceFooter}
          onMouseLeave={handleLeave}
        >
          На страницу сервиса
        </Link>
      </Links>
    </Footer>
  );
}
