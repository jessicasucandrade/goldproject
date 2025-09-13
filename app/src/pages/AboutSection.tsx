import { Shield, CheckCircle, TrendingUp, Users, Brain } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A Gold Auditoria em Saúde nasce com o propósito de promover qualidade, transparência e eficiência nos processos de gestão em saúde.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
            <p className="text-gray-600 mb-6">
              "Oferecer soluções em auditoria e consultoria em saúde, assegurando ética, precisão e inovação, com foco na melhoria contínua da assistência ao paciente e no uso racional dos recursos."
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Nossa Visão</h3>
            <p className="text-gray-600">
              "Ser referência nacional em auditoria em saúde, reconhecida pela excelência técnica, compromisso ético e resultados sustentáveis."
            </p>
          </div>
          <div>
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86f34e1f-a1b2-4326-b939-283109006608.png" 
              alt="Equipe de profissionais da Gold Auditoria em Saúde em reunião de trabalho" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Shield className="mx-auto text-amber-600 mb-4" size={32} />
              <h4 className="font-semibold text-gray-800 mb-2">Ética e transparência</h4>
              <p className="text-sm text-gray-600">Agimos com integridade em todas as nossas relações</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <CheckCircle className="mx-auto text-amber-600 mb-4" size={32} />
              <h4 className="font-semibold text-gray-800 mb-2">Compromisso com a qualidade</h4>
              <p className="text-sm text-gray-600">Buscamos excelência na assistência ao paciente</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <TrendingUp className="mx-auto text-amber-600 mb-4" size={32} />
              <h4 className="font-semibold text-gray-800 mb-2">Foco em resultados</h4>
              <p className="text-sm text-gray-600">Priorizamos a sustentabilidade financeira</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Users className="mx-auto text-amber-600 mb-4" size={32} />
              <h4 className="font-semibold text-gray-800 mb-2">Respeito às pessoas</h4>
              <p className="text-sm text-gray-600">Valorizamos pacientes e profissionais</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <Brain className="mx-auto text-amber-600 mb-4" size={32} />
              <h4 className="font-semibold text-gray-800 mb-2">Inovação contínua</h4>
              <p className="text-sm text-gray-600">Sempre buscamos atualização e melhoria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}