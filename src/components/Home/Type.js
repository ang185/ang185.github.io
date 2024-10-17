import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguageView } from "context/Context";
import { TRANSLATIONS_TYPE } from "helpers/enums.types";

function Type() {
  const { language } = useLanguageView();
  const t = TRANSLATIONS_TYPE[language];
  return (
    <Typewriter
      options={{
        strings: [
          t.pythonDeveloper,
          t.backendDeveloper,
          t.dataEngineer,
          t.aiIntegration,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
