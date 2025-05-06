import NavigationItem from "./NavigationItem/NavigationItem";

interface NavigationItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavigationList = () => {
  const navigationList: NavigationItemType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72l-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69l72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="m222.085 235.644l-62.01-62.01L81.8 251.905l62.009 62.01l-.04.04l66.958 66.957l11.354 11.275l.04.039l66.957-66.957l11.273-11.354l202.277-202.271l-78.272-78.271Zm44.33 66.958l-11.274 11.353l-33.057 33.056l-.04-.039l-33.017-33.017l.04-.04l-62.009-62.01l33.016-33.016l62.01 62.009L424.356 78.627l33.017 33.017Z"
          />
          <path
            fill="currentColor"
            d="M448 464H48V64h300.22l32-32H16v464h464V179.095l-32 32V464z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M8.175.002a8 8 0 1 0 2.309 15.603a.75.75 0 0 0-.466-1.426a6.5 6.5 0 1 1 3.996-8.646a.75.75 0 0 0 1.388-.569A8 8 0 0 0 8.175.002ZM8.75 3.75a.75.75 0 0 0-1.5 0v3.94L5.216 9.723a.75.75 0 1 0 1.06 1.06L8.53 8.53l.22-.22V3.75ZM15 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-.25-6.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="mt-24">
      {navigationList.map((item) => (
        <NavigationItem key={item.id} label={item.label} link={item.link} icon={item.icon} />
      ))}
    </div>
  );
};

export default NavigationList;
