import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <div className="app-shell">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        Praktikum Next.js Pages Router
      </footer>
    </div>
  );
};

export default AppShell;