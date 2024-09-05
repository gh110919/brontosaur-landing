import "./globals.css";

type TRootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: TRootLayoutProps) {
  return <html lang="ru">{props.children}</html>;
}
