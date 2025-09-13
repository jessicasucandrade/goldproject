import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Qualidade, transparência e eficiência em gestão de saúde
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos especialistas em auditoria e consultoria em saúde, oferecendo soluções que garantem excelência nos processos assistenciais e financeiros.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contato" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
              >
                Fale Conosco
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="#servicos" 
                className="border border-amber-500 text-amber-600 hover:bg-amber-50 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6aaa508f-4991-4e64-9af9-9d9f3eda0d1d.png" 
              alt="Profissionais de auditoria em saúde analisando documentos em uma mesa de reunião" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}