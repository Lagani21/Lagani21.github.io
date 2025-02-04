export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Add Afacad Flux Google Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100;300;400;500;700&display=swap"
        />
      </head>
      <body className="font-custom">{children}</body>
    </html>
  );
}
