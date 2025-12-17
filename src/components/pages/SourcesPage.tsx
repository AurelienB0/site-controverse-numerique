import React from "react";
import img5 from "../../styles/AIA.jpeg";

export function SourcesPage() {
  const bibliography = [
    "Adetimirin, Oore. « Is Central Bank Digital Currency the Future of Fraud Prevention? » Featurespace, 19 avril 2024. https://www.featurespace.com/newsroom/is-central-bank-digital-currency-the-future-of-fraud-prevention.",
    "Baubeau, Patrice. « L'identification, la quatrième fonction de la monnaie ». The Conversation, 19 août 2021. https://doi.org/10.64628/AAK.j3qwjc67h.",
    "Buchanan, Bill. « Cryptojacking : votre ordinateur fabrique des monnaies virtuelles à votre insu ». The Conversation, 22 janvier 2018. https://doi.org/10.64628/AAK.9ndtc5vp4.",
    "Dowd, Kevin. « So Far, Central Bank Digital Currencies Have Failed ». Economic Affairs 44, no 1 (2024): 71‑94. https://doi.org/10.1111/ecaf.12621.",
    "Dupuis, Daniel, Kimberly Gleason, et Zhijie Wang. Money Laundering in a CBDC World: A Game of Cats and Mice. (London, United Kingdom) 29, no 1 (2022): 171‑84. https://doi.org/10.1108/JFC-02-2021-0035.",
    "EL ATTAR, Abdelilah, et Chaymae CHAOUI. « Central Bank Digital Money (CBDC): A Literature Review ». Dossiers de Recherches en Économie et Gestion Vol 11 (février 2023): 133-147 Pages. https://doi.org/10.34874/IMIST.PRSM/DOREG-V11I01.37876.",
    "Fabris, Nikola. « Cashless Society – The Future of Money or a Utopia? » Journal of Central Banking Theory and Practice 8, no 1 (2019): 53‑66. https://doi.org/10.2478/jcbtp-2019-0003.",
    "Focardi, Sergio. « Les monnaies numériques des banques centrales : vers une société sans espèces ? » The Conversation, 7 mai 2018. https://doi.org/10.64628/AAK.r4jev4ch5.",
    "Hadad, Shahrazad, et Constantin Bratianu. « Dematerialization of Banking Products and Services in the Digital Era ». Management & Marketing. Challenges for the Knowledge Society 14, no 3 (2019): 318‑37. https://doi.org/10.2478/mmcks-2019-0023.",
    "Kotkowski, Radoslaw, et Michal Polasik. « COVID-19 Pandemic Increases the Divide between Cash and Cashless Payment Users in Europe ». Economics Letters 209 (décembre 2021): 110139. https://doi.org/10.1016/j.econlet.2021.110139.",
    'Kumari, Sheetal, Fancy Mary Pdang, et Priya Gupta. « The Future of Banking: Is the "cashless society" achievable? » International Journal of Innovations in Science Engineering And Management, 28 avril 2025, 49‑58. https://doi.org/10.69968/ijisem.2025v4si149-58.',
    "Lacroix, Alexandre. « La société sans cash, ou la dictature du Bien ? » Philosophie magazine 103, no 10 (2016): 10‑10. https://doi.org/10.3917/phimag.103.0008.",
    "Li, Yuan, et Wilfrid Azan. « Production de connaissances scientifiques sur la blockchain : Une revue bibliométrique et lexicométrique »: Gestion 2000 Volume 40, no 1 (2023): 15‑36. https://doi.org/10.3917/g2000.401.0015.",
    "Li, Ziyu, Yanmei Zhang, Qian Wang, et Shiping Chen. « Transactional Network Analysis and Money Laundering Behavior Identification of Central Bank Digital Currency of China ». Journal of Social Computing 3, no 3 (2022): 219‑30. https://doi.org/10.23919/JSC.2022.0011.",
    "Omar, Rafik, et Vinden Wylde. « Could digital currencies end banking as we know it? The future of money ». The Conversation, 10 octobre 2025. https://doi.org/10.64628/AB.sw49df97k.",
    "Ponsot, Jean-François. « Pourrait-on avoir confiance dans un euro numérique ? » The Conversation, 28 août 2024. https://doi.org/10.64628/AAK.mpyrnfkr6.",
    "Sebti, Raja. « DIGITAL MONEY: OPPORTUNITIES AND CHALLENGES ». International Journal of Humanities and Educational Research 4, no 2 (2022). https://doi.org/10.47832/2757-5403.13.14.",
    "Society 5.0: A People-Centric Super-Smart Society. Hitachi-UTokyo Laboratory (H-UTokyo Lab.). Springer Singapore, 2020. https://doi.org/10.1007/978-981-15-2989-4.",
    "Trabelsi, Donia, Michel Berne, et Sondes Mbarek. « Krach du bitcoin : cybercriminalité et surconsommation d'électricité, la face cachée des cryptomonnaies ». The Conversation, 20 mai 2021. https://doi.org/10.64628/AAK.7pwafk659.",
    "Maxime Duval. La Monnaie Publique à l'Ère Numérique : Une Analyse Institutionnaliste du Concept de Monnaie Numérique de Banque Centrale. Economies et finances. Université de Nanterre - Paris X, 2024. Français. https://theses.hal.science/tel-05062845/file/2024PA100069.pdf",
  ];

  const teamMembers = [
    "Adébayo MICHODJEHOUN",
    "Amine HALHALI",
    "Dhruvi SOUCHIL",
    "Sohaib AIT-LAMINE",
    "Aurélien BORDET",
  ];

  return (
    <div className="space-y-20">
      <section id="biblio" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Bibliographie</h2>
        </div>
        <div className="space-y-4 bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
          {bibliography.map((ref, index) => {
            const anchorId = ref.split(" ")[0].replace(",", "");

            return (
              <p
                key={index}
                id={anchorId}
                className="text-foreground/80 text-sm leading-relaxed pl-6 -indent-6 scroll-mt-32 target:bg-yellow-50 target:ring-2 target:ring-indigo-100 rounded p-1 transition-colors duration-500"
                style={{ scrollMargin: 280 }}
              >
                {ref}
              </p>
            );
          })}
        </div>
      </section>

      <section id="ia" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">
            Utilisation d'intelligence artificielle
          </h2>
          <img
            src={img5}
            alt="AIA"
            style={{
              width: "3%",
              right: 400,
              alignSelf: "flex-end",
              position: "absolute",
            }}
          />
        </div>
        <div className="bg-white rounded-lg p-8 border-l-4 border-indigo-600 shadow-sm">
          <p className="text-foreground/80 leading-relaxed">
            Notre groupe a eu recours à certains outils d'IA générative pour
            superviser la création du site internet. N'ayant jamais fait de web,
            nous avons fait l'architecture du site à l'aide de LLM puis avons
            mis en page tout notre travail et nos recherches après avoir appris
            les bases du framework React. Nos recherches ont toutes été
            réalisées grâce à Google Scholar, le journal en ligne The
            Conversation, les bases de données universitaires HAL UM et BIU, la
            base de données du CAIRN ainsi que l'outil NotebookLM pour suggérer
            des ressources.
          </p>
        </div>
      </section>

      <section id="mentions" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Mentions légales</h2>
        </div>
        <div className="bg-white rounded-lg p-8 space-y-4 text-foreground/80 leading-relaxed border border-gray-200 shadow-sm">
          <p>
            Le site web suivant est un exercice réalisé par des élèves de 3ème
            année de l'école Polytech Montpellier dans le cadre du cours
            d'introduction au système d'information du département IG. Ces sites
            sont le résultat de travail d'étudiants et sont mis en ligne pour
            des raisons pédagogiques et didactiques; une fois en ligne, ils ne
            sont plus mis à jour.
          </p>
          <p>
            Vos réactions et commentaires sont très bienvenus. Pour signaler une
            erreur, réagir à un contenu ou demander une modification, merci
            d'écrire aux élèves et à la responsable de l'enseignement
            (isabelle.bourdon@umontpellier.fr).
          </p>
          <p>
            Polytech Montpellier décline toute responsabilité pour les erreurs
            et les imprécisions que peuvent contenir ces sites.
          </p>
        </div>
      </section>

      <section id="equipe" className="scroll-mt-48">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="pb-0 text-indigo-700">Présentation de l'équipe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-50 transition-all duration-300 rounded-lg p-8 text-center border-2 border-gray-200 hover:border-indigo-400 shadow-sm hover:shadow-md"
            >
              <p className="text-foreground">{member}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
