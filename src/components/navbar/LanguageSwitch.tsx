import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
const LanguageSwitch = () => {
  const [selected, setSelected] = useState("US");

  return (
    <div className="language_switch">
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        showSelectedLabel={false}
        showSecondarySelectedLabel={false}
        showOptionLabel={false}
        countries={["US", "DE", "GR", "JP", "KR"]}
        selectedSize={22}
        className="border-transparent"
        optionsSize={18}
      />
    </div>
  );
};

export default LanguageSwitch;
