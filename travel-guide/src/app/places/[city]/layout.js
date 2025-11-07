export default function Layout({ children, info, des }) {
  return (
    <html lang="en">
      <body className={""}>
        <div className="flex p-20 w-full">
          {children}
          <div className="flex p-20 gap-10">
            {info}
            {des}
          </div>
        </div>
      </body>
    </html>
  );
}
