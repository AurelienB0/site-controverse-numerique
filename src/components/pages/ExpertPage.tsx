import React, { useEffect } from "react";
// Assuming you have these imports for your routing
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img1 from "../../styles/1.png";
import img2 from "../../styles/2.png";
import img3 from "../../styles/3.png";
import img4 from "../../styles/4.png";
// --- NEW IMPORT: CHANGE THIS TO YOUR ACTUAL AUDIO FILE NAME ---
import audioFile from "../../styles/interview.mp3";

// --- DATA: EXPERTS INTERNATIONAUX ---
const INTERNATIONAL_EXPERTS = [
  {
    name: "Shahrazad HADAD",
    role: "PhD in Economics, Specialization in Business Administration",
    institution: "The Bucharest University of Economic Studies",
    contact: "shahrazad.hadad@fabiz.ase.ro",
    link: "https://ro.linkedin.com/in/shahrazad-hadad",
  },
  {
    name: "Constantin BRATIANU",
    role: "Professeur",
    institution: "Bucharest University of Economic Studies, Romania",
    contact: "constantin.bratianu@",
    link: null,
  },
  {
    name: "Rui Qin",
    role: "Researcher",
    institution: "Institute of Automation, Chinese Academy of Sciences",
    contact: "qinr01@mail.buffalostate.edu",
    link: null,
  },
  {
    name: "Sergio Focardi",
    role: "Professor & Researcher, Finance Group",
    institution: "ESILV EMLV, Pôle Universitaire Léonard de Vinci, Paris",
    contact: "Via website",
    link: "https://www.sergiofocardi.net/",
  },
  {
    name: "Henry Bakis",
    role: "Professor Emeritus of Geography",
    institution: "Université de Montpellier",
    contact: "hbgeo.bakis@gmail.com",
    link: null,
  },
  {
    name: "Raja SEBTI",
    role: "Enseignant-Chercheur (Monnaie Banque Financement Globalisation)",
    institution: "Université de Bejaia, Algérie",
    contact: "raja.sebti@univ-bejaia.dz",
    link: null,
  },
  {
    name: "Aude Danieli",
    role: "Maîtresse de conférences",
    institution: "Université de Caen Normandie",
    contact: "aude.danieli@unicaen.fr",
    link: null,
  },
  {
    name: "Maxime Duval",
    role: "Doctorant en macroéconomie financière",
    institution: "Université de Nanterre",
    contact: "maxime.duval@parisnanterre.fr",
    link: null,
  },
];

// --- DATA: ACTEURS ---
const ACTORS_DATA = [
  {
    name: "Banques Centrales (BCE, PBOC...)",
    type: "Institutionnel",
    position: "Favorable (mais prudent) / Inquiètes",
    sentiment: "mixed",
    content:
      "Elles cherchent à émettre une MDBC pour préserver la souveraineté monétaire face aux crypto-actifs privés. Elles voient le numérique comme un moyen de réduire les coûts de gestion du cash et de lutter contre le blanchiment. Cependant, l'émergence de la monnaie électronique réduit leur capacité à contrôler l'offre de monnaie et les revenus de \"seigneuriage\".",
    source: "Sebti, Qin, Fabris",
  },
  {
    name: "Le Public / Consommateurs",
    type: "Société Civile",
    position: "Polarisé / Divisé",
    sentiment: "mixed",
    content:
      'Une fracture se creuse entre les "pro-cashless" et les "pro-cash". En Europe, le COVID-19 a agi comme un catalyseur pour le sans-contact. En Inde, les jeunes et les citadins adoptent massivement le mobile, tandis que les ruraux et les personnes âgées sont exclus.',
    source: "Kotkowski, Kumari",
  },
  {
    name: "Populations Rurales & Âgées",
    type: "Groupe Vulnérable",
    position: "Défavorable / Exclu",
    sentiment: "negative",
    content:
      "Victimes de la fracture numérique (\"Digital Illiteracy\"). L'absence d'infrastructure (internet) et le manque de connaissances rendent la société sans espèces difficilement réalisable pour eux, créant un risque d'inégalité financière accrue.",
    source: "Kumari",
  },
  {
    name: "Gouvernements (ex: Inde)",
    type: "Politique",
    position: "Très Favorable / Ambivalent",
    sentiment: "positive",
    content:
      "Ils poussent vers le cashless pour la transparence, l'efficacité économique et les recettes fiscales (réduction du travail au noir). Cependant, ils doivent garantir que le cash fonctionne en cas de catastrophe (panne électrique, ouragan).",
    source: "Kumari, Fabris",
  },
  {
    name: "Fintechs & Géants du Web",
    type: "Entreprise Privée",
    position: "Disruptives",
    sentiment: "positive",
    content:
      'Elles "brisent" le monopole bancaire, réduisent les coûts de transaction et augmentent la vitesse des paiements. En Chine, des plateformes comme Taobao ont explosé, normalisant le paiement numérique.',
    source: "Hadad, Qin",
  },
  {
    name: "Crypto-actifs (Bitcoin, etc.)",
    type: "Technologie / Financier",
    position: "Alternative / Menace",
    sentiment: "neutral",
    content:
      "Concurrents de la monnaie d'État. Ils sont vus comme instables et risqués par les banques centrales, mais leur existence force les États à innover pour ne pas devenir obsolètes. Ils posent des défis éthiques et économiques.",
    source: "Sebti",
  },
  {
    name: "Système Bancaire Commercial",
    type: "Économique",
    position: "En transformation",
    sentiment: "mixed",
    content:
      "Le passage au numérique est vital pour elles (réduction des coûts, IA). Elles craignent cependant la volatilité des dépôts face à une éventuelle monnaie de banque centrale numérique.",
    source: "Kumari, Sebti",
  },
  {
    name: "Utilisateur du Cash",
    type: "Concept / Objet",
    position: "Résistant",
    sentiment: "neutral",
    content:
      "Le cash refuse de mourir. Paradoxalement, le volume de billets en circulation augmente (Zone Euro +6.4%/an). Il reste le seul moyen de paiement garantissant l'anonymat et fonctionnant sans électricité.",
    source: "Hadad, Fabris",
  },
  {
    name: "Cybercriminels",
    type: "Criminel",
    position: "Opportunistes",
    sentiment: "negative",
    content:
      "Le passage au numérique supprime les braquages physiques mais fait exploser la cybercriminalité (vol d'identité, hacking).",
    source: "Fabris",
  },
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive":
      return "bg-green-100 text-green-800 border-green-200";
    case "negative":
      return "bg-red-100 text-red-800 border-red-200";
    case "mixed":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const SourceLinks = ({ sources }: { sources: string }) => {
  const names = sources.split(",").map((s) => s.trim());
  return (
    <>
      {names.map((name, i) => (
        <span key={i}>
          <a
            href={`/#/sources#${name.split(" ")[0]}`}
            className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium transition-colors"
            style={{ color: "#2239b8ff" }}
          >
            {name}
          </a>
          {i < names.length - 1 && ", "}
        </span>
      ))}
    </>
  );
};

export function ExpertPage() {
  const location = useLocation();

  useEffect(() => {
    // 1. Get the actual ID from the end of the URL
    // This splits by '#' and takes the last part (e.g., 'frise')
    const hashParts = window.location.href.split('#');
    const id = hashParts.length > 2 ? hashParts[hashParts.length - 1] : null;

    if (id) {
      // 2. Try to find the element
      const element = document.getElementById(id);

      if (element) {
        // 3. Small timeout to ensure the DOM is fully ready
        setTimeout(() => {
          const fixedHeaderOffset = -120; // Adjust this for your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - fixedHeaderOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 150); // Increased timeout slightly for reliability
      }
    }
  }, [location]); // Re-runs every time the location (and hash) changes

  
  return (
    <div className="space-y-20 max-w-5xl mx-auto px-4 py-8">
      {/* SECTION 1: INTERVIEW */}
      <section id="interview" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Interview de l'expert
          </h2>
        </div>
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <div
            className="rounded-lg p-6 border-l-4 border-indigo-800 shadow-md"
            style={{ backgroundColor: "#f2a053ff" }}
          >
            <p className="italic text-white font-medium text-lg">
              Expert : Sergio FOCARDI
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <p className="mb-6">
              Sergio Focardi est un expert reconnu dans le domaine des monnaies
              numériques et de la finance. Son analyse approfondie des CBDC nous
              a permis de mieux comprendre les enjeux techniques et sociétaux de
              cette technologie émergente.
            </p>

            {/* --- AUDIO PLAYER ADDITION --- */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                🎧 Écouter l'entretien complet
              </h4>
              <audio
                controls
                className="w-full h-10 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <source src={audioFile} type="audio/mpeg" />
                Votre navigateur ne supporte pas l'élément audio.
              </audio>
            </div>
            {/* ----------------------------- */}
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPERTS INTERNATIONAUX */}
      <section id="experts-list" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Panel d'Experts Académiques & Internationaux
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERNATIONAL_EXPERTS.map((expert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {expert.name}
              </h3>
              <p className="text-indigo-600 font-medium text-sm mb-2">
                {expert.institution}
              </p>
              <p className="text-gray-600 text-sm mb-4">{expert.role}</p>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-1">
                <span className="text-xs text-gray-500">
                  <span className="font-bold">Contact:</span> {expert.contact}
                </span>
                {expert.link && (
                  <a
                    href={expert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-indigo-500 hover:underline"
                  >
                    Voir profil / Site web &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FRISE */}
      <section id="frise" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Frise chronologique
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <img
            src={img1}
            alt="Timeline 1"
            className="w-full rounded shadow-sm"
          />
          <img
            src={img2}
            alt="Timeline 2"
            className="w-full rounded shadow-sm"
          />
          <img
            src={img3}
            alt="Timeline 3"
            className="w-full rounded shadow-sm"
          />
          <img
            src={img4}
            alt="Timeline 4"
            className="w-full rounded shadow-sm"
          />
        </div>
      </section>

      {/* SECTION 4: ACTEURS */}
      <section id="acteurs" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-2xl font-bold text-indigo-700 m-0">
            Identification des Acteurs & Positions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {ACTORS_DATA.map((actor, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {actor.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {actor.name}
                </h3>
              </div>

              <div className="p-5 flex-grow">
                <div
                  className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-4 border ${getSentimentColor(
                    actor.sentiment
                  )}`}
                >
                  Position : {actor.position}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {actor.content}
                </p>
              </div>

              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 mt-auto">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold not-italic text-gray-400 uppercase tracking-wider text-[10px] mr-2">
                    Source:
                  </span>
                  <SourceLinks sources={actor.source} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
