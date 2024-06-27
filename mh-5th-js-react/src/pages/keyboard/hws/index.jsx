import React from "react";
import SashasWork from "../..components/hw/L02/App";

const hws = {
  Madina: [
    {
      label: "HW2",
      component: null,
    },
  ],
  Sasha: [
    {
      label: "HW2",
      component: <SashasWork />,
    },
  ],
};

const Homeworks = () => {
  const [showMadinasHW, setShowMadinasHW] = useState(false);
  return (
    <section>
      <div>
        <button onClick={() => setShowMadinasHW((prev) => !prev)}>
          Madina
        </button>
        <div>
          {showMadinasHW &&
            hws.Madina.map((item) => (
              <ShowOnClickButton
                buttonText={item.label}
                content={item.component}
              />
            ))}
        </div>
        <button>Sasha</button>
      </div>
    </section>
  );
};
export default Homeworks;
