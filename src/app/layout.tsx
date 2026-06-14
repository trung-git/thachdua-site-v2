import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dừa Yoga — Yoga Cá Nhân Hóa",
  description:
    "An toàn và hiệu quả — giúp học viên khỏe hơn, linh hoạt hơn, cảm nhận rõ cơ thể trong từng chuyển động thông qua kiến thức giải phẫu sâu và lộ trình cá nhân hóa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-stone-900">
        {children}
      </body>
    </html>
  );
}
