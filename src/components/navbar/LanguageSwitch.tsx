import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
const LanguageSwitch = () => {
  const [selected, setSelected] = useState("US");

  return (
    <div>
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        showSelectedLabel={false}
        showSecondarySelectedLabel={false}
        showOptionLabel={false}
        
      />
    </div>
  );
};

export default LanguageSwitch;
