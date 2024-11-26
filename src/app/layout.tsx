import "./globals.css";
import "./metrika";

import { Body } from "ENTITIES/body";
import type { Metadata } from "next";

type TRootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const meta = {
  title: "Главная",
  description:
    "Добро пожаловать в Brontosaur - инновационную платформу для бронирования столов. Найдите идеальное место для встречи быстро и удобно. Погрузитесь в мир Brontosaur!",
  images: "https://storage.yandexcloud.net/brontosaur/logo/symbol_color.png",
  url: "https://promo.brontosaur.ru",
  keywords: [
    "бронирование столов",
    "рестораны",
    "кафе",
    "онлайн-бронирование",
    "ресторанный сервис",
    "Управление бронями",
    "гид в мире ресторанов",
  ],
  robots: "index, follow",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  robots: meta.robots,
  verification: {
    google: "Fpp0pxGH4FRoJedVDvgieCaGz09z0C9pvCy_zTRoQCw",
    yandex: "e74c25232f52b3b6",
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    images: meta.images,
    url: meta.url,
    type: "website",
    siteName: "Brontosaur promo",
    locale: "ru_RU",
  },
};

export default function RootLayout(props: TRootLayoutProps) {
  return (
    <html lang="ru">
      <Body>
        <>{props.children}</>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98271362"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </Body>
    </html>
  );
}
