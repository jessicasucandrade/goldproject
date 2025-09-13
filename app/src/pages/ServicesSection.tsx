import { Clock, FileText, BarChart3, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções especializadas para operadoras, clínicas, hospitais e profissionais de saúde
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Auditoria Concorrente</h3>
            <p className="text-gray-600 mb-6">
              Acompanhamento em tempo real da internação hospitalar, garantindo a qualidade da assistência, prevenção de glosas e uso racional dos recursos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Monitoramento em tempo real</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Prevenção de glosas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Otimização de recursos</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FileText className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Auditoria Retrospectiva</h3>
            <p className="text-gray-600 mb-6">
              Análise detalhada das contas hospitalares e procedimentos já realizados, identificando inconsistências e prevenindo prejuízos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Análise de contas hospitalares</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Identificação de inconsistências</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Prevenção de prejuízos</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Auditoria Técnica</h3>
            <p className="text-gray-600 mb-6">
              Revisão técnica de procedimentos médicos, de enfermagem e exames, verificando conformidade com protocolos e normas vigentes.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Revisão de procedimentos</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Verificação de conformidade</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-amber-500 mr-2" size={16} />
                <span className="text-gray-600">Adequação às normas</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 bg-amber-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Consultoria em Gestão</h3>
              <p className="text-gray-600">
                Apoio estratégico para hospitais, clínicas e operadoras, com foco na melhoria de processos, redução de custos e aumento da eficiência operacional.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <a 
                href="#contato" 
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Solicitar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}