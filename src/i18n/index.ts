import catalan from "./ca.json";
import español from "./es.json";

const LANGUAGES = {
  CATALAN: "ca",
  ESPAÑOL: "es",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.CATALAN) return catalan;
  if (currentLocale === LANGUAGES.ESPAÑOL) return español;
  return español;
};
