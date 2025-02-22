import Header from "@/components/Header";

const texto = `Recepção`;
export default function Recepcao() {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header />
      <p className="text-center mt-8 mb-8 font-[family-name:var(--font-geist-sans)] font-thin ml-1">
        {texto}
      </p>
    </div>
  );
}
