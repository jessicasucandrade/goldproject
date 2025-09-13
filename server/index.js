import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, X, Menu, ArrowRight, CheckCircle, TrendingUp, Users, Brain, Clock, FileText, BarChart3, Phone, Mail, MapPin } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 w-full bg-white shadow-md z-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-amber-500 w-10 h-10 rounded-full flex items-center justify-center mr-3", children: /* @__PURE__ */ jsx(Shield, { className: "text-white", size: 24 }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-gray-800", children: "Gold Auditoria em Saúde" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex space-x-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#sobre", className: "text-gray-600 hover:text-amber-600 transition-colors", children: "Sobre Nós" }),
        /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-gray-600 hover:text-amber-600 transition-colors", children: "Serviços" }),
        /* @__PURE__ */ jsx("a", { href: "#contato", className: "text-gray-600 hover:text-amber-600 transition-colors", children: "Contato" })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden text-gray-600",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-4 pb-4 border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-3 mt-3", children: [
      /* @__PURE__ */ jsx(Link, { to: "#sobre", className: "text-gray-600 hover:text-amber-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "Sobre Nós" }),
      /* @__PURE__ */ jsx(Link, { to: "#servicos", className: "text-gray-600 hover:text-amber-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "Serviços" }),
      /* @__PURE__ */ jsx(Link, { to: "#contato", className: "text-gray-600 hover:text-amber-600 transition-colors", onClick: () => setIsMenuOpen(false), children: "Contato" })
    ] }) })
  ] }) });
}
function HeroSection() {
  return /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-r from-amber-50 to-amber-100", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-1/2 mb-10 md:mb-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight", children: "Qualidade, transparência e eficiência em gestão de saúde" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Somos especialistas em auditoria e consultoria em saúde, oferecendo soluções que garantem excelência nos processos assistenciais e financeiros." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contato",
            className: "bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center",
            children: [
              "Fale Conosco",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2", size: 18 })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#servicos",
            className: "border border-amber-500 text-amber-600 hover:bg-amber-50 font-medium py-3 px-6 rounded-lg transition-colors",
            children: "Nossos Serviços"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-1/2 flex justify-center", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6aaa508f-4991-4e64-9af9-9d9f3eda0d1d.png",
        alt: "Profissionais de auditoria em saúde analisando documentos em uma mesa de reunião",
        className: "rounded-lg shadow-xl"
      }
    ) })
  ] }) }) });
}
function AboutSection() {
  return /* @__PURE__ */ jsx("section", { id: "sobre", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Sobre Nós" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-amber-500 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-gray-600 max-w-3xl mx-auto", children: "A Gold Auditoria em Saúde nasce com o propósito de promover qualidade, transparência e eficiência nos processos de gestão em saúde." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Nossa Missão" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: '"Oferecer soluções em auditoria e consultoria em saúde, assegurando ética, precisão e inovação, com foco na melhoria contínua da assistência ao paciente e no uso racional dos recursos."' }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-800 mb-4 mt-8", children: "Nossa Visão" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: '"Ser referência nacional em auditoria em saúde, reconhecida pela excelência técnica, compromisso ético e resultados sustentáveis."' })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86f34e1f-a1b2-4326-b939-283109006608.png",
          alt: "Equipe de profissionais da Gold Auditoria em Saúde em reunião de trabalho",
          className: "rounded-lg shadow-md"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-800 mb-8 text-center", children: "Nossos Valores" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx(Shield, { className: "mx-auto text-amber-600 mb-4", size: 32 }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Ética e transparência" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Agimos com integridade em todas as nossas relações" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "mx-auto text-amber-600 mb-4", size: 32 }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Compromisso com a qualidade" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Buscamos excelência na assistência ao paciente" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "mx-auto text-amber-600 mb-4", size: 32 }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Foco em resultados" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Priorizamos a sustentabilidade financeira" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx(Users, { className: "mx-auto text-amber-600 mb-4", size: 32 }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Respeito às pessoas" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Valorizamos pacientes e profissionais" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 p-6 rounded-lg text-center", children: [
          /* @__PURE__ */ jsx(Brain, { className: "mx-auto text-amber-600 mb-4", size: 32 }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-2", children: "Inovação contínua" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Sempre buscamos atualização e melhoria" })
        ] })
      ] })
    ] })
  ] }) });
}
function ServicesSection() {
  return /* @__PURE__ */ jsx("section", { id: "servicos", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Nossos Serviços" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-amber-500 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-gray-600 max-w-3xl mx-auto", children: "Oferecemos soluções especializadas para operadoras, clínicas, hospitais e profissionais de saúde" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(Clock, { className: "text-amber-600", size: 28 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-4", children: "Auditoria Concorrente" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Acompanhamento em tempo real da internação hospitalar, garantindo a qualidade da assistência, prevenção de glosas e uso racional dos recursos." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Monitoramento em tempo real" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Prevenção de glosas" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Otimização de recursos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(FileText, { className: "text-amber-600", size: 28 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-4", children: "Auditoria Retrospectiva" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Análise detalhada das contas hospitalares e procedimentos já realizados, identificando inconsistências e prevenindo prejuízos." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Análise de contas hospitalares" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Identificação de inconsistências" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Prevenção de prejuízos" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(BarChart3, { className: "text-amber-600", size: 28 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-800 mb-4", children: "Auditoria Técnica" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Revisão técnica de procedimentos médicos, de enfermagem e exames, verificando conformidade com protocolos e normas vigentes." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Revisão de procedimentos" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Verificação de conformidade" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "text-amber-500 mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Adequação às normas" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 bg-amber-50 p-8 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:w-2/3 mb-6 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Consultoria em Gestão" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Apoio estratégico para hospitais, clínicas e operadoras, com foco na melhoria de processos, redução de custos e aumento da eficiência operacional." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:w-1/3 flex justify-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "#contato",
          className: "bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors",
          children: "Solicitar Consultoria"
        }
      ) })
    ] }) })
  ] }) });
}
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Obrigado pelo seu contato! Retornaremos em breve.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };
  return /* @__PURE__ */ jsx("section", { id: "contato", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 mb-4", children: "Entre em Contato" }),
      /* @__PURE__ */ jsx("div", { className: "h-1 w-20 bg-amber-500 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-gray-600 max-w-3xl mx-auto", children: "Estamos à disposição para esclarecer dúvidas e apresentar nossas soluções personalizadas" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-gray-700 mb-2", children: "Nome Completo" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleInputChange,
                required: true,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-gray-700 mb-2", children: "Empresa" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "company",
                name: "company",
                value: formData.company,
                onChange: handleInputChange,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-gray-700 mb-2", children: "E-mail" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleInputChange,
                required: true,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-gray-700 mb-2", children: "Telefone" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                value: formData.phone,
                onChange: handleInputChange,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-gray-700 mb-2", children: "Mensagem" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              value: formData.message,
              onChange: handleInputChange,
              rows: 5,
              required: true,
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors",
            children: "Enviar Mensagem"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "md:w-1/2", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-8 rounded-lg h-full", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-gray-800 mb-6", children: "Informações de Contato" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-amber-100 p-3 rounded-full mr-4", children: /* @__PURE__ */ jsx(Phone, { className: "text-amber-600", size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: "Telefone" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "(XX) XXXX-XXXX" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-amber-100 p-3 rounded-full mr-4", children: /* @__PURE__ */ jsx(Mail, { className: "text-amber-600", size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: "E-mail" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "contato@goldauditoria.com.br" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-amber-100 p-3 rounded-full mr-4", children: /* @__PURE__ */ jsx(MapPin, { className: "text-amber-600", size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: "Endereço" }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
                "Av. Exemplo, 123, Sala 456",
                /* @__PURE__ */ jsx("br", {}),
                "Centro, Cidade - UF"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800 mb-4", children: "Horário de Atendimento" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
            "Segunda a Sexta: 8h às 18h",
            /* @__PURE__ */ jsx("br", {}),
            "Sábado: 9h às 12h"
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-800 text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-amber-500 w-8 h-8 rounded-full flex items-center justify-center mr-3", children: /* @__PURE__ */ jsx(Shield, { className: "text-white", size: 18 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Gold Auditoria em Saúde" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4", children: "Qualidade, transparência e eficiência em gestão de saúde." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: "Serviços" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Auditoria Concorrente" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Auditoria Retrospectiva" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Auditoria Técnica" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Consultoria em Gestão" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: "Links Rápidos" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sobre", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Sobre Nós" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Nossos Serviços" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contato", className: "text-gray-400 hover:text-amber-400 transition-colors", children: "Contato" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: "Contato" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Phone, { className: "mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "(XX) XXXX-XXXX" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Mail, { className: "mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "contato@goldauditoria.com.br" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "mr-2", size: 16 }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Av. Exemplo, 123, Centro" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gray-700 mt-12 pt-8 text-center text-gray-400", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Gold Auditoria em Saúde. Todos os direitos reservados."
    ] }) })
  ] }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(ContactSection, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function meta({}) {
  return [{
    title: "Gold Consultoria"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home$1() {
  return /* @__PURE__ */ jsx(Home, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DkyRq-pV.js", "imports": ["/assets/chunk-B7RQU5TL-C_VFQaq3.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DnWUNOom.js", "imports": ["/assets/chunk-B7RQU5TL-C_VFQaq3.js"], "css": ["/assets/root-CLzBDAa4.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-CWGauAPw.js", "imports": ["/assets/chunk-B7RQU5TL-C_VFQaq3.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-7217fb13.js", "version": "7217fb13", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
