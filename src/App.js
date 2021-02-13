import "./App.css";
import Curriculum from "./components/Curriculum";

function App() {
  const information = {
    PersonalInfo: {
      name: "Luiz Paulo Oliveira Lyra de Miranda",
      phone: "+55 (21) 99404-6890",
      email: "luiz_paulo6@hotmail.com",
      location: "Rio de Janeiro, RJ - Brasil",
    },
    SocialInfo: {
      github: "/lulyra",
      linkedIn: "/in/lulyra",
    },
    Introduction: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    Graduation: [
      {
        typeOfGraduation: "Pós Graduação",
        university: "Pontifícia Universidade Católica de Minas Gerais",
        startDate: "2020",
        endDate: "current",
        subject: "Engenharia de Software",
      },
      {
        typeOfGraduation: "Graduação",
        university: "Universidade Veiga de Almeida",
        startDate: "2013",
        endDate: "2019",
        subject: "Engenharia Civil",
      },
    ],
    Idioms: [
      {
        info: `
        Intercâmbio Vancouver
        Canadá - 2013
        `,
        language: "Inglês",
        level: "Fluente",
      },
    ],
    Experience: [
      {
        where: "Estágio em construtora",
        year: "2018",
        details: `Experiência em gestão de negócios e projetos.`,
      },
    ],
    Projects: [
      {
        title: "Whatsapp Clone",
        technology: [
          "MongoDB",
          "ReactJs",
          "API call",
          "Socket.io",
          "Javascript",
          "Authentication",
          "Bootstrap",
          "Express",
        ],
      },
    ],
    Skills: [
      "Javascript",
      "Node.js",
      "React.js",
      "CSS",
      "Sass",
      "Agile",
      "Arquitetura Web",
      "Eng. Requisitos",
      "Design Patterns",
      "Test Driven Development",
      "MongoDB",
    ],
  };

  return (
    <div className="App">
      <Curriculum info={information} />
    </div>
  );
}

export default App;
