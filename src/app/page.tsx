import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import {Product} from "@/components/Product/Product";

export default function HomePage() {
  return (
    <>
      <Product />
      <ColorSchemeToggle />
    </>
  );
}
