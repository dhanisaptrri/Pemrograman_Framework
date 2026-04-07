import { render, screen, waitFor } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";
import Navbar from "@/components/layouts/navbar";

// 1. Mocking Router (Poin 4 Tugas)
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    route: "/",
    pathname: "/",
    query: {},
    asPath: "",
    events: { on: jest.fn(), off: jest.fn() },
  }),
}));

// 2. Mocking Next-Auth (Wajib agar Navbar tidak error)
jest.mock("next-auth/react", () => ({
  useSession: () => ({
    data: null, // Simulasi user tidak login
    status: "unauthenticated",
  }),
}));

// 3. Mocking SWR untuk Halaman Produk
jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({
    data: { data: [] },
    error: null,
    isLoading: false,
  }),
}));

describe("Aplikasi Unit Testing", () => {
  // TEST FITUR 1: HALAMAN PRODUK
  it("renders product page correctly", async () => {
    render(<TampilanProduk />);
    
    // Menunggu sampai skeleton hilang dan title muncul
    await waitFor(() => {
      const title = screen.getByTestId("title");
      // MENGGUNAKAN toBeTruthy (Pasti Jalan)
      expect(title).toBeTruthy();
      // Memastikan teks sama dengan yang ada di terminal tadi: "Daftar Produk"
      expect(title.textContent).toBe("Daftar Produk"); 
    }, { timeout: 3000 });
  });

  // TEST FITUR 2: KOMPONEN NAVBAR
  it("renders navbar correctly", () => {
    // Poin 1: Unit Test Komponen
    const { asFragment } = render(<Navbar />);
    
    // Poin 2: Snapshot Test
    expect(asFragment()).toMatchSnapshot();
  });
});